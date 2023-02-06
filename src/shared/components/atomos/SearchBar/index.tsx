import { useContext, useState } from "react";
import { UseContext } from "../../../contexts/AppContext";
import { FaSearch } from 'react-icons/fa';
import * as S from './styles';
import { handleSearch } from "../../../../services/handleSearch";


 export const SearchBar = () => {
   const { setInfo } = useContext(UseContext);
   const [search, setSearch] = useState('');
 
   return (
     <S.Search>
       <input 
         type="text"
         value={search}
         onChange={e => setSearch(e.target.value)}
       />
 
       <button
         type="button"
         onClick={() => handleSearch(search, setInfo)}        
       ><FaSearch />
       </button>
     </S.Search>
   );
 }
 
 
 
 