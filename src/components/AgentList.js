import React, { useState } from "react";
import styled from "styled-components";

export default function TeamList(props) {
  const MemberCard = styled.div`
    border: 1px solid white;
    display: flex;
    flex-direction:column;

    background:whitesmoke;
    align-items:center;
    border-radius:10px;
    box-shadow:inset 6px 4px 6px rgba(0,0,0,.2);
    width:33%;
  `;
  const MemberInfo = styled.p`
    
    padding: 10px;
  `;
  const MemberName = styled.h4`
   
    padding: 10px;
  `;
  const MemberIcon = styled.img`
        width:100px;
        margin:1rem;
        border-radius:50%;
  `;

  function addToMemberList(agent) {
    return (
      <MemberCard key={agent.id}>
        <MemberIcon src='https://cmsmith.com/wp-content/uploads/2017/11/team-dummy-image.jpg'/>
        <MemberName>{agent["agent-name"]}</MemberName>
        <MemberInfo>{agent["agent-role"]}</MemberInfo>
        <MemberInfo>{agent["agent-home"]}</MemberInfo>
      </MemberCard>
    );
  }
  return (
    <div className='team-list-wrapper'>
      {props.agentList.map(m => {
        return addToMemberList(m);
      })}
    </div>
  );
}
