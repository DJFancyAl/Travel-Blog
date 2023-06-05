import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function GrowButton({ children, variant, type, start = '150px', end = '200px', length = '0.4' }) {
    const [hovered, setHovered] = useState(false)

    const style = {
        transition: `${length}s`,
        width: !hovered ? start : end,
    }

    return (
        <Button style={style} variant={variant} type={type} onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)}>
            {children}
        </Button>
    )
}

export default GrowButton