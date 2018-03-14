import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



export interface Results{
  title : string ; 
  author : string ;
  image : string ;
  date : string ;

}
const fakeresultats: Results[]=[
    {title : 'batman begins', author: 'Nolan', date: '2005', image:'https://image.tmdb.org/t/p/w600_and_h900_bestv2/zfVFOo2XCHbeA0mXbst42TAGhfC.jpg'},
    {title : 'harry potter 1', author: 'JK Row', date: ' 16 Novembre 2001', image:'https://image.tmdb.org/t/p/w600_and_h900_bestv2/4bUd3nUGD2XnhLkYNCXHFjPHEH5.jpg'}
];

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {
  results : Results[];
  constructor(public navCtrl: NavController) {
    this.results = [];
  }
  onInput(event : any) : void{
    const query : string = event.target.value;
    this.results = query? fakeresultats : [];
  }
 
}
