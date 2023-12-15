export interface IFilm {
    id:number;
    name:string;
    shortDescription:string;
    poster: {
      url:string,
      previewUrl : string,
  
    };
    genres:Array<{name:string}>
    rating:{kp: number, imdb: number, filmCritics: number, russianFilmCritics: number, await: boolean | null}
    year:number;
  }
  
export interface ResponseFilms{
    docs: IFilm[];
    limit:number;
    page:number;
    pages:number;
    total:number;
  
  }