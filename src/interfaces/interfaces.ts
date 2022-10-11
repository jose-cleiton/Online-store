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
  price:number;
  title: string | undefined;
  thumbnail: string | undefined;
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
export type Iresults = {
  id: string;
  site_id: string;
  title: string;
  seller: {
      id: number;
      permalink: string;
      registration_date: string;
      car_dealer: boolean;
      real_estate_agency: boolean;
      tags: string[],
      eshop: {
          seller: number;
          eshop_rubro: null;
          eshop_id: number;
          nick_name: string;
          site_id: string;
          eshop_logo_url: string; 
          eshop_status_id: number;
          eshop_experience: number;
          eshop_locations: string[];   
      },
      seller_reputation: {
        power_seller_status: string;
        level_id: string;
        metrics: {
          cancellations: {
              period: string;
              rate: number;
              value: number;
          },
          claims: {
              period: string;
              rate: number;
              value: number;
          },
          delayed_handling_time: {
              period: string;
              rate: number;
              value: number;
          },
          sales: {
            period: string;
            completed: number;
          } 
        },
        transactions: {
          canceled: number;
          completed: number;
          period: string;
          ratings: {
              negative: number;
              neutral: number;
              positive: number;
          };
        }
      }  

  },
  price: number;
  prices: {
      id: string;
      prices: [
          {
              id: string;
              type: string;
              amount: number;
              regular_amount: null;
              currency_id: string;
              last_updated: string;
              conditions: {
                  context_restrictions: string[];
                  start_time: null;
                  end_time: null;
                  eligible: boolean;
              },
              exchange_rate_context: string;
              metadata: { }


          }
      ];
  },
  sale_price: null,
  currency_id: string;
  available_quantity: number;
  sold_quantity: number;
  buying_mode: string;
  listing_type_id: string;
  stop_time: string;
  condition: string;
  permalink: string;
  thumbnail: string;
  thumbnail_id: string;
  accepts_mercadopago: boolean;
  installments: {
      quantity: number;
      amount: number;
      rate: number;
      currency_id: string;

  },
  address: {
      state_id: string;
      state_name: string;
      city_id: string;
      city_name: string;

  },
  promotions: [],
  shipping: {
      free_shipping: boolean;
      mode: string;
      tags: string[];
      logistic_type: string;
      store_pick_up: boolean;

  },
  seller_address: {
      id: string;
      comment: string;
      address_line: string;
      zip_code: string;
      country: {
          id: string;
          name: string;
      };
      state: {
          id: string;
          name: string;            
      };
      city: {
          id: string;
          name: string;
      },
      latitude: string;
      longitude: string;

  },
  attributes: [
      {
          id: string;
          name: string;
          value_id: string;
          value_name: string;
          value_struct: null;
          values: [
              {
                  id: string;
                  name: string;
                  struct: null;
                  source: number;

              }
          ];


      },
  ],
  differential_pricing: {
      id: number;
  },
  original_price: null,
  category_id: string;
  official_store_id: null,
  domain_id: string;
  catalog_product_id: null,
  tags: string[],
  order_backend: number;
  use_thumbnail_id: boolean;
  offer_score: null;
  offer_share: null,
  match_score: null,
  winner_item_id: null,
  melicoin: null,
  discounts: null,
  inventory_id: null

 

}


export type IQueriedRepositories  = {
site_id: string;
country_default_time_zone: string;
query: string;
paging: {
  total: number;
  offset: number;
  primary_results: number;
  limit: number;
},
results: Iresults[],
sort: {
  id: string;
  name: string;
},
available_sorts: [
  {
      id: string;
      name: string;
  },
],
filters: [],
available_filters: [
  {
      id: string;
      name: string;
      type: string;
      values: [
          {
              id: string;
              name: string;
              results: number;

          }
      ]

  }
]



}

export interface  ICategory {
    id: string;
    name: string;
}

