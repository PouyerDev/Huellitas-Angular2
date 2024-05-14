import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit{
  sequenceMatched = false;


  ngOnInit() {
    this.actions();
  }
  
  ngOnChanges(){
    this.actions();
  }
  
  ngOnRefresh(){
    this.actions();
  } 


  constructor(private themeService: ThemeService) {
  }

  actions(){
    document.addEventListener("DOMContentLoaded", () => {
      const slidesContainer = document.getElementById("slides-container")!;
      const slides = document.querySelectorAll(".slide")!;
      const prevButton = document.getElementById("slide-arrow-prev")!;
      const nextButton = document.getElementById("slide-arrow-next")!;
      let currentSlideIndex = 0;

      nextButton.addEventListener("click", () => {
        const slideWidth = slides[0].clientWidth;
        currentSlideIndex++;
        if (currentSlideIndex >= slides.length) {
          currentSlideIndex = 0;
        }
        slidesContainer.scrollLeft = currentSlideIndex * slideWidth;
      });

      prevButton.addEventListener("click", () => {
        const slideWidth = slides[0].clientWidth;
        currentSlideIndex--;
        if (currentSlideIndex < 0) {
          currentSlideIndex = slides.length - 1;
        }
        slidesContainer.scrollLeft = currentSlideIndex * slideWidth;
      });
    });
  }

  scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  slideNext() {
    const slidesContainer = document.getElementById("slides-container")!;
    const slides = document.querySelectorAll(".slide");
    const slideWidth = slides[0].clientWidth;
    let currentSlideIndex = Math.floor(slidesContainer.scrollLeft / slideWidth) + 1;

    if (currentSlideIndex >= slides.length) {
      currentSlideIndex = 0;
    }

    slidesContainer.scrollLeft = currentSlideIndex * slideWidth;
  }

  slidePrev() {
    const slidesContainer = document.getElementById("slides-container")!;
    const slides = document.querySelectorAll(".slide");
    const slideWidth = slides[0].clientWidth;
    let currentSlideIndex = Math.floor(slidesContainer.scrollLeft / slideWidth) - 1;

    if (currentSlideIndex < 0) {
      currentSlideIndex = slides.length - 1;
    }

    slidesContainer.scrollLeft = currentSlideIndex * slideWidth;
  }
 // Agregar la detección de la secuencia de teclas
 private sequence: string[] = []; 
 private secretSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA']; 

 @HostListener('document:keydown', ['$event'])
 handleKeyboardEvent(event: KeyboardEvent) {
   this.sequence.push(event.code);
   this.sequence = this.sequence.slice(-this.secretSequence.length);

   if (this.sequence.join('') === this.secretSequence.join('')) {
     console.log('Secuencia secreta ingresada!');
     // Realizar la acción deseada aquí, por ejemplo:
     //this.scrollTo('seccion-secreta');
     this.sequenceMatched = true;
     window.location.href = 'https://youtu.be/dQw4w9WgXcQ';

     // O puedes llamar a cualquier otra función que desees ejecutar cuando se ingrese la secuencia secreta.
   }
 }
}