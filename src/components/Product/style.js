import styled from "styled-components";

export const StyledLi = styled.li`
  display: flex;
  flex-direction: column;

  margin: 0 auto;

  border: 2px solid var(--color-grey-100);
  border-radius: 5px;

  :hover {
    border: 2px solid var(--color-primary);
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  .div__img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 150px;
    background-color: var(--color-grey-000);
  }

  .div__information {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 0.5rem;
    padding: 1.25rem;
  }

`
