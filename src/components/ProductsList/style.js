import styled from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  
  list-style: none;
  gap: 2rem;
  
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;

  @media screen and (max-width: 450px){
    overflow-x: auto;
    flex-wrap: nowrap;
    white-space: nowrap;
  }
`
