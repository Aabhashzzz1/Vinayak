import React from 'react';
//import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    social: {
        display: 'flex',
        marginLeft: '80%',
        marginTop: '-2%'
        
        
    }
})

const SocialMediaFooter = () => {

    const classes= useStyles();
    return (
        <div className={classes.social}>
        <SocialIcon network="github" fgColor= '#ffffff' style={{ height: 35, width: 35, marginRight:'auto' }} url='https://github.com/Aabhashzzz1' />
        <SocialIcon network="discord" fgColor= '#ffffff' style={{ height: 35, width: 35, marginRight:'auto' }} url='https://discordapp.com/users/707131580782608386' />
        <SocialIcon network="instagram" fgColor= '#ffffff' style={{ height: 35, width: 35, marginRight:'auto' }} url='https://www.instagram.com/adware_malware/' />
        <SocialIcon network="telegram" fgColor= '#ffffff' style={{ height: 35, width: 35, marginRight: 'auto' }} url='https://telegram.me/adware_malware' />

        </div>
    )
}

export default SocialMediaFooter;