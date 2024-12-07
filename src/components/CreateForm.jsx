import { useState } from "react";

function CreateForm({addTodo}) {

  const [content, setContent] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(content)
    setContent('')

  }

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <input
      type="text"
      placeholder="Todoを入力してください" 
      title="入力が完了したら、Enterキーまたは右のボタンを押してtodoを登録する"
      value={content}
      onChange={(e) => {setContent(e.target.value)}}
      />
      <button type="submit">登録</button>
    </form>
  );
}
export default CreateForm;