import React from "react";
import { makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';
import ShopMap from "../map/ShopMap";
import SocialMediaAbout from "../../socialMedia/SocialMediaAbout";

//images
import AboutCake from '../../images/aboutCake.jpg';

const useStyles = makeStyles({
    heading: {
        fontSize: '40px',
        alignContent: 'center',
        justifyContent:'center',
        color: '#F9B5AC',        
    },
    AboutCake : {
        backgroundImage: `url(${AboutCake})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: '0 80%', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        height: 800,
    },
    text: {
        color: '#B5CCFF',
        //marginLeft: '55%',
        marginRight: '10%',
        textAlign: 'right',
    },
    map: {
        //marginRight: 'auto'   
    }
})

const About = () => {
    const classes = useStyles();
    const AboutIcon = "https://img.icons8.com/ios/35/F9B5AC/about.png";

    return (
        <div className={classes.AboutCake}>
            <Typography className={classes.heading}>&ensp;&ensp;About <img style={{marginTop: '-8px'}} src={AboutIcon} alt="aboutIcon" /> </Typography> 
            <Typography className={clsx(classes.text,classes.map)}>
                <h2>VINAYAK CAKES & BAKES</h2>
                <h6>16 Nanak Palace, Bholaram Ustad Marg,<br/> </h6><h6> Near Gurudwara, Ring Road, Indore (M.P) </h6>
                +91-9522277229 , +91-9303336669
                <br/>
                <SocialMediaAbout/>
                <br/>
                <ShopMap/>
            </Typography>
        </div>
    )
}


export default About;