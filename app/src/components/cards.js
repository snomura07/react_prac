
import { useState } from 'react';
import '../App.css';

function App(){
  const cards = [
    {title: 'お知らせ', content: 'React学習中'},
    {title: '進捗', content: 'ToDOアプリ作成中'},
    {title: '予定', content: 'propsと分割へ'},
  ];
  const [cnt, setCnt] = useState(0);

  const handleCountUp = ()=>{
    setCnt(cnt+1);
  };

  return (
    <div>
      <div className='card-container-top'>
        {cards.map((card, index) =>(
          <div className='card' key={index}>
            <h2>{card.title}  </h2>
            <p> {card.content}</p>
          </div>
        ))}
      </div>
      <div className='card-container-bottom'>
        <div className='left-pain'>
          <div className='card'>
            <p> ggg </p>
            <p> ggg </p>
            <p> ggg </p>
          </div>
        </div>
        <div className='right-pain'>
          <div className='card'>
            <p> hhh </p>
            <p> hhh </p>
            <p> hhh </p>
          </div>
          <div className='card'>
            <p> hhh </p>
            <p> hhh </p>
            <p> hhh </p>
          </div>
          <button className='card-button' onClick={()=>{handleCountUp()}}> ボタン</button>
          <button> button</button>
          <p> {cnt} </p>
        </div>
      </div>
    </div>
  );
};

export default App;
