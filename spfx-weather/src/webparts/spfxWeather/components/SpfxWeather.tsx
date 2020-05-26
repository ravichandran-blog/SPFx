import * as React from 'react';
import styles from './SpfxWeather.module.scss';
import { ISpfxWeatherProps } from './ISpfxWeatherProps';
import { ISpfxWeatherState } from './ISpfxWeatherState';
import { escape } from '@microsoft/sp-lodash-subset';
import { HttpClient, HttpClientResponse } from '@microsoft/sp-http';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';

export default class SpfxWeather extends React.Component<ISpfxWeatherProps, ISpfxWeatherState> {
  constructor(props: ISpfxWeatherProps, state: {}) {
    super(props);
    this.state = ({ skyimage: '', location: '', weatherid: '', temperature: '', windspeed: '', humidity: '' })
    this.getWeather();
  }

  @autobind
  private async getWeather() {
    console.log(this.props.description)
    const info = await this.props.context.httpClient.get('https://ipinfo.io/json')
    const locinfo = await info.json();
    var locString = locinfo.loc.split(',');
    var latitude = parseFloat(locString[0]);
    var longitude = parseFloat(locString[1]);
    const weather = await this.props.context.httpClient.get('https://cors.5apps.com/?uri=http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&units=metric&APPID=c3e00c8860695fd6096fe32896042eda')
    const weatherinfo = await weather.json();
    var windSpeedkmh = Math.round(weatherinfo.wind.speed * 3.6);
    var Celsius = Math.round(weatherinfo.main.temp)
    var iconId = weatherinfo.weather[0].icon;
    var weatherURL = "http://openweathermap.org/img/w/" + iconId + ".png";
    this.setState({
      skyimage: weatherURL,
      location: locinfo.city + ', ' + locinfo.region + ', ' + locinfo.country,
      weatherid: weatherinfo.weather[0].description,
      temperature: Celsius.toString(),
      windspeed: windSpeedkmh + ' km/hr',
      humidity: weatherinfo.main.humidity
    })
  }

  public render(): React.ReactElement<ISpfxWeatherProps> {
    return (
      <div className={styles.spfxWeather}>
        <img src={this.state.skyimage}></img><br />
        Location: {this.state.location}<br />
        Skies: {this.state.weatherid}<br />
        Temperature: {this.state.temperature}&deg;C<br />
        Wind speed: {this.state.windspeed}<br />
        Humidity: {this.state.humidity}<br />
      </div>
    );
  }
}
