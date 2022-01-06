import React from 'react';
//import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    social: {
        display: 'flex',
        marginLeft: '80%',
        marginTop: '2%',
        marginBottom: '-8%',
        alignContent: 'right'
        
    }
})

const SocialMediaAbout = () => {

    const classes= useStyles();
    return (
        <div className={classes.social}>
        {/* <SocialIcon network="facebook" fgColor= '#ffffff' style={{ height: 45, width: 45,marginRight: '30px' }} url='' />
        <SocialIcon network="instagram" fgColor= '#ffffff' style={{ height: 45, width: 45,marginRight: '30px' }} url='' />
        <SocialIcon label="zomoto" fgColor= '#ffffff' style={{ height: 45, width: 45,marginRight: '30px' }} url='' /> */}
        <SocialIcon network="whatsapp" fgColor= '#ffffff' style={{ height: 45, width: 45,marginRight: '30px' }} url='http://wa.me/919522277229' />
        
        

        

        </div>
    )
}

export default SocialMediaAbout;