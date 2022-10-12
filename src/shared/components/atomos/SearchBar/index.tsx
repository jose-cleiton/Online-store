import { useContext, useState } from "react";
import { AppContextInterface } from "../../../../interfaces/interfaces";
import AppContext from "../../../contexts/AppContext";




export const  SearchBar  = () => {

  const { input, setInput } = useContext(AppContext) as AppContextInterface;



  const  handleChange  = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

 
 

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar__input"
        placeholder="Search"
        value={input}
        onChange={handleChange}
      />
    </div>
  );

  
  
}