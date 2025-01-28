import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMovie = ({ addMovie }) => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newMovie = {
      id: Date.now(), 
      title,
      director,
      genre,
      releaseYear: parseInt(releaseYear, 10),
      synopsis,
      posterUrl,
    };

    addMovie(newMovie); 
    navigate("/"); 
  };

  return (
    <div>
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Director" value={director} onChange={(e) => setDirector(e.target.value)} required />
        <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} required />
        <input type="number" placeholder="Release Year" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} required />
        <input type="text" placeholder="Poster URL" value={posterUrl} onChange={(e) => setPosterUrl(e.target.value)} required />
        <textarea placeholder="Synopsis" value={synopsis} onChange={(e) => setSynopsis(e.target.value)} required />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
