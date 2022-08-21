import propTypes from 'prop-types'
import Button from './Button'
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
const Header = ({onAdd,showAdd})=>{
    const onClick = ()=>{
        onAdd();

    }
    return (
    <header className='header'>
<h1 >Task Tracker</h1>

<Button  color={showAdd?'red':'blue'} text={showAdd ?'close' : 'Add'} onClick ={onClick} startIcon={showAdd?<CloseIcon/> : <AddIcon/>}/>

    </header>)
}
Header.propType={
    title: propTypes.string

}
export default Header;