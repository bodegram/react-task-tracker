import './Task.css'
import {useState} from 'react'

const Task = () => {
    const task = [
        {
            name: "Meeting at 10pm",
            reminder: true
        },
        {
            name: "Meeting at 11pm",
            reminder: true
        },
        {
            name: "Meeting at 12pm",
            reminder: false
        },
        {
            name: "Meeting at 1pm",
            reminder: true
        }
    ]

    const [tasks, setTasks] = useState(task) 

    const deleteTask = (id) =>{
        console.log("clicked", id)
    }
    return (
           <div>
            <div>
                  <div>{tasks.map((item, index)=> {
                    return <div key={index}  className="task-card">
                        <div className="task-title">{item.name}</div>
                        <div className="task-btn">
                            <button className='task-btn-edit'>Edit</button>
                            <button className='task-btn-delete' onClick={deleteTask(index)}>Delete</button>
                        </div>
                       {task.reminder ?
                       <div className='reminder'>
                           Reminder: On
                       </div>
                       : 
                       <div className='reminder'>
                           Reminder: Off
                       </div>
                       }
                    </div>
                  })}</div>
            </div>
            
           </div>
    )
}

export default Task