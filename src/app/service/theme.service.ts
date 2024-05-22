import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    currentTheme: keyof Themes = 'light'; // Default theme
    private themes: Themes = {
        light: {
            whiteColor: '#FFFFFF', //Blanco
            backgroundColor: '#FFFFFF', //crema
            textColor: '#181818',
            mainColor: '#FFCF96', //Naranja
            secondColor: '#FF7474', //Rosa fuerte
            thirdColor: '#FCF4C4',
            fourthColor: '#FFA074',
            fifthColor: '#CEE3FA',
            sixthColor: '#CDFADB'
        },
        dark: {
            whiteColor: '#181818',
            backgroundColor: '#323232',
            textColor: '#ffffff',
            mainColor: '#BF6C5A',
            secondColor: '#a13d3d',
            thirdColor: '#FCF4C4',
            fourthColor: '#FFA074',
            fifthColor: '#BF6C5A',
            sixthColor: '#FF69B4'
        },
        access: {
            whiteColor: '#FFFFFF',
            backgroundColor: '#ffffff',
            textColor: '#181818',
            mainColor: '#FFA07A',
            secondColor: '#2C0888',
            thirdColor: '#FFFF00',
            fourthColor: '#2C0888',
            fifthColor: '#FFA07A',
            sixthColor: '#00CED1'
        }
    };

    constructor() {
        // Load the saved theme from localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme && this.themes[savedTheme as keyof Themes]) {
            this.setTheme(savedTheme as keyof Themes);
        } else {
            this.applyTheme(this.themes[this.currentTheme]); // Apply default theme if no saved theme
        }
    }

    setThemeByName(themeName: string) {
        this.setTheme(themeName as keyof Themes);
    }

    setTheme(theme: keyof Themes) {
        this.currentTheme = theme;
        const selectedTheme = this.themes[theme];
        this.applyTheme(selectedTheme);
        localStorage.setItem('theme', theme); // Save the selected theme to localStorage
    }

    private applyTheme(theme: Theme) {
        document.documentElement.style.setProperty('--background-color', theme.backgroundColor);
        document.documentElement.style.setProperty('--white-color', theme.whiteColor);
        document.documentElement.style.setProperty('--black-color', theme.textColor);
        document.documentElement.style.setProperty('--main-color', theme.mainColor);
        document.documentElement.style.setProperty('--second-color', theme.secondColor);
        document.documentElement.style.setProperty('--third-color', theme.thirdColor);
        document.documentElement.style.setProperty('--fourth-color', theme.fourthColor);
        document.documentElement.style.setProperty('--fifth-color', theme.fifthColor);
        document.documentElement.style.setProperty('--sixth-color', theme.sixthColor);
    }
}

interface Theme {
    whiteColor: string;
    backgroundColor: string;
    textColor: string;
    mainColor: string;
    secondColor: string;
    thirdColor: string;
    fourthColor: string;
    fifthColor: string;
    sixthColor: string;
}

interface Themes {
    light: Theme;
    dark: Theme;
    access: Theme;
}
