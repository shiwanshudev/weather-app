import {Box, makeStyles} from '@material-ui/core';
import { useState, useEffect } from 'react';
import bg from '../images/bg.jpg';
import getData from '../services/api';
import Detail from './Detail';
import Form from './Form';

const useStyles = makeStyles((theme=>({
    component: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        width: '45vw',
        margin: '0 auto',
        [theme.breakpoints.down('md')]:{
            width: '70vw',
        },
        [theme.breakpoints.down('sm')]:{
            width: '90vw',
        }
    },
    leftContainer: {
        backgroundImage: `url(${bg})`,
        height: '57%',
        width: '30%',
        backgroundSize: 'cover',
        borderRadius: '10px 0 0 10px',
        [theme.breakpoints.down('xs')]:{
            width: 0,
        }
    },
    rightContainer:{
        background: '#fff',
        height: '57%',
        width: '70%',
        borderRadius: '0 10px 10px 0',
        [theme.breakpoints.down('xs')]:{
            width: '100%',
        }
    },
})));

const Weather = () =>{
    const classes = useStyles(); 
    const [weatherData, setWeatherData] = useState({});
    useEffect(()=>{
        getCurrentWeather();
    }, []);

    const handleGetWeather = (e, city)=>{
        getCurrentWeather(city);
    }

    const getCurrentWeather = async (city="Delhi")=>{
        try{
            const response = await getData(city);
            setWeatherData(response.data);
        }catch(error){
            setWeatherData("error");
            console.log("Error fetching data: ", error);
        }
    }
    return (
        <Box className={classes.component}>
            <Box className={classes.leftContainer}></Box>
            <Box className={classes.rightContainer}>
                <Form onGetWeather = {handleGetWeather}/>
                <Detail data={weatherData}/>
            </Box>
        </Box>
    );
};

export default Weather;