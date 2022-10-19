const obj = {


    
  id:'',
  title: '',
  price: {
      currency: '',
      amount: 0,
      decimals: 0,

  },
  picture: '',
  condition: '',
  free_shipping: false,
  state_name: ''

}



export const initialState = {
 
  info: [obj],    

  setInfo: () => {},
};


export   const research = () => {
  
      
      if(localStorage.getItem('search') !== null) {
         return localStorage.getItem('search') || '';
       } else {
          return 'celular';
       }
  }