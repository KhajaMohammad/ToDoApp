import { useState } from "react";
const AddTask = ({onAdd})=>{
    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)
    //ON SUBMIT
    const onSubmit = (e)=>{
        e.preventDefault();
        if(!text){
            alert('Please Add Task')
            return
        }
        onAdd({text,day,reminder})
        setText('')
        setDay('')
        setReminder(false)
    }
    return <>
    <form className="add-form" onSubmit={onSubmit} >
        <div className="form-control">
            <label>Task</label>
            <input type='text' placeholder="Add Text" value={text} onChange={(e)=>{
                setText(e.target.value)
                
            }}/>
           
        </div>
        <div className="form-control">
            <label>Day And Time</label>
            <input value={day} onChange={(e)=>{
                setDay(e.target.value)
            }} type='text' placeholder="Add Date and Time "/>
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input  type='checkbox'  onChange={(e)=>{
                setReminder(!reminder)
                
            }} checked = {reminder} />

           
        </div>
        <input className="btn btn-block" type='submit' value="Save Task"/>
    </form>
    
    </>

    
}
export default AddTask ;