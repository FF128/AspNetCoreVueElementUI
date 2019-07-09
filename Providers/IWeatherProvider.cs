using System.Collections.Generic;
using Web.Models;

namespace Web.Providers
{
    public interface IWeatherProvider
    {
        List<WeatherForecast> GetForecasts();
    }
}
