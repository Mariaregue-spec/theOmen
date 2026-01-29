const FormInputs = ({ formData, handleChange }) => {
  return (
    <>
      <div className="form-grupo">
        <label htmlFor="titulo" className="form-label">
          Título *
        </label>
        <input
          type="text"
          id="titulo"
          name="titulo"
          value={formData.titulo}
          onChange={handleChange}
          placeholder="Ej: El silencio de los corderos"
          className="form-input"
        />
      </div>

      <div className="form-grupo">
        <label htmlFor="anio" className="form-label">
          Año *
        </label>
        <input
          type="number"
          id="anio"
          name="anio"
          value={formData.anio}
          onChange={handleChange}
          placeholder="Ej: 1991"
          className="form-input"
          min="1900"
          max={new Date().getFullYear()}
        />
      </div>

      <div className="form-grupo">
        <label htmlFor="rating" className="form-label">
          Rating *
        </label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          placeholder="Ej: 8.6"
          className="form-input"
          min="0"
          max="10"
          step="0.1"
        />
      </div>

      <div className="form-grupo">
        <label htmlFor="poster" className="form-label">
          URL del Poster
        </label>
        <input
          type="text"
          id="poster"
          name="poster"
          value={formData.poster}
          onChange={handleChange}
          placeholder="Ej: /posters/1.jpg"
          className="form-input"
        />
      </div>

      <div className="form-grupo">
        <label htmlFor="sinopsis" className="form-label">
          Sinopsis
        </label>
        <textarea
          id="sinopsis"
          name="sinopsis"
          value={formData.sinopsis}
          onChange={handleChange}
          placeholder="Escribe una breve sinopsis..."
          className="form-input form-textarea"
          rows="5"
        />
      </div>
    </>
  );
};

export default FormInputs;
