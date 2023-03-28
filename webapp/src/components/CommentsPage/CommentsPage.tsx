import React, { useState } from "react";
import { saveMarker } from "../Map/OSMap";
import "./CommentsPage.css";


export default function CommentsPage() {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [markerType, setMarkerType] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    //Hay que pasar lat y lng desde OSMap hasta aqui
    const lat=0;
    const lng=0;
    const newMarker = { lat, lng, title, comment, markerType };
    saveMarker(newMarker);
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
