'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<{ id: number; text: string }[]>([]);

  // Adicionar tarefa
  const addTask = () => {
    if (task.trim() === '') return;
    const newTask = {
      id: Date.now(),
      text: task,
    };
    setTasks([...tasks, newTask]);
    setTask('');
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Lista de Tarefas</h1>

      <div className={styles.inputGroup}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className={styles.input}
        />
        <button onClick={addTask} className={styles.button}>
          Adicionar
        </button>
      </div>

      <ul className={styles.taskList}>
        {tasks.map((t) => (
          <li
            key={t.id}
            className={styles.taskItem}
          >
            {t.text}
          </li>
        ))}
      </ul>
    </main>
  );
}
