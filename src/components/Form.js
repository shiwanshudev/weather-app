import { Box, Button, TextField, makeStyles } from "@material-ui/core";
import {useState, useEffect } from "react";

const useStyles = makeStyles({
    wrapper:{
        margin: '10px 30px'
    },
    input:{
        margin: '15px'
    },
    button:{
        margin: '15px',
        padding: '15px',
    }
});

const Form = (props) =>{
    const classes = useStyles();
    const [city, setCity] = useState("");
    return (
        <Box className={classes.wrapper}>
            <TextField 
                required
                className={classes.input}
                label="City"
                variant="outlined"
                onChange={(e)=> setCity(e.target.value)}
                value={city}
            />
            <Button className={classes.button} variant="contained" color="primary" onClick={(e)=> props.onGetWeather(e, city)}>Get Weather</Button>
        </Box>
    );
}

export default Form;