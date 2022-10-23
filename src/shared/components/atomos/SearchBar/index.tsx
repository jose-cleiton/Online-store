import { useContext, useState } from "react";
import { UseContext } from "../../../contexts/AppContext";
import { URL } from '../../../../services/url';


export const  SearchBar  = () => 
{ 
const{ setInfo} = useContext(UseContext); 
const [search, setSearch] = useState('');
const handleInputChange = (search) => {  
fetch(`${URL}${search}`)
 .then((response) => response
 .json())
 .then((data) => {
    setInfo(data.results)
    
 })  
  localStorage.setItem('search', search);
}

    return (
       <>
       <input 
       type="text"
       value={search}
       onChange={e => setSearch(e.target.value)}
       />

       <button
       type="button"
        onClick={e => handleInputChange(search)}
        
       > butao     
       </button>
 
       </>
     
        
    )
   
   
}