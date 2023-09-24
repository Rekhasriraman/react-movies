import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import MovieList from './components/MovieList';

const App = () => {
    const [searchText, setSearchText] = useState('man');

    const getInputValue = (value) => {
        setSearchText(value);
    };

    return (
        <div>
            <Header title="Movies" />
            <Form getInputValue={getInputValue} />
            <MovieList searchText={searchText} />
        </div>
    );
};

export default App;
