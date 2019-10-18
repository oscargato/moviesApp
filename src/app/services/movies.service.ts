import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http';
//import * as Rx from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class MoviesService{
	private apiKey:string = 'c42f06a19b3dc0d4781586477ff761d7';
	private urlMoviedb:string = 'https://api.themoviedb.org/3';

  	constructor(private jsonp:Jsonp, private http:Http){}
  	/*
  	public getPopulares(){
  		let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc`;
  		return this.http.get(url).map(res=>res.json());
  	}
  	*/
}