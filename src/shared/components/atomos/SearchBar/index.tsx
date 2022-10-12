import { useState } from "react";
import { Input } from "../../../../interfaces/interfaces";




export const  SearchBar  = () => 
{

  // const [input, setInput] = useState<Input>({} as Input);
  const [input, setInput] = useState<Input>("" as unknown as Input);
  
  
  
  const  handleChange  = (e: React.ChangeEvent<HTMLInputElement>) => 
  {
    
    const { value } = e.target;
    if(!value) return;
    
    
    const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${value}`;
    fetch(URL)
    .then((response) => response.json()).then((data) => setInput(data))

     

  };
  console.log(input);
  
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar__input"
        placeholder="Search"
        onChange={handleChange}
      />
     
    </div>
  );

  
  
}