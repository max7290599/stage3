import React from 'react';
import CardsField from './components/cards-field/cards-field';
import SearchBar from './components/search-bar/search-bar';
import './styles.scss';

const App: React.FC = () => {
  return (
    <>
      <SearchBar />
      <CardsField />
    </>
  );
};

export default App;
