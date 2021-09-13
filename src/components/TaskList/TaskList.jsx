import React from 'react'
import TaskItem from '../TaskItem/TaskItem'
import style from './TaskList.module.scss'
import Button from '../UI/Button/Button';

export default function TaskList({ task, taskDelet }) {
  return (
    <ul className={style.list}>
      {
        task.map((item, index) => (
          <TaskItem key={item.id}>
              <Button>Change</Button>
            {item.title}
            <Button onClick={taskDelet}>Delete</Button>
            </TaskItem>
        ))
      }
    </ul>
  )
}
