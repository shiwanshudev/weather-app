import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    component: {
        margin: '15px 50px',
    },
    text:{
        fontSize: '18px',
        lineHeight: 2
    }
});
const Detail = ({data})=>{
    const classes = useStyles();
    if(Object.keys(data).length !== 0 && data !== "error"){
        return (
            <Box className={classes.component}>
                <Typography className={classes.text}><i className='bx bxs-location-plus' ></i> Location {data.name}, {data.sys.country}</Typography>
                <Typography className={classes.text}><i className='bx bxs-thermometer'></i> Temperature {data.main.temp} °C</Typography>
                <Typography className={classes.text}><i className='bx bxs-droplet' ></i> Humidity {data.main.humidity}</Typography>
                <Typography className={classes.text}><i className='bx bxs-sun' ></i> Sunrise {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</Typography>
                <Typography className={classes.text}><i className='bx bx-sun' ></i> Sunset {new Date(data.sys.sunset * 1000).toLocaleTimeString()}</Typography>
                <Typography className={classes.text}><i className='bx bx-stats' ></i> Condition {data.weather[0].main}</Typography>
                <Typography className={classes.text}><i className='bx bxs-cloud' ></i> Clouds {data.clouds.all} %</Typography>
            </Box>
            )
    }else if(data === "error"){
        return <Typography style={{margin: '30px'}} color="secondary">Error Loading Data...</Typography>
    }else{
        return <Typography style={{margin: '30px'}}>Loading Data...</Typography>
    }
};

export default Detail;