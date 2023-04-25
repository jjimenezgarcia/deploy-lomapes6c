import * as solid from '@inrupt/solid-client'
import { getDefaultSession } from "@inrupt/solid-client-authn-browser";

// Crear una acl
export const createAcl = async (fileUrl: string) => {

  // Obtener la sesion actual y su webId
  const session = getDefaultSession();
  const { webId } = session.info;

  // Comprobar que la sesion es válida
  if (!webId) {
    return null;
  }

  try {
    let file: any = await solid.getFile(fileUrl, { fetch: session.fetch })

    let acl = solid.createAcl(file)

    const updatedAcl = solid.setAgentResourceAccess(acl, webId, { read: true, append: true, write: true, control: true })

    await solid.saveAclFor(file, updatedAcl, { fetch: session.fetch })
  } catch (error) {
    console.log(error)
  }

}


