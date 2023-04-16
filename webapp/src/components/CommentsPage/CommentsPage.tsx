import React, { useState } from "react";
import "./CommentsPage.css";
import { addMarker } from "../../api/api";
import { Marker } from "../Map/OSMap";
import { getDefaultSession } from "@inrupt/solid-client-authn-browser";
import { writeMarkerToDataSet } from "../Solid/WriteToPod";
import { Rating } from 'react-simple-star-rating'
import { Link } from "react-router-dom";

// TODO: ver si se puede eliminar esta funcion
async function saveMarker(markerData: any) {
  await addMarker(markerData);
}

export default function CommentsPage(props: any) {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [markerType, setMarkerType] = useState("restaurant");

  const writeMarkerToPod = async (
    title: string,
    comment: string,
    markerType: string,
    rating: number
  ) => {
    const markerData: Marker = {
      lat: props.lat[0],
      lng: props.lat[1],
      comment: comment,
      title: title.replace(" ", "_"),
      type: markerType,
      score: rating,
    };

    const session = getDefaultSession();
    const { webId } = session.info;

    if (!webId) {
      return null;
    }

    const podUrl =
      webId.replace("profile/card#me", "") +
      "public/markers/" +
      markerData.title;

    await writeMarkerToDataSet(
      podUrl,
      markerData,
      "https://schema.org/location"
    );
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      markerTitle: { value: string };
      comment: { value: string };
      rating: { value: number };
    };

    writeMarkerToPod(
      target.markerTitle.value,
      target.comment.value,
      markerType,
      rating
    );

    // quitar componente comentarios
    props.onChange();
  };

  const [rating, setRating] = useState(0)

  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = (value: number, index: number) => console.log(value, index)

   // Catch Rating value
   const handleRating = (rate: number) => {
    setRating(rate)
  }

  const [markerForm, setMarkerForm] = useState(true);

  const cancelMarker = () => {
    props.onChange();
  };

  if(!markerForm) return null;

  return (
    <div className="popupContainer">
      <div className="main_form">
        <div className="commentform" id="formulario">
          <form className="form" onSubmit={handleSubmit}>
            <h1>Crear marcador</h1>
            <div className="form_field">
              <label htmlFor="markerTitle">Titulo del marcador:</label>
              <input
                id="markerTitle"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Titulo de ejemplo"
              />
            </div>
            <div className="form_field">
              <label htmlFor="marker-options">Tipo de marcador</label>
              <select
                name="marker-options"
                id="marker-options"
                value={markerType}
                onChange={(event) => {
                  setMarkerType(event.target.value);
                }}
              >
                <option value="restaurant">Bar o restaurante</option>
                <option value="monument">Monumento</option>
                <option value="landscape">Paisaje / Mirador</option>
              </select>
            </div>
            <div className="form_field">
              <textarea
                id="comment"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                placeholder="Escribe tu comentario aquí"
              ></textarea>
            </div>

            <div>
              <label htmlFor="score">Puntuación:</label>
              <Rating
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
              />
            </div>

            <div className="form_field">
            <button type="submit">Enviar</button>
            </div>
          </form>
          <div className="cancel_button">
            <button
              type="button"
              onClick={cancelMarker}
              style={{ width: "25%" }}
            >
              Cancelar marcador
            </button>
          </div>
        </div>
      </div>
    </div>
    
  );
}
