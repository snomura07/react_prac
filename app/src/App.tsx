import React, {useState} from 'react';
import './App.css';

function App() {
  const [nameArr, setNameArr] = useState<string[]>([]);
  const [input,   setInput]   = useState<string>('');

  const handleSubmit = (e: React.FormEvent)=>{
    e.preventDefault();
    if(input == '') return;
    setNameArr([...nameArr, input]);
    setInput('');
  };

  return (
    <div className="container">
      <h2>Hello! </h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            placeholder='名前を入力してください'
          />
          <button type='submit'> 送信</button>
        </form>
      </div>
      <div className="list">
        {nameArr.map((name, index)=>(
          <p key={index}>{index}. {name}</p>
        ))}
      </div>

    </div>
  );
}

export default App;
