import React from "react";
import styled from "styled-components";
import Button from "../../elements/Button";

const DIV = styled.div`
  margin: 0px;
  padding-left: 0px;
  list-style: none;
  counter-reset: counter;
`;

function Card() {
  return (
    <DIV>
      <Button intent="primary" disabled={false} />
    </DIV>
  );
}

export default Card;
