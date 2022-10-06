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
export  type IRepository ={
  id: string;
  name:string;
    site_id: string;
    country_default_time_zone: string;
    query:string;
    paging: 
    {
        total: number;
        primary_results: number;
        offset: number;
        limit: number;
    };
    results: Array<IResults>

}
 export interface FrontendProps 
{
    children: React.ReactNode;
}



