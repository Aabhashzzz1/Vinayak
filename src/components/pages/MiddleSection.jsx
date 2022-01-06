import React from 'react';
import {  makeStyles, Typography } from '@material-ui/core';

//components

//import Order from './Order';
import About from './About.jsx';
import Product from './Product.jsx';

const useStyle = makeStyles(theme => ({

    heading: {
        fontSize: '40px',
        alignContent: 'center',
        justifyContent:'center',
        color: '#F9B5AC',        
    },
    hr : {
        //height: '3px',
        border: '1px solid #28536B',
        borderShadow: 'none',
        color:'#000',
        backgroundColor:'#000'
    },
    // Product: {
    //     //height: '2880px',
    //     [theme.breakpoints.down('md')]: {
    //         height: '3200'
    //     },
    //     [theme.breakpoints.down('sm')]: {
    //         height: '3200'
    //     },
    // }
}));


// export default class middleSection extends Component {
const MiddleSection = () => {    
    
    const ProductIcon = "https://img.icons8.com/external-prettycons-lineal-prettycons/30/F9B5AC/external-products-user-interface-vol-3-prettycons-lineal-prettycons.png";
    //const OrderIcon = "https://img.icons8.com/dotty/35/F9B5AC/purchase-order.png";
    


    const classes = useStyle();
        return (
            <>
                <div id="product" style={{height: 2850}}>
                    <Typography className={classes.heading}>&ensp;&ensp;Product <img style={{marginTop: '-8px'}} src={ProductIcon} alt="productIcon" /> </Typography>
                    <Product />
                </div>
                <br />
                <hr className={classes.hr} />
                {/* <div id="order" style={{height: 500}}>
                    <Typography className={classes.heading}>&ensp;&ensp;Order <img style={{marginTop: '-8px'}} src={OrderIcon} alt="orderIcon" /> </Typography>
                    <Order />
                </div> */}
                {/* <br />
                <hr className={classes.hr} /> */}
                <div id="about" style={{height: 800}} >
                    <About />    
                </div>
            </>
        )
}

export default MiddleSection;