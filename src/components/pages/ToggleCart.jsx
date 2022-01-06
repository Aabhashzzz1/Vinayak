import { React , useState } from 'react'
import {Button} from 'react-bootstrap';
const ToggleCart = () => {
    const [toggle, setToggle] = useState(true);
    return (
        toggle ? <Button variant="primary" onClick={() => setToggle(!toggle)}>Add to cart</Button> : <Button variant="success" onClick={() => setToggle(!toggle)}>Added to cart</Button>                 

    )
}

export default ToggleCart;

