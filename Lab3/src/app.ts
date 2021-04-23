import { WeatherAPIClass } from './wetherClass';

export class App {

    opwApiKey = '8f669e1ea1325943bc8798bb416a39b1';
    cityName: string;

    constructor(cityName: string) {
        this.cityName = cityName;
    }

    async getCityInfo(city: string) {
        const weather = await this.getWeather(city);
        this.saveData(weather);
        this.refreshPage();
    }
    async getWeather(city: string): Promise<any> {

        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${this.opwApiKey}`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData: WeatherAPIClass = await weatherResponse.json();   
        return weatherData;
        
    }

    saveData(data: any) {
        localStorage.setItem('weatherData', JSON.stringify(data)); 
    }

    getData() {
        const data = localStorage.getItem('weatherData');
        return data;
    }

    refreshPage() {
        setInterval(() => document.defaultView.location.reload(), 99999);
        this.getData();
        
      }




}