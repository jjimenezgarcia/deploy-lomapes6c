import {
  getContentType,
  getFile,
    getSolidDataset,
    getSourceUrl,
    getStringNoLocale,
    getThing,
    getThingAll,
    isRawData,
  } from "@inrupt/solid-client";
  import { getDefaultSession } from "@inrupt/solid-client-authn-browser";
  import { SCHEMA_INRUPT } from "@inrupt/vocab-common-rdf";


  function isData(element : any, index : number, array: any) { 
    return (element != "No data"); 
 }

  export async function readFromFriendDataSet(friendUrl : string) {

    // Obtener la sesion actual y su webId
    const session = getDefaultSession();
    const { webId } = session.info;

    // Comprobar que la sesion es válida
    if (!webId) {
      return null;
    }

    // Obtener la url del dataset de marcadores
    const datasetUrl = friendUrl.replace("profile/card#me", "") + "public/markers/"

    // Obtenemos la url de cada marcador
    const myDataset = await getSolidDataset(
        datasetUrl,
        { fetch: session.fetch }          // fetch from authenticated session
      );
      // Obtener los datos de cada marcador
    const markers = getThingAll(myDataset).map( async (thing) => {
      const thingDataset = await getSolidDataset(
          thing.url,
          { fetch: session.fetch }          // fetch from authenticated session
        );

        // Devolvemos un JSON con los datos o un string con el mensaje de 'No data'
          const data = getThingAll(thingDataset).map((thing) => {
              const thingData = getStringNoLocale(thing, SCHEMA_INRUPT.description)
              return thingData ? JSON.parse(thingData) : "No data";
          }).filter(isData)
          let finalData = new Array()
          data.forEach( (element : any ) => finalData.push(element))
          

      return finalData
    })


      // Crear una nueva lista
      let newMarkers = new Array()

      for(let i = 0; i < markers.length; i++){
        markers[i].then((array: any) => {
          array.forEach((object: any) => {
            newMarkers.push(object)
          });
        });
      }

      return newMarkers
    }

    export async function readFromDataSet() {

      // Obtener la sesion actual y su webId
      const session = getDefaultSession();
      const { webId } = session.info;
  
      // Comprobar que la sesion es válida
      if (!webId) {
        return null;
      }
  
      // Obtener la url del dataset de marcadores
      const datasetUrl = webId.replace("profile/card#me", "") + "public/markers/"
  
      // Obtenemos la url de cada marcador
      const myDataset = await getSolidDataset(
          datasetUrl,
          { fetch: session.fetch }          // fetch from authenticated session
        );
        // Obtener los datos de cada marcador
      const markers = getThingAll(myDataset).map( async (thing) => {
        const thingDataset = await getSolidDataset(
            thing.url,
            { fetch: session.fetch }          // fetch from authenticated session
          );
  
          // Devolvemos un JSON con los datos o un string con el mensaje de 'No data'
            const data = getThingAll(thingDataset).map((thing) => {
                const thingData = getStringNoLocale(thing, SCHEMA_INRUPT.description)
                return thingData ? JSON.parse(thingData) : "No data";
            }).filter(isData)
            let finalData = new Array()
            data.forEach( (element : any ) => finalData.push(element))
            
  
        return finalData
      })
  
  
        // Crear una nueva lista
        let newMarkers = new Array()
  
        for(let i = 0; i < markers.length; i++){
          markers[i].then((array: any) => {
            array.forEach((object: any) => {
              newMarkers.push(object)
            });
          });
        }
  
        return newMarkers
      }

  export async function getFriendsFromPod() {
    // Obtener la sesion actual y su webId
    const session = getDefaultSession();
    const { webId } = session.info;

    // Comprobar que la sesion es válida
    if (!webId) {
      return null;
    }

    const fileURL = webId.replace("#me", "")

    try {
      // file is a Blob (see https://developer.mozilla.org/docs/Web/API/Blob)
      const file = await getFile(
        fileURL,               // File in Pod to Read
        { fetch: session.fetch }       // fetch from authenticated session
      );

      const reader = new FileReader();

      let content
      // This fires after the blob has been read/loaded.
      reader.addEventListener('loadend', (e) => {
          content = parseContent(e.target?.result)
      });

      // Start reading the blob as text.
      reader.readAsText(file);

      console.log(content)
      
    } catch (err) {
      console.error(err);
    }
  }

  function parseContent(content: any){
    const lines = content.split("\n")
    let prefixes = new Array()
    lines.forEach((e : string) => {
      if (e.includes("@prefix c"))
      prefixes.push(e)
    })

    let friends = new Array()
    prefixes.forEach((e : string) => {
      const url = e.split(": ")[1]
      friends.push(url)
    })

    return friends
  }
 