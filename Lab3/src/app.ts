
export class App {
    opwApiKey = '8f669e1ea1325943bc8798bb416a39b1';
    cityName: string;
    constructor(cityName: string) {
        this.cityName = cityName;
    }

    async getCityInfo(city: string) {
        const weather = await this.getWeather(city);
        this.saveData(weather);
    }
    async getWeather(city: string): Promise<any> {
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${this.opwApiKey}`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData = await weatherResponse.json();
        console.log(weatherData);
        return weatherData;
    }
    saveData(data: any []) {
        localStorage.setItem('weatherData', JSON.stringify(data));
    }
    
    getData() {
        const data = localStorage.getItem('weatherData');
        if (data) {
            return JSON.parse(data);
        } else {
            return {};
        }
    }
}

    // refreshPage() {
    //     setInterval(() => document.defaultView.location.reload(), 99999);
    //     this.getData();       
    //   }







