import { React , useState } from 'react';
import { Button, makeStyles, Typography, Dialog, DialogContent, AppBar, IconButton, Toolbar,} from '@material-ui/core';
//import { Routes, Route,BrowserRouter as Router } from 'react-router-dom';
//import {useRoutes} from 'hookrouter';
//import { Link as Link2 } from 'react-router-dom';
import { Link as Link2 } from 'react-scroll';
import CategoryOutinedIcon from '@material-ui/icons/CategoryOutlined';
import { Close} from '@material-ui/icons'
//import clsx from 'clsx';

//styling
import 'bootstrap/dist/css/bootstrap.min.css'; 

//components
import Category from './Category';
import MiddleSection from '../pages/MiddleSection';
import Login from '../login/Login.jsx'



//images
import Cake from '../../images/cookies2.jpg';
import Logo from '../../images/logo.png';


const useStyle = makeStyles(theme => ({
    cake : {
        backgroundImage: `url(${Cake})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: '0 100%', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        height: '82vh',
        [theme.breakpoints.down('md')]: {
            objectFit: 'cover',
            width: '100%'
        },
    },
    containerfluid : {
        display: 'flex',
        
        //flexWrap: 'wrap'  
    },
    search : {
        //background: '#F69865',
        display: 'flex',
        marginTop: 50,
        marginLeft: '13%',
        width: '55vh',
        height: '6.5vh',
        alignContent: 'center',
        opacity: '0.8',
    },
    searchBtn: {
        
        backgroundColor: "#fff",
        "&:hover":{
            backgroundColor: '#F9B5AC',
            color: '#FFFFFF'
        },
    },
    navbar: {
        listStyle: 'none',
        backgroundColor: 'transparent',
        borderRadius: '2',
        display: 'flex',
        marginTop: 52,
        justifyContent: 'center',
        alignContent: 'center',
        "& > *": { 
            
            marginLeft: 20,
            marginRight: 'auto', 
            
        },
    },
    logo : {
        margin: '10px 30px',  
    },
    navBtn: {
        backgroundColor: "#FFFFFF",
        opacity: '0.8',
        "&:hover":{
            backgroundColor: '#F9B5AC',
            color: '#FFFFFF'
        },
    },
    heading: {
        fontSize: '40px',
        alignContent: 'center',
        justifyContent:'center',
        color: '#F9B5AC', 
        
    },
    hr : {
        //height:'3px',
        border: '1px solid #28536B',
        borderShadow: 'none',
        color:'#000',
        backgroundColor:'#000'
    },
    menuBtn: {
        color: '#FFFFFF',
        opacity: '0.8',
        "&:hover":{
            color: '#F9B5AC',
            
        },
    },
    list: {
        width: 150
    }
    
}));

// const routes = {
//     '/login': () => <Login />,
// }

const Header = () => {
    const [open, setOpen] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const [openDraw, setOpenDraw] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    
    const handleClickOpenCart = () => {
        setOpenCart(true);
    };

    const handleCloseCart = () => {
        setOpenCart(false);
    };

    const handleOpenDraw = () => {
        setOpenDraw(true);
    };
    
    const handleCloseDraw = () => {
        setOpenDraw(false);
    };
    
    // const List = () => (
        

    //     <Box className={classes.list}>
    //         <List>
    //             <ListItem >
                    
    //             </ListItem>
    //         </List>
    //     </Box>
    //     )

    const classes = useStyle();
    //const routeResult = useRoutes(routes);
    
        return (
            <> 
            
                                
                <nav class="navbar navbar-expand-lg navbar-light bg-light" className={classes.cake}>
                    <div class="container-fluid" className={classes.containerfluid}>
                        <img src={Logo} alt="vinayak" width="115" height="115" className={classes.logo}/>
                        
                        {/* <IconButton
                            
                            className={classes.menuBtn}
                            onClick={handleOpenDraw}
                        >
                            <Menu />
                        </IconButton> */}

                        {/* <Drawer open={openDraw} onClick={handleCloseDraw}>
                            {List()}
                        </Drawer> */}
                        <form class="d-flex" className={classes.search}>
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <Button className={classes.searchBtn} variant="contained">Search</Button>
                        </form>
                                
                            {/* <Router> */}
                        <ul className={classes.navbar}>
                            <li><Link2 style={{textDecoration:'none'}} activeClass="active" spy={true} smooth={true} to={"/"}><Button className={classes.navBtn} variant="contained">Home</Button></Link2></li>
                            <li><Link2 style={{textDecoration:'none'}} spy={true} smooth={true} to="product"><Button className={classes.navBtn} variant="contained">Product</Button></Link2></li>
                            {/* <li><Link style={{textDecoration:'none'}} spy={true} smooth={true} to="order" ><Button className={classes.navBtn} variant="contained">Order</Button></Link></li> */}
                            <li><Link2 style={{textDecoration:'none'}} spy={true} smooth={true} to="about"><Button className={classes.navBtn} variant="contained">About</Button></Link2></li>
                            <li><Link2 style={{textDecoration:'none'}} ><Button className={classes.navBtn} variant="contained" onClick={handleClickOpenCart}>Cart</Button></Link2></li>     
                            <li><Link2 style={{textDecoration:'none'}}  ><Button className={classes.navBtn} variant="contained" onClick={handleOpen} >Login</Button></Link2></li>
                            <Dialog open={openCart} onClose={handleCloseCart} fullScreen>
                                
                                <DialogContent >
                                <AppBar sx={{ position: 'relative' }} style={{background: '#F9B5AC'}}>
                                    <Toolbar >
                                        <IconButton
                                        edge="start"
                                        color="inherit"
                                        onClick={handleCloseCart}
                                        aria-label="close"
                                        >
                                          <Close />
                                        </IconButton>
                                    </Toolbar>
                                </AppBar>
                                    <br />
                                    <br /> 
                                    <div style={{textAlign: 'center',marginTop: '18%'}}>
                                    <h1 style={{weight: 1000}}>CART</h1>
                                    <Typography>COMING SOON</Typography>

                                    </div>
                                    
                                </DialogContent>
                            </Dialog>
                            <Dialog open={open} onClose={handleClose} fullScreen>
                                
                                <DialogContent >
                                <AppBar sx={{ position: 'relative' }} style={{background: '#F9B5AC'}}>
                                    <Toolbar >
                                        <IconButton
                                        edge="start"
                                        color="inherit"
                                        onClick={handleClose}
                                        aria-label="close"
                                        >
                                          <Close />
                                        </IconButton>
                                    </Toolbar>
                                </AppBar>
                                    <Login open={open} setOpen={setOpen} />
                                    
                                </DialogContent>
                            </Dialog>
                            
                        </ul>
                            {/* <Routes>
                            <Route exact path={'/login'} element={<Login />} />
                        </Routes>
                            </Router>        */}
                        
                            
                    </div>
                    
                </nav>
                
                <br />
                <hr className={classes.hr} />
                <Typography className={classes.heading}>&ensp;&ensp;Category<CategoryOutinedIcon style={{fontSize: '40px'}} /> </Typography>
                <Category />
                <br />
                <hr className={classes.hr} />
                <MiddleSection />
                <br />
                <hr className={classes.hr} />
            
            </>
        );
}

export default Header;