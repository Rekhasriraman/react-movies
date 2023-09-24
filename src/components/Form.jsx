import { useState } from 'react';
import PropTypes from 'prop-types';
import './Form.css';

const Form = ({ getInputValue }) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);

    const inputChangeHandler = (e) => {
        const inputValue = e.target.value.trim();
        setValue(inputValue);
        setError(inputValue === '');
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (value === '') {
            setError(true);
            return;
        }
        getInputValue(value.toLowerCase());
    };

    return (
        <div className="form-container">
            <form onSubmit={submitHandler}>
                <div className="input-container">
                    <input
                        className="input-field"
                        type="search"
                        placeholder="Search"
                        value={value}
                        onChange={inputChangeHandler}
                    />
                    <span className="search-icon">🔍</span>
                </div>
            </form>
            {error && (
                <p className="error-message">Please enter the movie name</p>
            )}
        </div>
    );
};

Form.propTypes = {
    getInputValue: PropTypes.func.isRequired
};

export default Form;
