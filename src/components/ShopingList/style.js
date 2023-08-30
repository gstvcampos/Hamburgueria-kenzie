import styled from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  
  list-style: none;
  gap: 1.125rem;
  
  width: 100%;
  max-height: 264px;
  overflow: auto;

  padding: 0;
  background-color: white;

  img {
    align-self: center;
    max-width: 40%;
    max-height: 40%;
    width: 100%;
  }
`
