import { useState } from "react";

function Editform({todo, editTodo}){
  const [content, setContent] = useState(todo.content);
  const handleSubmit = (e) => {
    e.preventDefault()
    editTodo(todo.id, content)
  }
  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <input
      type="text"
      placeholder="Todoを追加" 
      title="入力が完了したら、Enterキーまたは右のボタンを押してtodoを更新する"
      value={content}
      onChange={(e) => {setContent(e.target.value)}}
      />
      <button type="submit">更新</button>
    </form>
  );
}

export default Editform;