import { useEffect, useState } from "react";

import { getSessionWebID } from "../../../Solid/Session";
import { Marker } from "../../OSMap";
import { Rating } from "react-simple-star-rating";
import "./MarkerInfo.css";
import {
  readFromDataSetUrl,
} from "../../../Solid/ReadFromPod";
import ReactLoading from "react-loading";
import {
  writeImageToDataSet,
} from "../../../Solid/WriteToPod";

export default function MarkerInfo(props: any) {
  const [imageFile, setImageFile] = useState<File>();
  const [image, setImage] = useState("");
  const [marker, setMarker] = useState<Marker>();
  const [isLoading, setIsLoading] = useState(false);
  const [markerTitle, setMarkerTitle] = useState("");

  const readMarkerFromPod = async (target: any) => {
    const webId = getSessionWebID().webId;

    const markerUrl =
      webId.replace(/\/profile\/card#me/, "/public/markers/") + target;

    setIsLoading(true);
    const markers = await readFromDataSetUrl(markerUrl);
    setIsLoading(false);

    const onlyMarker = markers[0];

    const markerData: Marker = {
      lat: onlyMarker.lat,
      lng: onlyMarker.lng,
      comment: onlyMarker.comment,
      title: onlyMarker.title,
      type: onlyMarker.type,
      score: onlyMarker.score,
      image: onlyMarker.image,
    };
    setMarkerTitle(onlyMarker.title);
    console.log(onlyMarker);
    return markerData;
  };

  useEffect(() => {
    readMarkerFromPod(props.marker.options.title).then((marker) => {
      setMarker(marker);
    });
  }, [props.marker.options.title]);

  useEffect(() => {
    setImage(getSessionWebID().webId.replace(/\/profile\/card#me/, "/public/images/") + markerTitle + ".png")
  }, [markerTitle]);

  const handleImageChange = (event: any) => {
    var file = new File([event.target.files[0]], marker?.title!, {
      type: event.target.files[0].type,
    });
    setImage(URL.createObjectURL(event.target.files[0]));
    setImageFile(file);
    console.log(imageFile);
    console.log(event.target.files[0]);
  };

  const cancel = () => {
    props.onChange();
  };

  return (
    <div className="popupContainer">
      {isLoading ? (
        <div className="loading">
          <ReactLoading type="spin" color="#000" height={50} width={50} />
        </div>
      ) : (
        <>
          <div>
            <button className="cancel_button" onClick={cancel}>
              <img
                className="cancel-button-img"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffreesvg.org%2Fimg%2Fmatt-icons_cancel.png&f=1&nofb=1&ipt=a1d797bc36ec42f99a52e4084bffc7c616bf0eee54d60f835aa29f7ba578a938&ipo=images"
                alt=""
              />
            </button>
          </div>
          <div className="main_form">
            <div className="commentform" id="formulario">
              <form className="form">
                <h1 style={{ color: "black" }}>
                  {marker?.title}{" "}
                  <img
                    className="icon-place"
                    src={props.marker.options.icon.options.iconUrl}
                    alt=""
                  />{" "}
                </h1>
                <div>
                  <h3>{marker?.comment}</h3>
                  <label htmlFor="score"></label>
                  <Rating initialValue={marker?.score} readonly size={16} />
                </div>

                <div className="form_field">
                  {image !== undefined && <img src={image} alt="" />}
                  <input
                    type="file"
                    name="image"
                    accept="image/png"
                    onChange={handleImageChange}
                  />
                </div>

                <div className="form_field">
                  <button
                    className="submit_button"
                    onClick={(e) => {
                      e.preventDefault();
                      if (imageFile !== undefined) {
                        writeImageToDataSet(imageFile, markerTitle).catch(
                          () => {
                            console.log("Error writing image to dataset");
                          }
                        );
                      }
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
