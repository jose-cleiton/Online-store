



export const  SearchBar  = ({value , onChange}) => 
{
    

    const handleInputChange = (event) => {
      onChange(event.target.value);
    }

    return (
       
       
       <input 
       type="search" 
       value={value} 
       onChange={handleInputChange} />
       
      
        
    )
   
   
}