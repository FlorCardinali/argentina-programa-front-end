import { Component } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent {
  public mostrarMas() {
    const boton_mostrar_mas = document.getElementById("mostrar-mas");
    const acerca_de = document.getElementById("texto-largo");
    if (boton_mostrar_mas) {
      console.log(boton_mostrar_mas.textContent);
      if (boton_mostrar_mas.textContent == "Mostrar mas") {
        if (acerca_de) {
          acerca_de.style.maxHeight = "90000px";
          boton_mostrar_mas.textContent = "Mostrar menos";
        }
      } else if (boton_mostrar_mas.textContent == "Mostrar menos"){
        if (acerca_de) {
          acerca_de.style.maxHeight = "100px";
          boton_mostrar_mas.textContent = "Mostrar mas";
        }   
      }   
    }
  } 
}
