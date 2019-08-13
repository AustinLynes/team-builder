import React, { useState } from "react";
import styled from "styled-components";

export default function TeamList(props) {
  const MemberCard = styled.div`
    border: 1px solid white;
    display: flex;
  `;
  const MemberInfo = styled.p`
    width: 30%;
    padding: 10px;
  `;

  function addToMemberList(agent) {
    return (
      <MemberCard key={agent.id}>
        <MemberInfo>{agent["agent-name"]}</MemberInfo>
        <MemberInfo>{agent["agent-role"]}</MemberInfo>
        <MemberInfo>{agent["agent-home"]}</MemberInfo>
      </MemberCard>
    );
  }
  return (
    <div>
      {props.agentList.map(m => {
        return addToMemberList(m);
      })}
    </div>
  );
}
