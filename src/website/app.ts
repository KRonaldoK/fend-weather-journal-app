/* Global Variables */
const OPEN_WEATHER_MAP_BASE_URL = "https://api.openweathermap.org/data/2.5/weather?"
const OPEN_WEATHER_MAP_API_KEY = "4917d53e0c5752fc9a9bf1b098f3aa3a&units=imperial"

/* OpenWeatherMapApi */
const getWeatherFromOpenWeatherMapApi = async (zipCode: number): Promise<any> => {
  try {
    const url = `${OPEN_WEATHER_MAP_BASE_URL}zip=${zipCode}&appid=${OPEN_WEATHER_MAP_API_KEY}`
    const result = await fetch(url)
    const data = await result.json()
    return data
  } catch(error) {
    console.log("error", error)
  }
}

const updateWeatherJournal = async (newData: { date: string, temp: any, content: string }) => {
  let response = await fetch('/wj/updateWeatherJournal', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newData)
  });
  const updateResponse = await response.json()
  //console.log(updateResponse)
  return updateResponse;
}

const getWeatherJournal = async () => {
  let response = await fetch('/wj/getWeatherJournal')

  const newWeather = await response.json()

  //console.log(newWeather);
  return newWeather;
}

const updateView = (weatherJournal: any) => {
  (document.getElementById('date') as HTMLElement).innerHTML = weatherJournal.date;
  (document.getElementById('temp') as HTMLElement).innerHTML = 'Degrees: ' + weatherJournal.temperature;
  (document.getElementById('content') as HTMLElement).innerHTML = weatherJournal.content;
}

const buildNewWeatherInfo = (data: any, feelings: string) => {
  // Create a new date instance dynamically with JS
  let d = new Date()
  let today = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear()
  const weatherJournalData = {date: today, temp: data.main.temp, content: feelings}
  //console.log(JSON.stringify(weatherJournalData))
  return weatherJournalData;
}

const weatherAction = async () => {
  const zipCode = (document.getElementById('zip') as HTMLInputElement).value
  const feelings = (document.getElementById('feelings') as HTMLTextAreaElement).value

  if (zipCode === '' || zipCode === null || zipCode === ' ') {
    alert('Insert a valid zip code')
  }

  try {

    const weatherData = await getWeatherFromOpenWeatherMapApi(parseInt(zipCode as string));
    const newWeatherInfo = buildNewWeatherInfo(weatherData, feelings);

    await updateWeatherJournal(newWeatherInfo);
    const weatherJournal = await getWeatherJournal();

    updateView(weatherJournal);

  } catch (error) {
    console.log('ERROR: ', error)
  }
}

// Event listener
(document.getElementById('generate') as HTMLButtonElement).addEventListener('click', weatherAction)
