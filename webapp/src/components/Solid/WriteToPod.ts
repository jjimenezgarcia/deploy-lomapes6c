import { SCHEMA_INRUPT, RDF } from "@inrupt/vocab-common-rdf";

import {
    createSolidDataset,
    createThing,
    buildThing,
    setThing,
    saveSolidDatasetAt,
    saveFileInContainer,
  } from "@inrupt/solid-client";
import { Marker } from "../../components/Map/OSMap";
import { getSessionWebID } from "./Session";
import { createAclForMarker } from "./Permissions";

// podUrl must be correct for the moment
export async function writeDataToNewDataSet(podUrl: string, thingName: string, thingTitle: string, rdfType: string) {

  const { session } = getSessionWebID();

    let courseSolidDataset = createSolidDataset();
  
    const newThing = buildThing(createThing({ name: thingName }))
      .addStringNoLocale(SCHEMA_INRUPT.name, thingTitle)
      .addUrl(RDF.type, rdfType)
      .build();
  
    courseSolidDataset = setThing(courseSolidDataset, newThing);
  
    await saveSolidDatasetAt(
        podUrl,
        courseSolidDataset,
        { fetch: session.fetch } // fetch from authenticated Session
    );
  }

  export function writeCommentToDataSet(marker : Marker) {
    const { webId } = getSessionWebID();
    const markerUrl = webId.replace(/\/profile\/card#me/, "/public/markers/") + marker.title;
    
    writeMarkerToDataSet(
      markerUrl,
      marker,
      "https://schema.org/location"
    )

    createAclForMarker(markerUrl);
  }

export async function writeMarkerToDataSet(podUrl: string, marker: Marker, rdfType: string) {

  const { session } = getSessionWebID();

  // Crear un dataset vacío
  let courseSolidDataset = createSolidDataset();

  const newThing = buildThing(createThing({ name: marker.title }))
    .addStringNoLocale(SCHEMA_INRUPT.name, marker.title)
    .addStringNoLocale(SCHEMA_INRUPT.latitude, marker.lat.toString())
    .addStringNoLocale(SCHEMA_INRUPT.longitude, marker.lng.toString())
    .addStringNoLocale(SCHEMA_INRUPT.text, marker.comment)
    .addStringNoLocale(SCHEMA_INRUPT.model, marker.type) // TODO: es el tipo de marker, camiarlo a un atributo apropiado
    .addStringNoLocale(SCHEMA_INRUPT.description, JSON.stringify(marker))
    .addStringNoLocale(SCHEMA_INRUPT.value, marker.score.toString())
    .addUrl(RDF.type, rdfType)
    .build();

  courseSolidDataset = setThing(courseSolidDataset, newThing);

  await saveSolidDatasetAt(
      podUrl,
      courseSolidDataset,
      { fetch: session.fetch } // fetch from authenticated Session
  );
} 

export async function createImagesContainer(markerTitle: string) {
  const {session, webId} = getSessionWebID();
  if (!session) {
    throw new Error("User is not logged in");
  }
  try {
    const podUrl = webId.replace(/\/profile\/card#me/, "/public/markers/") + markerTitle + "/images";
    const imagesContainerUrl = createSolidDataset();
    await saveSolidDatasetAt(
      podUrl,
      imagesContainerUrl,
      { fetch: session.fetch } // fetch from authenticated Session
  );
  } catch(error) {
    console.log(error)
  }
}

export async function writeImageToDataSet(imageFile : File, markerTitle: string) {
  const { session, webId } = getSessionWebID();
  const markerUrl = webId.replace(/\/profile\/card#me/, "/public/markers/") + markerTitle + "/images";
  if (!session) {
    throw new Error("User is not logged in");
  }
  try {
    await saveFileInContainer(markerUrl, imageFile, { slug: imageFile.name, contentType: imageFile.type, fetch: session.fetch })
  } catch(error) {
    console.log(error)
    // await createImagesContainer()
    // await writeImageToDataSet(imageFile);
  } 
}
