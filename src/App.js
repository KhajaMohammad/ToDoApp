import { useState } from "react";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask"
function App() {
  //Toffle Reminder
  const toggleReminder =(id)=>{
    setTasks(tasks.map((task)=>
      
      task.id===id?{...task,reminder:  !task.reminder}:task
    
    )
    )
  
}
//show form
const [showAddTask,setShowAddTask] = useState(false);
  //delete function
  const deleteTask = (id)=>{
    console.log(id)
   setTasks(tasks.filter((task)=>task.id !== id))
  }
  const [tasks,setTasks] = useState([
    {
        id:1,
        text:'Doctor Appointment',
        day:'feb 5 at 2:30',
        reminder : true,
    },
    {
        id:2,
        text:'School Appointment',
        day:'feb 6 at 2:30',
        reminder : true,
    },
    {
        id:3,
        text:'Foor Shopping ',
        day:'feb 5 at 2:30',
        reminder : false,
    }
]);
//AddTast 
const addTask = (newtask)=>{
  const id=Math.floor(Math.random()*10000+1)
  const newTask={id,...newtask}
  setTasks([...tasks,newTask])
}
  return (
    <div className="container">
      <Header showAdd={showAddTask} onAdd={()=>{setShowAddTask(!showAddTask)}} /> 
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length>0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
: 'No Tasks To Show'}
    </div>
  );
}

export default App;