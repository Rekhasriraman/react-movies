import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ title }) => {
    return (
        <header className="header-container">
            <h1 className="header-title">{title}</h1>
        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;
