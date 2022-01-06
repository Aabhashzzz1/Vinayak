import React from "react";
import { makeStyles, Typography, Box } from "@material-ui/core";
import SocialMediaFooter from "../../socialMedia/SocialMediaFooter";

const useStyle = makeStyles({
    footer: {
        
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#F9B5AC',
        marginBottom: '-20px',
        textAlign: 'left',
        color: '#ffffff'
    },
    name : {
        color: '#000',
        textDecoration: 'none',
        backgroundColor: 'transparent',
        fontWeight: 600,
        '&:hover': {
            color: '#28536B',
            textDecoration: 'none',
        }
    },
    
    
})

const Footer = () => {

    const classes = useStyle();
    return (
        <Box className={classes.footer}>
            <Typography style={{opacity: '0.7',justifyContent: 'center'}}>&ensp; © 2021 Copyright: <a href="https://www.linkedin.com/in/aabhash-malviya/" className={classes.name} >Aabhash Malviya </a></Typography>
            <SocialMediaFooter/>
            
            
            
        </Box>
    )

}

export default Footer;