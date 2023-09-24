import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';

const Movie = ({ movie }) => {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked((prevLiked) => !prevLiked);
    };

    return (
        <div className={`movie-container ${liked ? 'yes' : 'no'}`}>
            <div className="movie-poster">
                <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="hoverable-image"
                />
            </div>
            <div className="movie-details">
                <h2>
                    {movie.Title}
                    <FaHeart
                        color={liked ? 'red' : 'white'}
                        size={24}
                        onClick={toggleLike}
                        style={{ marginLeft: '5px', cursor: 'pointer' }}
                    />
                </h2>
            </div>
        </div>
    );
};

Movie.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Year: PropTypes.string.isRequired,
        Poster: PropTypes.string.isRequired
    }).isRequired
};

export default Movie;
