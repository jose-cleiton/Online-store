export interface ISeller {
  id: number;
  permalink: string;
  registration_date: string;


}

export  interface IResults {
  price: number;
  id: string;
  site_id: string;
  title: string;
  seller: ISeller;
  thumbnail: string;

}



