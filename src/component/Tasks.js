import './Tasks.css'
import Task from './Task'

const Tasks = () => {
    return (
        <section className="py-5">
            <div>
                <div className="card">
                     <div className="container">
                     <div className='task-title'>
                       <h5>TASKS</h5>
                     </div>
                     <Task/>
                     </div>
                </div>
            </div>
        </section>
    )
}

export default Tasks