import {
    getFile,
    getThing,
    getSolidDataset,
    getStringNoLocale,
    getThingAll,
    getUrlAll
  } from "@inrupt/solid-client";
import * as solid from '@inrupt/solid-client'
import { SCHEMA_INRUPT } from "@inrupt/vocab-common-rdf";
import { FOAF } from "@inrupt/vocab-common-rdf";
import { getMarkersUrl, getSessionWebID } from "./Session";


function isData(element : any, index : number, array: any) { 
  return (element !== "No data"); 
}

export async function readFromFriendDataSet(friendUrl: string) {
  const { session } = getSessionWebID();
  const datasetUrl = friendUrl.replace(/\/profile\/card#me/, '/public/markers');

  // Obtenemos la url de cada marcador
  const myDataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

  // Obtener los datos de cada marcador
  const markers = await Promise.all(
    getThingAll(myDataset).map(async (thing) => {
      const thingDataset = await getSolidDataset(thing.url, { fetch: session.fetch });
      // Devolvemos un JSON con los datos o un string con el mensaje de 'No data'
      const data = getThingAll(thingDataset)
        .map((thing) => {
          const thingData = getStringNoLocale(thing, SCHEMA_INRUPT.description);
          return thingData ? JSON.parse(thingData) : "No data";
        })
        .filter(isData);
      return data;
    })
  );

  // Crear una nueva lista
  const newMarkers: any[] = [];
  markers.forEach((array: any) => {
    array.forEach((object: any) => {
      newMarkers.push(object);
    });
  });

  return newMarkers;
}


export async function getAllFriendsFromPod() { 

  // Obtener la sesion actual y su webId
  const { webId } = getSessionWebID();
  
  const userId = webId.split("#")[0]

  const profile = getThing(await getSolidDataset(userId), webId)
  if (profile !== null) {
    let friendsAndUser = getUrlAll(profile, FOAF.knows);

    const filteredFriends = friendsAndUser.filter((e: string) => e !== webId);
  
    return filteredFriends;
  } else {
    return null
  }
  
  }

export async function readFromDataSet() {

  // Obtener la sesion actual y su webId
  const { session, webId } = getSessionWebID();
  // Obtener la url del dataset de marcadores
  const datasetUrl = getMarkersUrl(webId)

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
        

    return data;
  })


    // Crear una nueva lista
    // eslint-disable-next-line @typescript-eslint/no-array-constructor
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

// Get my markers
export async function getMyMarkers() {
  const {session, webId} = getSessionWebID()

  const markersDatasetUrl = getMarkersUrl(webId);

  try {

    const myDataset = await solid.getSolidDataset(markersDatasetUrl, { fetch: session.fetch });
    
    const markersDirectory = solid.getThingAll(myDataset);
    if (markersDirectory != null) {
      // eslint-disable-next-line @typescript-eslint/no-array-constructor
      let markers = new Array()

      markersDirectory.forEach((marker) => {
        markers.push(marker.url)
      })

      markers.shift()

      return markers
    } else {
      throw new Error("No markers found")
    }
  } catch (error) {
    console.log(error)
  }
}