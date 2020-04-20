import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  instrumentos = [
    {
      nombre: 'flauta',
      imagen: '/assets/imagenes/flauta.png',
      audio: '/assets/sonidos/flauta.mp3'
    },
    {
      nombre: 'flauta',
      imagen: '/assets/imagenes/platillos.png',
      audio: '/assets/sonidos/platillos.mp3'
    },
    {
      nombre: 'flauta',
      imagen: '/assets/imagenes/bombo1.png',
      audio: '/assets/sonidos/bombo1.mp3'
    },
    {
      nombre: 'flauta',
      imagen: '/assets/imagenes/bombo2.png',
      audio: '/assets/sonidos/bombo2.mp3'
    }
  ];

  reproducirSonido(instrumento) {
    const sonido = new Audio();

    sonido.src = instrumento.audio;

    sonido.load();
    sonido.play();
  }
}
