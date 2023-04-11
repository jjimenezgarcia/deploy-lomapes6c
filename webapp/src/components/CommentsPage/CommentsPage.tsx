import React, { useState } from "react";
import "./CommentsPage.css";
import { addMarker } from "../../api/api";
import { Marker } from "../Map/OSMap";

async function saveMarker(markerData: any) {
  await addMarker(markerData);
}

export default function CommentsPage() {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [markerType, setMarkerType] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      markerTitle: { value: string };
      markerType: { value: string };
      comment: { value: string };
    }

    console.log(target.comment.value);
  };

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
                onChange={event => setTitle(event.target.value)}
                placeholder="Titulo de ejemplo"
              />
            </div>
            <div className="form_field">
              <label htmlFor="marker-options">Tipo de marcador</label>
              <select name="marker-options" id="marker-options" onChange={event => setMarkerType(event.target.value)}>
                  <option value="restaurant">Bar o restaurante</option>
                  <option value="monument">Monumento</option>
                  <option value="landscape">Paisaje / Mirador</option>
              </select>
            </div>
            <div className="form_field">
              <textarea id="comment" onChange={event => setComment(event.target.value)} placeholder="Escribe tu comentario aquí"></textarea>
            </div>
            
            <div className="form_field">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
        
  );
}
