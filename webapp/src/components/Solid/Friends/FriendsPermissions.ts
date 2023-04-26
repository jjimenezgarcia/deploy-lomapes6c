import * as solid from '@inrupt/solid-client'
import { getSessionWebID } from '../Session';

// Crear una acl
export const createAclForMarkers = async () => {

  const {session, webId} = getSessionWebID()

  // Obtener la url del dataset de marcadores
  const datasetUrl = webId.replace("profile/card#me", "") + "public/markers/"

  try {
    let file: any = await solid.getFile(datasetUrl, { fetch: session.fetch })

    let acl = solid.createAcl(file)

    const updatedAcl = solid.setAgentResourceAccess(acl, webId, { read: true, append: true, write: true, control: true })

    await solid.saveAclFor(file, updatedAcl, { fetch: session.fetch })

  } catch (error) {
    console.log(error)
  }

}

// Crear un acl con permisos de owner para cada uno de los marcadores del dataset
export const createAclForMarker = async (markerUrl: string) => {
  const {session, webId} = getSessionWebID()

  try {
    let file: any = await solid.getFile(markerUrl, { fetch: session.fetch })

    let acl = solid.createAcl(file)

    const updatedAcl = solid.setAgentResourceAccess(acl, webId, { read: true, append: true, write: true, control: true })

    await solid.saveAclFor(file, updatedAcl, { fetch: session.fetch })

  } catch (error) {
    console.log(error)
  }
}

// Eliminar el acl del dataset de markers
export const deleteAclForDataset = async (datasetUrl : string) => {
  
    const {session} = getSessionWebID()
  
    try {
      await solid.deleteFile(
        datasetUrl + "/.acl",  // File to delete
        { fetch: session.fetch }
      );
      console.log("Eliminado el file: " + datasetUrl)
    } catch (error) {
      console.log(error)
    }
  

}

// Darle permisos de escritura y lectura a un amigo
export const addFriendPermissions = async (friendWebId: string) => {
  
  const {session, webId} = getSessionWebID()
  
    // Obtener la url del dataset de marcadores
    const datasetUrl = webId.replace("profile/card#me", "") + "public/markers/"
  
    try {
      let file: any = await solid.getFile(datasetUrl, { fetch: session.fetch })
  
      let acl = solid.createAcl(file)
  
      const updatedAcl = solid.setAgentResourceAccess(acl, friendWebId, { read: true, append: false, write: true, control: false })
  
      await solid.saveAclFor(file, updatedAcl, { fetch: session.fetch })

    } catch (error) {
      console.log(error)
    }
  
  }

// Quitar los permisos de lectura y escritura a un amigo
export const removeFriendPermissions = async (friendWebId: string) => {
    
  const {session, webId} = getSessionWebID()
    
      // Obtener la url del dataset de marcadores
      const datasetUrl = webId.replace("profile/card#me", "") + "public/markers/"
    
      try {
        let file: any = await solid.getFile(datasetUrl, { fetch: session.fetch })
    
        let acl = solid.createAcl(file)
    
        const updatedAcl = solid.setAgentResourceAccess(acl, friendWebId, { read: false, append: false, write: false, control: false })
    
        await solid.saveAclFor(file, updatedAcl, { fetch: session.fetch })

      } catch (error) {
        console.log(error)
      }
    
}