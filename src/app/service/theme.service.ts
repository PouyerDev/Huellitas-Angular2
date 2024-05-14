import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    currentTheme: keyof Themes = 'light'; // Theme por defecto
/*    --background-color: #FBECD9;
    --text-color: #181818;
    --primary-color: #FFCF96;
    --second-color: #ff7474;
    --third-color: #FCF4C4;
    --fourth-color: #FFA074; */
    private themes: Themes = {
        light: {
            backgroundColor: '#FBECD9', //Blanco
            textColor: '#181818',
            mainColor: '#FFCF96', //Naranja
            secondColor: '#FF7474', //Rosa fuerte
            thirdColor: '#FCF4C4',
            fourthColor: '#FFA074',
            fifthColor: '#CEE3FA',
            sixthColor: '#CDFADB'
        },
        dark: {
            backgroundColor: '#181818',
            textColor: '#FBECD9',
            mainColor: '#BF6C5A',
            secondColor: '#a13d3d',
            thirdColor: '#FCF4C4',
            fourthColor: '#FFA074',
            fifthColor: '#BF6C5A',
            sixthColor: '#FF69B4'
        },
        access: {
            backgroundColor: '#ffffff',
            textColor: '#181818',
            mainColor: '#008000',
            secondColor: '#0000CD',
            thirdColor: '#FFFF00',
            fourthColor: '#8A2BE2',
            fifthColor: '#FFA07A',
            sixthColor: '#00CED1'
        }
    };

    setThemeByName(themeName: string) {
        this.setTheme(themeName as keyof Themes);
    }
    

    setTheme(theme: keyof Themes) {
        this.currentTheme = theme;
        const selectedTheme = this.themes[theme];
        this.applyTheme(selectedTheme);
    }

    private applyTheme(theme: Theme) {
        document.documentElement.style.setProperty('--white-color', theme.backgroundColor);
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