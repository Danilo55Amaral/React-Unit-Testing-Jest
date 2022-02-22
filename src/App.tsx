import { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState('');
  const [list, setList] = useState(['Julia','Danilo','Clara']);

  function addToList() {
    setList(state => [...state, newItem]);
  };

  return (
    <>
      <input placeholder="Novo item" value={newItem} onChange={e => setNewItem(e.target.value)}></input>
      <button onClick={addToList}>Adicionar</button>
      <ul>
        {list.map(item => <li key={item}>{item}</li>)}
      </ul>
    </>
  )
};

export default App
