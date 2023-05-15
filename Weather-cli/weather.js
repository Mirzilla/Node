#!/usr/bin/env node
import { getArgs } from "./helpers/arg.js";
import { getWeather, getIcon } from "./services/api service.js";
import { printHelp, printError, printSuccess, printWeather } from "./services/log service.js";
import { saveKeyValue, TOKEN_DICTIONARY,  getKeyValue } from "./services/storage service.js";

const saveToken = async (token) => {
    if(!token.length) {
        printError("No token");
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token)
        printSuccess('Token was saved')
    } catch (error) {
        printError(error.message)
    }
}

const saveCity = async (city) => {
    if(!city.length) {
        printError("No city");
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city)
        printSuccess('City was saved')
    } catch (error) {
        printError(error.message)
    }
}


const getForecast = async () => {
    try {
        const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city)
        const weather = await getWeather(city);
        printWeather(weather, getIcon(weather.weather[0].icon))
    } catch (error) {
        if(error?.response?.status == 404) {
            printError('The city name is incorrectly')
        }else if(error?.response?.status == 401) {
            printError('The token is incorrectly')
        }else {
            printError(error.message)
        }
        
    }

}
const initCli = () => {
    const args = getArgs(process.argv);
    if(args.h) {
        printHelp(args.h);
    }
    if(args.s) {
        return saveCity(args.s)
    }
    if(args.t) {
        return saveToken(args.t)
    }
    return getForecast();
};

initCli();
