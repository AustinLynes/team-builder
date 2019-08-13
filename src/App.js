import React,{useState} from "react";
import "./App.css";


import Data from "./Data";
import TeamList from './components/AgentList'
import TeamForm from "./components/AgentForm";

function App() {
  const [agents, setAgents] = useState(Data);
  
  const addMember = agent =>{
    setAgents([...agents, agent])
  };

  return (
    <div className="App">
      <header className="App-header">
        <TeamForm addMember={addMember}/>
        <TeamList agentList={agents}/>
      </header>
    </div>
  );
}

export default App;
