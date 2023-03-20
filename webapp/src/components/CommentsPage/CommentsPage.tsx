import React, { useState } from "react";
import { saveMarker } from "../Map/OSMap";

function CommentsPage() {
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
    <div className="main_form">
      <div className="commentform">
        <h1>Crear marcador</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form_field">
            <input
              type="text"
              value={title}
              onChange={event => setTitle(event.target.value)}
              placeholder="Titulo del marcador"
            />
          </div>
          <div className="form_field">
            <label htmlFor="marker-options">Tipo de marcador:</label>
            <select name="marker-options" id="marker-options" onChange={event => setMarkerType(event.target.value)}>
                <option value="restaurant">Bar o restaurante</option>
                <option value="monument">Monumento</option>
                <option value="landscape">Paisaje / Mirador</option>
            </select>
          </div>
          <div className="form_field">
            <textarea id="comment" onChange={event => setComment(event.target.value)}>

            </textarea>
          </div>
          
          <div className="form_field">
            <button type="submit">Enviar</button>
          </div>
        </form>
        
      </div>
    </div>
  );
}

export default CommentsPage;
