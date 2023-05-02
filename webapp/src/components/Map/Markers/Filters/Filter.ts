export async function filterByType(markers: Promise<any[] | null>, filter: string): Promise<any[] | null>{
    var filteredPromise = markers.then((markerArray: any) => {
        return (Promise.all(markerArray.filter(function(marker: any){return marker.type === filter})))
      });
    return filteredPromise;
}