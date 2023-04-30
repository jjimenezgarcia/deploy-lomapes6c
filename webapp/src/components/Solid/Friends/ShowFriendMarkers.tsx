import "../../Map/Markers/Filters/FilterButton.css"

function GetFriendMarkers(props: any){

    return(
        <button className="filter-button"
        onClick={() => {
            props.changeFriendFilter();
        }}
        >
        <img className = "filter-button-image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.6X-2CYe7KZsGvf5Jv_sKJwHaHa%26pid%3DApi&f=1&ipt=a69740707746ebf75d6caf51588fe7bd2bb713b9c9a51b3f16cceb4dbcdcf81d&ipo=images" alt="" />
        </button>
    );
};

export default GetFriendMarkers;