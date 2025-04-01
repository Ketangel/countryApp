import  type  { Country } from "../interfaces/country.interfaces";
import  type  { CountryMap } from "../interfaces/mapperCountry.interfaces";

export class CountryMapperFiler {


    static mapRestCountry(restCountry:Country):CountryMap{
        return{
    capital: restCountry.capital?.join(','),
    cca2: restCountry.cca2,
    flag: restCountry.flag,
    flagSvg: restCountry.flags.svg,
    name: restCountry.translations['spa'].common ?? 'No spanish Name',
    population: restCountry.population,
    zoneTime: restCountry.timezones,
    region: restCountry.region,
    subRegion: restCountry.subregion,
}
    }

    static mapRestCountryArrayToCountryArray(restCountry:Country[]):CountryMap[]{
        return restCountry.map( this.mapRestCountry )
    }


}