
import { useContext, useState } from "react";
import { UseContext } from "../../../contexts/AppContext";
import { FaSearch } from 'react-icons/fa';
import * as S from './styles';
import { handleSearch } from "../../../../services/handleSearch";


import { InputGroup, FormControl, Button } from "react-bootstrap";

export const SearchBar = () => {
  const { setInfo } = useContext(UseContext);
  const [search, setSearch] = useState('');

  return (
    
    <InputGroup style={{
      marginLeft: "20px",     
         
    }}>
      <FormControl
        type="text"
        placeholder="Buscar produtos, marcas e muito mais..."
        aria-label="Recipient's username with two button addons"
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{
         
          fontSize: "16px",
          fontFamily: "inherit",
          
        }}
      />

      <Button       
        onClick={() => handleSearch(search, setInfo)}
        style={{
          backgroundColor: "#ffffff",
          color: "#000000",
        }}
      >
        <FaSearch />
      </Button>
      </InputGroup>
      
    
  );
};

 
 
 
 
 
 