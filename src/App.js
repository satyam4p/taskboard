
import { useState, useEffect } from 'react';
import './App.css';
import Board from './board/board';

const style={
  'display': 'flex',
  'justifyContent':'center',
  'alignItems': 'center',
  'width':'100%'
}

function App() {

  const [inputData, setInputData] = useState({
    firstName:"",
    lastName:""
  });

  const [constactData, setContacts] = useState([]);

  const handleInput = (event) =>{
    let {name, value} = event.target;
    setInputData(prevInput=>{
      return {
        ...prevInput,
        [name] : value
      }
    })
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    setContacts(prevContacts => {
      return [
        ...prevContacts,
        inputData
      ]
    })
  }
  let contacts =  constactData.map(data=>{
    return(
      <div key={data.firstName + data.lastName}>
      {data.firstName} {data.lastName}
    </div>
    )
    
  });
  return (
    <div style={style}>
      {/* <div>
        <form onSubmit={handleSubmit}>
          <input onChange={handleInput} placeholder='First Name' name="firstName" value={inputData.firstName}/><br/>
          <input onChange={handleInput} placeholder='Last Name' name="lastName" value={inputData.lastName}/><br/>
          <button type="submit">Add Contact</button>
        </form>
      </div>
      {contacts} */}
      <Board/>
    </div>
  );
}

export default App;
