import films from '../../data/Film.json'
import './Movies.css'
import '../movies/MovieItem'

function Movies() {
  // prettier
    return (
    <div className='container1'>
        {films.data.movies.map(movie => {
        const {title, year, large_cover_image, genres, language, runtime, summary, rating} = movie
         return <MovieItem
           title={title}
           image={large_cover_image}
           year={year}
           genres={genres}
           language={language}
           runtime={runtime}
           summary={summary}
           rating={rating}
          />  })
        }
    </div>
    );
}
export default Movies;