import React from 'react';
import './search-bar.scss';

const SearchBar: React.FC = () => {
  return (
    <form>
      <input type="text" placeholder="Искать здесь..." />
      <button className="search-btn" type="submit" />
    </form>
  );
};

export default SearchBar;
