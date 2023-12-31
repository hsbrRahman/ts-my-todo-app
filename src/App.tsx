import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { MantineProvider } from "@mantine/core";
import HeaderShell from "./HeaderShell";
export interface Task {
  task: string;
  id: string;
  completed: boolean;
  time: Date;
}
export default function App(): JSX.Element {
  const id: string = uuidv4();
  const [todos, setTodos] = useState<Task[]>([]);
  type idFunc = (id: string) => void;

  const removeTodo: idFunc = (id) => {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const addTodo = (value: string): void => {
    const found = todos.find((todo) => todo.task === value);
    if (!found) {
      const todo: Task = {
        task: value,
        id: id,
        completed: false,
        time: new Date(),
      };
      const newTodos: Task[] = [todo, ...todos];
      setTodos(newTodos);
    }
  };

  const handleToggle: idFunc = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
              time: new Date(),
            }
          : todo
      )
    );
  };
  const editTodo = (id: string, value: string) => {
    if (value) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, task: value, time: new Date() } : todo
        )
      );
    }
  };

  return (
    <MantineProvider
      theme={{ colorScheme: "light" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <HeaderShell
        addTodo={addTodo}
        todos={todos}
        removeTodo={removeTodo}
        editTodo={editTodo}
        handleToggle={handleToggle}
      />
    </MantineProvider>
  );
}
