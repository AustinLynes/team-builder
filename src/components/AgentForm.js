import React, { useState } from "react";

export default function TeamForm(props) {
  const [txt, setTxt] = useState({
    "agent-name": "",
    "agent-role": "",
    "agent-home": ""
  });
  const handleChange = e => {
    setTxt({ ...txt, [e.target.name]: e.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    var newAgent = {
        ...txt,
        id: Date.now()
    };
    console.log(newAgent);
    props.addMember(newAgent);
    // setTxt({ "agent-name": "", "agent-role": "", "agent-home": "" });
    
  };
  return (
    <form onSubmit={event => handleSubmit(event)}>
      <label htmlFor="member-name" hidden />
      <input
        type="text"
        name="agent-name"
        placeholder="name"
        value={txt["agent-name"]}
        onChange={event => handleChange(event)}
      />
      <label htmlFor="member-role" hidden />
      <input
        type="text"
        name="agent-role"
        placeholder="role"
        value={txt["agent-role"]}
        onChange={event => handleChange(event)}
      />
      <label htmlFor="agent-home" hidden />
      <input
        type="text"
        name="agent-home"
        placeholder="home town"
        value={txt["agent-home"]}
        onChange={event => handleChange(event)}
      />
      <label htmlFor="submit-agent" hidden />
      <button>Submit!</button>
    </form>
  );
}
