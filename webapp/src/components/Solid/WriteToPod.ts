import { SCHEMA_INRUPT, RDF } from "@inrupt/vocab-common-rdf";
import { getDefaultSession } from "@inrupt/solid-client-authn-browser";
import {
    createSolidDataset,
    createThing,
    buildThing,
    setThing,
    saveSolidDatasetAt,
  } from "@inrupt/solid-client";

// podUrl must be correct for the moment
async function writeDataToNewDataSet(podUrl: string, thingName: string, thingTitle: string, rdfType: string) {

    const session = getDefaultSession();

    // Crear un dataset vacío
    let courseSolidDataset = createSolidDataset();
  
    // Create a new Thing type Person
    const newThing = buildThing(createThing({ name: thingName }))
      .addStringNoLocale(SCHEMA_INRUPT.name, thingTitle)
      .addUrl(RDF.type, rdfType)
      .build();
  
    courseSolidDataset = setThing(courseSolidDataset, newThing);
  
    const savedSolidDataset = await saveSolidDatasetAt(
        podUrl,
        courseSolidDataset,
        { fetch: session.fetch } // fetch from authenticated Session
    );
  }

export default writeDataToNewDataSet