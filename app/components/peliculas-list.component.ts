import {Component} from 'angular2/core';
import {Pelicula}  from '../model/pelicula';
import {PeliculasService} from "../services/peliculas.service";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {SomeData} from "../model/SomeData";

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'peliculas-list',
    templateUrl: 'app/view/peliculas-list.html',
    providers:[PeliculasService],
    directives: [ROUTER_DIRECTIVES]
})

// Clase del componente donde iran los datos y funcionalidades
export class PeliculasListComponent {
  public pelicula:Pelicula;
  public peliculaElegida:Pelicula;
  public momstrarDatos:boolean;
  public peliculas:Array<Pelicula>;
  //public peliculas;
  public datoServicio;
  public price:string[];
  public modelo:SomeData;
  model;

  constructor(private PeliculasService:PeliculasService){
    this.momstrarDatos=false;
    //this.datoServicio=PeliculasService.getPeliculas();
    this.peliculas= PeliculasService.getPeliculas();
    console.log(this.peliculas);
    //this.pelicula = new Pelicula(1,'Civil war', 'Fulano',2016);
    this.pelicula = this.peliculas[0];
    this.peliculaElegida= this.peliculas[0];
    this.price = ["1000", "2000", "3000"];
    this.debug();
    this.model = new SomeData(this.price);
    this.model = {
            sex: "male"
        };
  }

  getValue(price){
    this.model.price = price;
  }

  debug(titulo = null){
    if(titulo == null){
        console.log(this.pelicula);
    }else{
        console.log(this.pelicula.titulo);
    }

  }

  onShowHide(value){
    this.momstrarDatos=value;
  }

  onCambiarPelicula(pelicula){
    this.pelicula = pelicula;
    this.peliculaElegida=pelicula;
  }



}
