import { useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";

function TodoWrapper() {
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      content: "HTMLを学ぶ",
      isCompleted: false,
      isEditing: false,
    },
    {
      id: Math.random(),
      content: "CSSを学ぶ",
      isCompleted: false,
      isEditing: false,
    },
    {
      id: Math.random(),
      content: "JavaScriptを学ぶ",
      isCompleted: false,
      isEditing: false,
    },
    {
      id: Math.random(),
      content: "Reactを学ぶ",
      isCompleted: false,
      isEditing: false,
    },
  ]);

  const addTodo = (content) => {
    setTodos([
      ...todos,
      {
        id: Math.random(),
        content: content,
        isCompleted: false,
        isEditing: false,
      },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      })
    );
  };

  const toggleIsEditing = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo;
      })
    );
  };

  const editTodo = (id, newContent) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, content: newContent, isEditing: false }
          : todo;
      })
    );
  };

  const incompleteCount = todos.filter((todo) => !todo.isCompleted).length;

  return (
    <div className="wrapper">
      <h1>ToDoリスト</h1>

      <CreateForm addTodo={addTodo} />

      <h3 className="h3">リスト</h3>

      <hr className="divider-line" />

      {todos.map((todo) => {
        return (
          <Todo
            toggleCompleted={toggleCompleted}
            toggleIsEditing={toggleIsEditing}
            editTodo={editTodo}
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
          />
        );
      })}

      {todos.length > 0 && (
        <p className="incomplete-count">
          {incompleteCount > 0
            ? `残り件数: ${incompleteCount}`
            : "すべて完了しました"}
        </p>
      )}

    </div>
  );
}
export default TodoWrapper;
