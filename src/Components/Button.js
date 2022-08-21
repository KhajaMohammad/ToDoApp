import PropTypes from 'prop-types'
import Button from '@mui/material/Button'

const Buttons = ({text,color, onClick, startIcon}) => {
    
    return <div>

        <Button startIcon={startIcon} onClick={onClick} variant="contained" style={{backgroundColor:color}} className="btn" >{text}</Button>
    </div>;
}


export default Buttons;