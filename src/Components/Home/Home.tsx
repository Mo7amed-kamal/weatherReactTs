import axios from 'axios'
import moment from 'moment';
import  { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import "moment/dist/locale/ar"
moment.locale("ar")


export default function Home() {

  interface WeatherData {
    location: {
      name: string
    }
    current: {
      temp_c: number
      temp_f: number
      wind_kph: number
      condition: {
        text: string
        icon: string
      }
    }
  }
  
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  
    const { t, i18n } = useTranslation();
    const [dateAndTime,setDateAndTime] = useState<any>("")
    // Handel Click
    const [locale,setLocale] = useState("ar")

   async function getWeather() {
        try {
          const response = await axios.get( `http://api.weatherapi.com/v1/current.json?key=229caeb0d21c4fe392b183516240601&q=riyadh&aqi=no` )
          console.log(response.data);
          setWeatherData(response.data)
          
        } catch (error) {
          console.error("Something went wrong:", error);
        }
        
    }
    
    function handelClick() {
      if(locale == "en") {
          setLocale("ar")
          i18n.changeLanguage("ar")
          moment.locale("ar")
      }else{
        setLocale("en")
        i18n.changeLanguage("en")
        moment.locale("en")
      }
      setDateAndTime(moment().format('MMMM Do YYYY, h:mm:ss a'))
    }

  
    useEffect( ()=> {
      setDateAndTime(moment().format('MMMM Do YYYY, h:mm:ss a'))
        getWeather()
    }, [])
    
    useEffect( ()=> { // inside useEffect Run one not many infinte Loop
      i18n.changeLanguage(locale)
    },[] )

  return (
    <>
    <section className='handala'>
    <div className="page" dir={locale == "ar" ? "rtl" : "ltr"}>
      <div className="weather-card" >
        <div className="header" >
            
          <h2 className='nameCity'> {t(weatherData?.location.name)} </h2>
          <h2 className="date"> {dateAndTime} </h2>
        </div>

        <div className="content" >
          <div className="icon">
            ☁️
          </div>

          <div className="info " >
            <div className="temp">
              <span > <img src={weatherData?.current?.condition.icon} alt="" /> </span>
              <span className="degree"> °{weatherData?.current?.temp_c} </span>
            </div>

            <p className="status"> {t(weatherData?.current?.condition.text)} </p>

            <p className="range " >
             {t("Min")}: {weatherData?.current?.temp_c}° | {t("Max")}: {weatherData?.current?.temp_f}°
            </p>
            <h2 className='wind'> { t("Wind") } : {weatherData?.current?.wind_kph} </h2>
          </div>

        </div>

          <button className='weather-btn' onClick={handelClick}>
            {locale == "en" ? "Arabic" : "أنجـليزي"}
          </button>
      </div>
    </div>
    </section>
 
    
    
    </>
  )
}
