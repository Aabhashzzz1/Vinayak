import React from 'react';
import { makeStyles} from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    icon: {
        color: '#F9B5AC',
        display: 'flex',
        margin: 20,
        //responsive
        overflow: 'overlay',
        [theme.breakpoints.down('md')]: {
            margin: 0
        },
        [theme.breakpoints.down('sm')]: {
            margin: 0
        },
        [theme.breakpoints.down('xs')]: {
            margin: 0
        },
        '& > *': {
            justifyContent: 'center',
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    },

}));


const Category = () => {

    const SnackIcon = "https://img.icons8.com/ios/140/F9B5AC/samosa.png";
    const CakeIcon = "https://img.icons8.com/dotty/140/F9B5Ac/cake.png";
    const CreamrollIcon = "https://img.icons8.com/ios/140/F9B5AC/cinnamon-roll.png";
    const BreadIcon = "https://img.icons8.com/ios/140/F9B5Ac/bread.png";
    const KhariIcon = "https://img.icons8.com/external-photo3ideastudio-lineal-photo3ideastudio/140/F9B5AC/external-snacks-home-office-photo3ideastudio-lineal-photo3ideastudio.png";
    const CookiesIcon = "https://img.icons8.com/ios/140/F9B5Ac/cookies.png";

    const classes = useStyle();
    
    return (
        <>
         <div className={classes.icon}>
                <img src={SnackIcon} alt="samosa" />            
                <img src={CakeIcon} alt="cake" />
                <img src={CreamrollIcon} alt="creamroll" />
                <img src={BreadIcon} alt="bread" />
                <img src={KhariIcon} alt="khari" />
                <img src={CookiesIcon} alt="cookies" />
                </div>
        </>
    )
}

export default Category;