import { useState } from "react";


export const  SearchBar  = () => {

  const  [search, setSearch]  = useState<string>('');

  const  handleChange  = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

 

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar__input"
        placeholder="Search"
        value={search}
        onChange={handleChange}
      />
    </div>
  );

  
  
}