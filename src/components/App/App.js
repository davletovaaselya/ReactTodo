import { useState } from 'react'
import Header from '../Header/Header';
import TaskList from '../TaskList/TaskList';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

import style from './App.module.scss'

function App() {
  const [inpValue, setInpValue] = useState('')
  const [task, setTassk] = useState([])

  function changeMainInput (event) {
    setInpValue(event)
  }

  function saveDataMain () {
    const newObj = {
      id: Date.now(),
      title: inpValue,
      status: false
    }
    setTassk([...task, newObj])
  }

  function taskDelet (){
    console.log('del');
  }

  

 return (
   <>
    <Header />
    <div className={style.container}>
      <div>
        <Input 
          value={inpValue}
          setInpValue={setInpValue}
        />
        <Button
          saveDataMain={saveDataMain}
        >
          Сохранить
        </Button>
      </div>
      <TaskList
       task={task}
       taskDelet={taskDelet}
      />
    </div>
   </>
 )
}

export default App;
