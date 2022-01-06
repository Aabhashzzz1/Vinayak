import { React } from 'react'
import {Card} from 'react-bootstrap';
import { makeStyles} from '@material-ui/core';
import clsx from 'clsx';

//images
import CardCake from '../../images/cardCake.jpg';
import CardCookies from '../../images/cardCookies.jpg';
import CardBread from '../../images/cardBread.jpg';
import CardCreamroll from '../../images/cardCreamroll.jpg';
import CardCupcakes from '../../images/cardCupcakes.jpg';
import CardBurgerBun from '../../images/cardBurgerBun.jpg';

//component
import ToggleCart from './ToggleCart';

const useStyles = makeStyles(theme => ({
    head: {
        display: 'flex',
        flexWrap: 'wrap',
        //overflowX: 'auto'
        
    },
    card: {
        height: '150px',
        width: '17rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        // marginBottom: '3%',
        alignContent: 'center',
        transition: 'all 2s ease',
        WebkitTransition: 'all 2s ease',
        
        // [theme.breakpoints.down('md')]: {
        //     // content: '\a'    
        //     // marginBottom: '30%',
        //     // marginTop: '10%',
        //     lineBreak: '',
        //     // whiteSpace: 'pre'
        // },
        '&:hover': {
            marginBottom: '3%',
            height: '156px',
            width: '19rem'
        },
        [theme.breakpoints.down('sm')]: {
            // lineBreak: ''
            marginBlockEnd: '65%',
        //     transition: 'all 2s ease',
        // WebkitTransition: 'all 2s ease', 
        '&:hover': {
            marginBottom: '75%',
            height: '120px',
            width: '19rem'
        }   
        },
        
        
    },
    space: {
        marginTop: '25%',
        
    }
}));

const Order = () => {
    
    

    const classes = useStyles();
    return (
        <>
            <div className={classes.head}>
                    
                <Card className={classes.card} style={{}}>
                    <Card.Img variant="top" src={CardCake} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                        <ToggleCart />
                        {/* <Button variant="primary" onClick={() => setToggle(toggle)}>Add to cart</Button>
                        <Button variant="success" onClick={() => setToggle(!toggle)}>Added to cart</Button>                  */}
                    </Card.Body>
                </Card>
                
                
                <Card className={classes.card}>
                    <Card.Img variant="top" src={CardCake} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                        
                        <ToggleCart />
                    </Card.Body>
                </Card>

                <Card className={classes.card}>
                    <Card.Img variant="top" src={CardCake} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                        <ToggleCart />
                    </Card.Body>
                </Card>
                
                <Card className={classes.card}>
                    <Card.Img variant="top" src={CardCake} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                        <ToggleCart />
                    </Card.Body>
                </Card>
                
            </div>

            <div className={clsx(classes.head,classes.space)}>
                <Card className={classes.card}>
                    <Card.Img variant="top" src={CardCookies} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                        <ToggleCart />
                    </Card.Body>
                </Card>

                <Card className={classes.card}>
                    <Card.Img variant="top" src={CardCookies} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                        <ToggleCart />
                    </Card.Body>
                </Card>

                <Card className={classes.card}>
                    <Card.Img variant="top" src={CardCookies} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                        <ToggleCart />
                    </Card.Body>
                </Card>

                <Card className={classes.card}>
                    <Card.Img variant="top" src={CardCookies} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                        <ToggleCart />
                    </Card.Body>
                </Card>
            </div>

            <div className={clsx(classes.head,classes.space)}>
                <Card className={classes.card}>
                    <Card.Img variant="top" src={CardBread} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                        <ToggleCart />
                    </Card.Body>
                </Card>

                <Card className={classes.card}>
                    <Card.Img variant="top" src={CardBread} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                        <ToggleCart />
                    </Card.Body>
                </Card>

                <Card className={classes.card}>
                    <Card.Img variant="top" src={CardBread} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                        <ToggleCart />
                    </Card.Body>
                </Card>

                <Card className={classes.card}>
                    <Card.Img variant="top" src={CardBread} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                        <ToggleCart />
                    </Card.Body>
                </Card>
            </div>

            <div className={clsx(classes.head,classes.space)}>
                <Card className={classes.card}>
                    <Card.Img variant="top" src={CardCreamroll} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                        <ToggleCart />
                    </Card.Body>
                </Card>

                <Card className={classes.card}>
                    <Card.Img variant="top" src={CardCreamroll} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                        <ToggleCart />
                    </Card.Body>
                </Card>

                <Card className={classes.card}>
                    <Card.Img variant="top" src={CardCreamroll} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                        <ToggleCart />
                    </Card.Body>
                </Card>

                <Card className={classes.card}>
                    <Card.Img variant="top" src={CardCreamroll} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                        <ToggleCart />
                    </Card.Body>
                </Card>
            </div>

            <div className={clsx(classes.head,classes.space)}>
                <Card className={classes.card}>
                    <Card.Img variant="top" src={CardCupcakes} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                        <ToggleCart />
                    </Card.Body>
                </Card>

                <Card className={classes.card}>
                    <Card.Img variant="top" src={CardCupcakes} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                        <ToggleCart />
                    </Card.Body>
                </Card>

                <Card className={classes.card}>
                    <Card.Img variant="top" src={CardCupcakes} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                        <ToggleCart />
                    </Card.Body>
                </Card>

                <Card className={classes.card}>
                    <Card.Img variant="top" src={CardCupcakes} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                        <ToggleCart />
                    </Card.Body>
                </Card>
            </div>

            <div className={clsx(classes.head,classes.space)}>
                <Card className={classes.card}>
                    <Card.Img variant="top" src={CardBurgerBun} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                        <ToggleCart />
                    </Card.Body>
                </Card>

                <Card className={classes.card}>
                    <Card.Img variant="top" src={CardBurgerBun} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                        <ToggleCart />
                    </Card.Body>
                </Card>

                <Card className={classes.card}>
                    <Card.Img variant="top" src={CardBurgerBun} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                        <ToggleCart />
                    </Card.Body>
                </Card>

                <Card className={classes.card}>
                    <Card.Img variant="top" src={CardBurgerBun} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                        <ToggleCart />
                    </Card.Body>
                </Card>
            </div>

            
        </>

        
    )
}


export default Order;