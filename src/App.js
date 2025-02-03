import React, { useEffect, useState } from "react";
const baseurl = "https://graph.imdbapi.dev/v1"
const App = () => {
  const [Movies, setMovies] = useState([]);
  const [page, setpage] = useState(1);
  const fetchmovies = async (title) => {
    const response = await fetch(`${baseurl}&s=movie&page${title}`)
    const data = await response.json();
    console.log(data.Search);
    if (data.Search) {
      setMovies((previousmovie) => [...previousmovie, ...data.Search]);

    }
  }
  const loadmoremovies = () => {
    setpage((previouspage) => previouspage + 1);
  }
  useEffect(() => {
    fetchmovies();
  }, [page])

  return (
    <>
      <div className="container">
        <div className="row">
          {Movies.map((Movie) => (
            <div className="col">
              <div className="card">
                <img src={Movie.Poster} alt={Movie.Title} />
                <div className="card-body">
                  <h1>{Movie.Title}</h1>
                  <p1>year:{Movie.Year}</p1>

                </div>
              </div>

            </div>

          ))}

        </div>
        <button className="btn btn-primary" onClick={"Load"}>loadmore</button>
      </div>
    </>
  )

}
export default App;