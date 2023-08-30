import styled from "styled-components"

export const StyledFormContainer = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline: 0.6rem;

  button {
    position: absolute;
    border: none;
    right: 1rem;
  }
`;

export const StyledInput = styled.input`
  font-size: 1rem;
  font-weight: 400;
  padding: 15px;

  color: var(--color-grey-100);
  background-color: var(--color-white);
  border: 2px solid var(--color-grey-100);
  border-radius: 0.5rem;

  :focus {
    color: var(--color-grey-300);
    border-color: var(--color-grey-600);
  }
`
