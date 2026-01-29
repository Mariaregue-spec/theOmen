import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../index.css';

const BASE_URL = 'http://localhost:3000/peliculas';

const initialFormData = {
  titulo: '',
  anio: '',
  rating: '',
  poster: '',
  sinopsis: ''
};

const FormPeliculas = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [formData, setFormData] = useState(initialFormData);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchPeliculas = async () => {
      try {
        const respuesta = await axios.get(BASE_URL);
        setPeliculas(respuesta.data);
      } catch (error) {
        console.error('Error al cargar las películas:', error);
      }
    };

    fetchPeliculas();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.titulo || formData.anio === '' || formData.rating === '') {
      alert('Por favor, completa los campos obligatorios');
      return;
    }

    const parsedAnio = Number(formData.anio);
    const parsedRating = Number(formData.rating);

    if (Number.isNaN(parsedAnio) || Number.isNaN(parsedRating)) {
      alert('Año y rating deben ser números válidos');
      return;
    }

    const payload = {
      titulo: formData.titulo.trim(),
      anio: parsedAnio,
      rating: parsedRating,
      poster: formData.poster.trim() || '/posters/placeholder.jpg',
      sinopsis: formData.sinopsis.trim() || 'Sin sinopsis disponible.'
    };

    try {
      if (editId) {
        const respuesta = await axios.put(`${BASE_URL}/${editId}`, payload);
        setPeliculas(peliculas.map(p => (p.id === editId ? respuesta.data : p)));
        setEditId(null);
      } else {
        const respuesta = await axios.post(BASE_URL, payload);
        setPeliculas([...peliculas, respuesta.data]);
      }
      setFormData(initialFormData);
    } catch (error) {
      console.error('Error al guardar la película:', error);
    }
  };

  const handleEdit = (pelicula) => {
    setFormData({
      titulo: pelicula.titulo ?? '',
      anio: pelicula.anio ?? '',
      rating: pelicula.rating ?? '',
      poster: pelicula.poster ?? '',
      sinopsis: pelicula.sinopsis ?? ''
    });
    setEditId(pelicula.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      setPeliculas(peliculas.filter(p => p.id !== id));
      if (editId === id) {
        setFormData(initialFormData);
        setEditId(null);
      }
    } catch (error) {
      console.error('Error al borrar la película:', error);
    }
  };

  const handleCancel = () => {
    setFormData(initialFormData);
    setEditId(null);
  };

  return (
    <div className="w-full min-h-screen bg-black/80 backdrop-blur-md" style={{ backgroundImage: "url('/src/assets/home/hero-desktop.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      
      <div className="relative z-10 pt-20 pb-20 px-4 sm:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center font-omen-title text-white mb-12 uppercase tracking-widest drop-shadow-lg">
          {editId ? 'Editar' : 'Películas'}
        </h1>

        <div className="max-w-2xl mx-auto">
          <form className="bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-8 mb-8 shadow-2xl font-omen-body" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  name="titulo"
                  value={formData.titulo}
                  onChange={handleChange}
                  placeholder="Título"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:border-red-700 transition"
                />
              </div>

              <div>
                <input
                  type="number"
                  name="anio"
                  value={formData.anio}
                  onChange={handleChange}
                  placeholder="Año"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:border-red-700 transition"
                  min="1900"
                  max={new Date().getFullYear()}
                />
              </div>

              <div>
                <input
                  type="number"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  placeholder="Rating (0-10)"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:border-red-700 transition"
                  min="0"
                  max="10"
                  step="0.1"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="poster"
                  value={formData.poster}
                  onChange={handleChange}
                  placeholder="URL del poster"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:border-red-700 transition"
                />
              </div>

              <div>
                <textarea
                  name="sinopsis"
                  value={formData.sinopsis}
                  onChange={handleChange}
                  placeholder="Sinopsis"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:border-red-700 transition"
                  rows="4"
                />
              </div>
            </div>

            <div className="flex gap-4 mt-6 justify-center">
              <button 
                type="submit" 
                className="px-8 py-2 bg-red-700 hover:bg-red-800 text-white font-bold uppercase tracking-wider rounded transition duration-300"
              >
                {editId ? 'Actualizar' : 'Guardar Película'}
              </button>
              {editId && (
                <button 
                  type="button" 
                  onClick={handleCancel} 
                  className="px-8 py-2 bg-gray-700 hover:bg-gray-800 text-white font-bold uppercase tracking-wider rounded transition duration-300"
                >
                  Cancelar
                </button>
              )}
            </div>
          </form>

          <div className="space-y-4">
            {peliculas.length === 0 ? (
              <p className="text-center text-gray-300 text-lg py-10">No hay películas registradas</p>
            ) : (
              peliculas.map(pelicula => (
                <div key={pelicula.id} className="bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-6 shadow-lg hover:border-red-700/50 transition">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-red-700 mb-2 uppercase">{pelicula.titulo}</h3>
                      <p className="text-gray-300"><span className="text-gray-400">Año:</span> {pelicula.anio}</p>
                      <p className="text-gray-300"><span className="text-gray-400">Rating:</span> {typeof pelicula.rating === 'number' ? pelicula.rating.toFixed(1) : pelicula.rating}</p>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleEdit(pelicula)} 
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm uppercase rounded transition duration-300"
                      >
                        Editar
                      </button>
                      <button 
                        onClick={() => handleDelete(pelicula.id)} 
                        className="px-4 py-2 bg-red-700 hover:bg-red-800 text-white font-bold text-sm uppercase rounded transition duration-300"
                      >
                        Borrar
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPeliculas;
