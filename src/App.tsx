import { useState } from "react";

function App() {
  const [list, setList] = useState(['Julia','Danilo','Clara']);

  function addToList() {
    setList(state => [...state, 'Novo']);
  }

  return (
    <>
      <button onClick={addToList}>Adicionar</button>
      <ul>
        {list.map(item => <li key={item}>{item}</li>)}
      </ul>
    </>

  )
};

export default App
