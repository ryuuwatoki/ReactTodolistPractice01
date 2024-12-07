import { MdDeleteForever } from "react-icons/md";
import { LiaEdit } from "react-icons/lia";
import Editform from "./Editform";

function Todo({ todo, deleteTodo, toggleCompleted, toggleIsEditing, editTodo }) {
  return todo.isEditing ? (
    <Editform 
      todo={todo}
      editTodo={editTodo}/>
  ) : (
    <div className={`todo ${todo.isCompleted ? "completed" : ""}`}>
      <p
        className="p-tag"
        title="クリック後、完了に変わります。"
        onClick={() => {
          toggleCompleted(todo.id);
        }}
      >
        {todo.content}
      </p>
      <div>
        <LiaEdit 
          title="クリック後、todoを編集する"
          onClick={()=> {toggleIsEditing(todo.id)}} 
          className="edit-icon" />
        <MdDeleteForever
          title="クリックして削除する"
          className="delete-icon"
          onClick={() => {
            deleteTodo(todo.id);
          }}
        />
      </div>
    </div>
  );
}
export default Todo;
