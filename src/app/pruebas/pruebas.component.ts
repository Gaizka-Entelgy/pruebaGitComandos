import { Component, Input, OnInit, Output } from '@angular/core';
import { element } from 'protractor';


@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {

  // Prueba array.map()
  public numbers = [1, 5, 10, 15];
  public resultadoPrueba = [];
  public inputPruebaArray: number;

  onPruebaMap() {
    this.resultadoPrueba = this.numbers.map((x: number) => x * this.inputPruebaArray);
  }

  // Prueba array.map() - 2
  public platos: { primero: string, postre: string }[] = [
    { "primero": "Filete", "postre": "helado" },
    { "primero": "lechuga", "postre": "tarta" },
    { "primero": "champis", "postre": "yogur" }
  ];
  public opcionesPrueba2 = ['primero', 'postre'];
  public seleccionadoPruba2 = '';

  public resultadoPrueba2 = [];

  onPruebaMap2(event: any) {
    this.seleccionadoPruba2 = event.target.defaultValue;
    this.resultadoPrueba2 = this.platos.map((menu) => {
      if (this.seleccionadoPruba2 === 'primero') {
        return menu.primero;
      } else {
        return menu.postre;
      }
    });
  }

  // Prueba array.filter()
  public frutas = ['manzana', 'platano', 'uvas', 'mango', 'naranja'];
  public resultadoPrueba3 = [];
  public pruebaFiltrarInput: string;

  onPruebaFilter(peticion: string) {
    this.resultadoPrueba3 = this.frutas.filter(fruta =>
      fruta.toLowerCase().indexOf(peticion.toLowerCase()) > -1);
  }

  // Prueba array.filter() + .map()
  /**/
  public heroes: { nombre: string, alterEgo: string }[] = [
    { "nombre": "Superman", "alterEgo": "Clark Kent" },
    { "nombre": "Batman", "alterEgo": "Bruce Wayne" },
    { "nombre": "Iron Man", "alterEgo": "Tony Stark" },
    { "nombre": "Capitan America", "alterEgo": "Steve Rogers" },
    { "nombre": "Wonder Woman", "alterEgo": "Diana Prince" },
    { "nombre": "Spider-Man", "alterEgo": "Peter Parker" },
    { "nombre": "Ghost Spider", "alterEgo": "Gwen Stacy" }
  ];
  public pruebaFiltrarMapInput: string;
  public resultadoPruebaFilterMap = [];
  onPruebaFilterMap(peticion: string) {
    this.resultadoPruebaFilterMap = this.heroes.filter(heroe =>
      heroe.nombre === this.pruebaFiltrarMapInput)
      .map(heroe => heroe.alterEgo)
  }
  // Prueba array.find()
  public pruebaFindInput: string;
  public resultadoPruebaFind;

  onPruebaFind(peticion: string) {
    this.resultadoPruebaFind = this.heroes.find(heroe => {
      for (let i = 0; i < this.heroes.length; i++) {
        if (peticion == heroe.alterEgo) {
          return heroe;
        }
      }
    }).nombre;
  }
  // Prueba array.forEach()

  public tiposDeHeroes = [
    { "personaje": "Superman", "tipo": "kriptoniano" },
    { "personaje": "SuperGirl", "tipo": "kriptoniano" },
    { "personaje": "PowerGirl", "tipo": "kriptoniano" },
    { "personaje": "General Zod", "tipo": "kriptoniano" },
    { "personaje": "Ghost Spider", "tipo": "Araña" },
    { "personaje": "Spiderman", "tipo": "Araña" }
  ];

  public pruebaforEachInput;
  public cantidadPersonajesPorTipo;
  public cont: number = 0;
  public listaHeroes = [];

  onPruebaforEach(peticion) {
    this.cont = 0;
    this.tiposDeHeroes.forEach(heroe => {
      if (peticion === heroe.tipo) {
        this.cont++;
      }
    })
  }
  onPruebaforEach2(peticion) {
    this.listaHeroes = [];
    this.tiposDeHeroes.forEach(heroe => {
      if (peticion === heroe.tipo) {
        this.listaHeroes.push(heroe.personaje);
      }
    });
    console.log(this.listaHeroes);
  }

  // Prueba array.flat()
  public arrayPruebaflat = [1, 2, [3, 4, [5, 6]]];
  public opcionesFlat = [1, 2, 3, Infinity];
  public resultFlat1;
  public seleccionadoFlat;

  onPruebaFlat(event: any) {
    this.seleccionadoFlat = event.target.defaultValue;
    this.resultFlat1 = this.arrayPruebaflat.flat(this.seleccionadoFlat);
    console.log(this.resultFlat1);

  }

  // Prueba array.sort()
  // ordena en base al vaor unicode (?) por o que si se quiere ordenar de alguna manera especifica hay que indicarselo
  public arrayPruebaSort = [1, 10, 2, 21, 105, 78, 932]
  public resultadoSort;

  onPruebaSort1() {
    this.arrayPruebaSort = [1, 10, 2, 21, 105, 78, 932];
    this.resultadoSort = this.arrayPruebaSort.sort();
  }
  onPruebaSort2() {
    this.arrayPruebaSort = [1, 10, 2, 21, 105, 78, 932];
    this.resultadoSort = this.arrayPruebaSort.sort((a, b) => a - b);
  }

  onPruebaSort3() {
    this.arrayPruebaSort = [1, 10, 2, 21, 105, 78, 932];
    this.resultadoSort = this.arrayPruebaSort.sort((a, b) => b - a);
  }

  // Prueba array.reverse()
  // Cambia el orden del array, invirtiendolo. Aun a pesar de que dice "destruir" el array original, parece que no loha hecho
  public arrayPruebaReverse = [1, 2, 3, 4, 5, 6];
  public arrayPruebaReverseRes;

  onPruebaReverse() {
    this.arrayPruebaReverseRes = this.arrayPruebaReverse.reverse();
  }




  // Prueba array.reduce()
  //EL reduce() debe retornar lo mismo que lo que se le pasa. Si es un numero, retorna números. Si son objetos, pues objetos
  //los dos parametros del reduce son el objeto anterior y el objeto actual
  onPruebaReduce(peticion: string) {
    this.cantidadPersonajesPorTipo = this.tiposDeHeroes.reduce((ant, act, i, arr) => {
      console.log('ant', ant);
      console.log('act', act);
      console.log('i', i);
      console.log('arr', arr);
      console.log('----------');

      return ant;
    });
  }

  // Prueba FECHAS
  public patata: Date = new Date();

  public options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  pruebaFecha() {
    let patata2 = this.patata.toLocaleDateString('ar-EG', this.options);
    console.log(patata2);
  }

  public date1 = new Date(2017, 0, 1);
  public date2 = new Date(2017, 0, 1);
  public date1b = this.date1;

  /*No lo he usado, pero se recomienda usar el método .setHours() para que ambas fechas a comparar tengan 
  la misma hora y no de problemas.
  .setHours(0,0,0,0)*/
  pruebaComparar(){
    console.log( this.date1.valueOf() === this.date2.valueOf()  );
    console.log( this.date1.valueOf() === this.date1b.valueOf() );
    console.log( this.date1.valueOf() === this.patata.valueOf() );
  }
  public diaInput: number;
  public MesInput: number;
  public annioInput: number;
  public fechaConvertida;

  convertirStringADate(){
    let fechaCompletaString= this.annioInput + ',' + this.MesInput + ',' + this.diaInput;
    console.log('El sting completo queda así: ' + fechaCompletaString);
    let fechaFinal=new Date(fechaCompletaString);
    console.log(fechaFinal);
  }

  public fechaInicioComparacion = new Date (2020, 8, 1);
  public fechaFinComparacion = new Date (2020, 8, 30);

  /*Aquí no creo que sea necesario usar el .setHours(0,0,0,0);
  Mas que nada porque las fechas quedan especificadas por el programador y la fecha introducida por el usuario
  está obligatoriamente en el formato adecuado, debido a los inputs. Pero si se tratara de mirar si la hora del 
  momento está dentro de fechas, si que sería necesario (para que te deje entrar o no en la web y esas cosas)*/
  onEstarEnfecha(){
    let fechaCompletaString= this.annioInput + ',' + this.MesInput + ',' + this.diaInput;
    let fechaFinal=new Date(fechaCompletaString);
    if (fechaFinal>=this.fechaInicioComparacion && fechaFinal <=this.fechaFinComparacion) {
      console.log ('Está DENTRO de plazo');
    } else {
      console.log('Está FUERA de plazo');
    }

  }

  constructor() { }

  ngOnInit(): void {
  }


}

