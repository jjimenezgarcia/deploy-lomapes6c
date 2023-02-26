
export async function addMarker(marker:{ lat:any, lng:any }):Promise<boolean>{
    console.log('saving on database')
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/markers/add', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({'lat':marker.lat, 'lng':marker.lng})
      });
    if (response.status===200)
      return true;
    else
      return false;
}