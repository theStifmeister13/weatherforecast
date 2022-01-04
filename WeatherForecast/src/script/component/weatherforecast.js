class WeatherForecast extends HTMLElement {
    connectedCallback(){
        this.render();
    }
 
    render() {
        this.innerHTML = `<h1>Weather Forecast</h1>`;
 
    }
 }

 
customElements.define("weather-forecast", WeatherForecast);