import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Plagination from "./common/paginatioin";
import { paginate } from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: getMovies(),
    currentPage: 1,
    pageSize: 4,
  };

  handleDelete = (movie) => {
    //yata onclicked ekata adalawa api click karana item ekata adala data tika me movie kiyana ekata enawa
    console.log(movie);
    const movies = this.state.movies.filter((m) => m._id !== movie._id); //methanin e apu data ekata adala id ekata samana nathi list eke anith id's balanawa ethakota cliked karapu eka arenn anith okkoma movies kiyana set ekata watila setState kiyana eken update karala pennawa //m.id kiyanne movies object eke values ekata watenne ekin eka// ita psse m.id ekai clicked karapu eka thiyenne movie.id eke ekath ekk balanwa
    this.setState({ movies }); //methanin ara id ekata adala nathi okkom tika display karanwa e kiyanne ckiked karpu eka arenn anith okkoma display karanwa
    console.log(movies); //console.log eke balaganna puluwan cliked karapu eka arenna anith ewa tika
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    console.log(index);
    movies[index] = { ...movies[index] };
    console.log("mm", movies[index].liked);
    movies[index].liked = !movies[index].liked;
    console.log("mm", movies[index].liked);
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    //eha patte pagination ekedi onclike eka click weddi ekata adala onPagechange ekata enwa page eke value ekath aragenama(page) //ethakota eka value eka aragena movies eke onPageChange ekata adala function eka e kiyanne methana (handlePageChange) setState kara gannwa page eke dan thiyana value eka current page eke value ekata evita movies eke button eka cliked karan warayak warayak gane eken page eke value eka genalla current page eke value eka update karai eka karanne methanin
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies } = this.state;

    if (count === 0) return <p>There are no movies in the database</p>;
    const movies = paginate(allMovies, currentPage, pageSize);
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onLike={() => this.handleLike(movie)}
                  />
                </td>
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
        <Plagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
