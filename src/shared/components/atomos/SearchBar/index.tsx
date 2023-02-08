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
    <InputGroup>
      <FormControl
        type="text"
        placeholder="Buscar produtos, marcas e muito mais..."
        aria-label="Recipient's username with two button addons"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <Button
        variant="outline-secondary"
        onClick={() => handleSearch(search, setInfo)}
      >
        <FaSearch />
      </Button>
    </InputGroup>
  );
};

 
 
 