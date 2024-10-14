import { SearchBar, WeatherContainer, WeatherData, WeatherInfo } from "./Style";
import SearchIcon from "../assets/search.png";
import SunnyImg from "../assets/clear.png";
import CloudImg from "../assets/cloud.png";
import RainImg from "../assets/rain.png";
import SnowImg from "../assets/snow.png";
import DrizzleIcon from "../assets/drizzle.png";
import WindIcon from "../assets/wind.png";
import HumadityIcon from "../assets/humidity.png";
import { useEffect, useRef, useState } from "react";

export default function Weather() {
  const [weatherData, setWeatherData] = useState<any>("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const allIcons: { [key: string]: string } = {
    "01d": SunnyImg,
    "01n": SunnyImg,
    "02d": CloudImg,
    "02n": CloudImg,
    "03d": CloudImg,
    "03n": CloudImg,
    "04d": DrizzleIcon,
    "04n": DrizzleIcon,
    "09d": RainImg,
    "09n": RainImg,
    "10d": RainImg,
    "10n": RainImg,
    "13d": SnowImg,
    "13n": SnowImg,
  };
  const search = async (city: any) => {
    if (city === "") {
      alert("enter city name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1a2464d0e047b54db8d7a3fc9ebbbc3a
`;
      const response = await fetch(url);
      const data = await response.json();
      if (!response.ok) {
        alert(data.message);
        return;
      }
      if (data.name.toLowerCase() !== city.toLowerCase()) {
        alert("The city name does not match the location in the API");
        return;
      }
      const icon = allIcons[data.weather[0].icon] || SunnyImg;
      setWeatherData({
        humadity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {}
  };
  useEffect(() => {
    search("London");
  }, []);
  return (
    <WeatherContainer>
      <SearchBar>
        <input
          ref={inputRef}
          type="text"
          name="weather"
          placeholder="Enter Name"
        />
        <img
          onClick={() => search(inputRef.current?.value)}
          src={SearchIcon}
          alt="search-icon"
        />
      </SearchBar>
      <WeatherInfo>
        <img src={weatherData.icon} alt="sunny-icon" />
        <p className="temperature">{weatherData.temperature}C</p>
        <p className="city">{weatherData.location}</p>
      </WeatherInfo>
      <WeatherData>
        <div className="humadity">
          <img src={HumadityIcon} alt="humadity-icon" />
          <div className="humadity_text">
            <h3>{weatherData.humadity}%</h3>
            <h4>Humadity</h4>
          </div>
        </div>
        <div className="wind">
          <img src={WindIcon} alt="wind-icon" />
          <div className="wind_text">
            <h3>{weatherData.windSpeed} km/h</h3>
            <h4>Wind Speed</h4>
          </div>
        </div>
      </WeatherData>
    </WeatherContainer>
  );
}
