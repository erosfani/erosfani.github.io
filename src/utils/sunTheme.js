const SEASONAL_AMPLITUDE_HOURS = 3.5;
const AVERAGE_DAY_LENGTH_HOURS = 12;
const SOLSTICE_DAY_OF_YEAR = 172; // ~Jun 21, longest day (Northern-hemisphere-biased approximation)

function dayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  return Math.floor((date - start) / 86400000);
}

function decimalHours(date) {
  return date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600;
}

function atDecimalHour(date, hours) {
  const result = new Date(date);
  result.setHours(0, 0, 0, 0);
  result.setMilliseconds(hours * 3600000);
  return result;
}

function getSunTimes(date) {
  const dayLength = AVERAGE_DAY_LENGTH_HOURS +
    SEASONAL_AMPLITUDE_HOURS * Math.cos((2 * Math.PI * (dayOfYear(date) - SOLSTICE_DAY_OF_YEAR)) / 365);
  return {
    sunrise: 12 - dayLength / 2,
    sunset: 12 + dayLength / 2,
  };
}

export function getAutoTheme(date = new Date()) {
  const hours = decimalHours(date);
  const {sunrise, sunset} = getSunTimes(date);
  return hours >= sunrise && hours < sunset ? 'light' : 'dark';
}

export function msUntilNextThemeChange(date = new Date()) {
  const hours = decimalHours(date);
  const {sunrise, sunset} = getSunTimes(date);

  let target;
  if (hours < sunrise) {
    target = atDecimalHour(date, sunrise);
  } else if (hours < sunset) {
    target = atDecimalHour(date, sunset);
  } else {
    const tomorrow = new Date(date);
    tomorrow.setDate(tomorrow.getDate() + 1);
    target = atDecimalHour(tomorrow, getSunTimes(tomorrow).sunrise);
  }

  return Math.max(target.getTime() - date.getTime(), 1000);
}
