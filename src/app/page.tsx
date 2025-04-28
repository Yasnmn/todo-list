'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<{ id: number; text: string; completed: boolean }[]>([]);

  // adicionar tarefa
  const addTask = () => {
    if (task.trim() === '') return;
    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTask('');
  };

  // tarefa concluída ou não concluída
  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // Remover tarefa
  const removeTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Lista de Tarefas</h1>

      <div className={styles.inputGroup}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Digite uma tarefa"
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
            className={`${styles.taskItem} ${t.completed ? styles.completed : ''}`}
          >
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleTask(t.id)}
              className={styles.checkbox}
            />
            {t.text}
            <button
              onClick={() => removeTask(t.id)}
              className={styles.deleteButton}
            >
              {/* SVG da lixeira */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 6h18M9 6v12h6V6z" />
                <path d="M19 6l-1 14H6L5 6h14z" />
                <path d="M10 10h4" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
