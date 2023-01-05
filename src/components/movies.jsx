import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    //yata onclicked ekata adalawa api click karana item ekata adala data tika me movie kiyana ekata enawa
    console.log(movie);
    const movies = this.state.movies.filter((m) => m._id !== movie._id); //methanin e apu data ekata adala id ekata samana nathi list eke anith id balanawa ethakota cliked karapu eka arenn anith okkoma movies kiyana set ekata watila setState kiyana eken update karala pennawa
    this.setState({ movies }); //methanin ara id ekata adala nathi okkom tika display karanwa e kiyanne ckiked karpu eka arenn anith okkoma display karanwa
    console.log(movies); //console.log eke balaganna puluwan cliked karapu eka arenna anith ewa tika
  };

  render() {
    const { length: count } = this.state.movies;

    if (count === 0) return <p>There are no movies in the database</p>;
    return (
      <React.Fragment>
        <p>Showing {count} movies in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
