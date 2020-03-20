import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form";
import Members from "./components/Members";

const App = () => {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Marissa",
      email: "Marissa.shaffer1@gmail.com",
      role: "Lambda Student"
    }
  ]);

  const addNewMember = member => {
    const newMember = setMembers([...members, member]);
  };

  return(
    <div className="App">
      <h1>Team Builder</h1>
      <Form addNewMember={addNewMember} />
      <Members member={members} />
    </div>
  );
}
export default App;
