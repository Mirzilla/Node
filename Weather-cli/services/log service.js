import chalk from 'chalk'
import dedent from 'dedent-js';
const printError = (error) => {
    console.log(chalk.bgRed(`ERROR: ${error}`));
}

const printSuccess = (message) => {
    console.log(chalk.bgGreen(`Success: ${message}`));
}
const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan(' HELP ')}
        Without parameters - output weather
        -s [CITY] for install city
        -h for output help
        -t [API_KET] for save token
        `
    );
}
const printWeather = (res, icon) => {
    console.log(
        dedent`${chalk.bgYellow(' WEATHER ')} Weather in ${res.name}
        ${icon} ${res.weather[0].description}
        Temperature: ${res.main.temp}
        Feels like: ${res.main.feels_like}
        Humidity: ${res.main.humidity}%
        Wind speed: ${res.wind.speed}
        `
    );
}


export {printError, printSuccess, printHelp, printWeather}