import './App.css'
import AddTaskForm from './AddTaskForm';
import Task from './Task';


const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  const addTask = (text) => {
    const newTask = {
      id:tasks.length +1,
      text,
      completed: false
    };
    setTasks([...tasks, newTask])
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  const TaskComplete = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return{...task, completed: !task.completed};
      }
    }));
  };
  

  return (
    <>
      <h1>Lista de tareas</h1>
      <AddTaskForm addTask={addTask}/>
      <ul>
        {tasks.map(task => (
          <Task
            Key={task.id}
            task={task}
            deleteTask={deleteTask}
            TaskComplete={TaskComplete}
          />  
        ))};
      </ul>
    </>
  );
};

export default App;
