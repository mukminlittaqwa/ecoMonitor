"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function WeatherWidget() {
  useEffect(() => {
    return () => {
      const widget = document.getElementById("weatherapi-weather-widget-3");
      if (widget) widget.innerHTML = "";
    };
  }, []);

  return (
    <>
      <Script
        src="https://www.weatherapi.com/weather/widget.ashx?loc=3019632&wid=3&tu=1&div=weatherapi-weather-widget-3"
        strategy="afterInteractive"
      />
      <div 
        id="weatherapi-weather-widget-3" 
        className=""
      />
      <noscript>
        <a 
          href="https://www.weatherapi.com/weather/q/yogyakarta-3019632" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Cuaca Yogyakarta per jam (10 hari)
        </a>
      </noscript>
    </>
  );
}