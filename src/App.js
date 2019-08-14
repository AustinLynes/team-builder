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
        <TeamForm addMember={addMember}/>
        <TeamList agentList={agents}/>
    </div>
  );
}

export default App;
