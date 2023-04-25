export interface PokemonsListResponse {
    count: number;
    next: string;
    previous: string;
    results: PokemonSmall[];
  }
  
  export interface PokemonSmall {
    name: string;
    url: string;
    img:string;
    id:number;
  }