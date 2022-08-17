import propTypes from 'prop-types'
import Button from './Button'
const Header = ({onAdd,showAdd})=>{
    const onClick = ()=>{
        onAdd();

    }
    return (
    <header className='header'>
<h1 >Task Tracker</h1>

<Button  color={showAdd?'red':'green'} text={showAdd ?'close' : 'Add'} onClick ={onClick}/>

    </header>)
}
Header.propType={
    title: propTypes.string

}
export default Header;