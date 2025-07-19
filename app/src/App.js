import {useState} from 'react';

function App() {
  const [toDos, setToDos]   = useState([]);
  const [input,  setInput]  = useState('');

  const handleAdd = ()=>{
    if(input.trim() === '') return;
    if(toDos.length > 0){
      var lastElm = toDos[toDos.length - 1];
      var lastId  = lastElm.id;
    }
    else{
      var lastId = 0;
    }

    const toDoSt = {
      'id'    :lastId + 1,
      'title' :input,
      'isDone':false
    };
    setToDos([...toDos, toDoSt]);
    setInput('');
  };

  const handleDone = (index)=>{
    setToDos(toDos.map((todo,i)=> i===index ? {...todo, 'isDone':true}:todo));
  };

  return (
    <div>
      <input
        type='text'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        placeholder='ToDoを入力'
      >
      </input>
      <button onClick={()=>handleAdd()}> 追加 </button>

      <ul>
        {toDos.map((todo, index) => (
          <div key={index}>
            {!todo.isDone && (
              <button onClick={() => handleDone(index)}> 実施</button>
            )}
            <span style={{textDecoration:todo.isDone ? 'line-through':'none'}}>
                {todo.id}. {todo.title}
            </span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default App;
