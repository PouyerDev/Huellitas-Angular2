import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit{
  ngOnInit() {
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
}
