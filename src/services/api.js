import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY;
const URL = 'https://api.openweathermap.org/data/2.5/weather';

const getData = (city='Delhi') =>(axios.get(`${URL}?q=${city}&appid=${API_KEY}&units=metric`));

export default getData;