

import { URL } from './url';


export const handleSearch = async (search: string, setInfo: Function) => {  
  const response = await fetch(`${URL}${search}`);
  const data = await response.json();
  setInfo(data.results);
  localStorage.setItem('search', search);
}
