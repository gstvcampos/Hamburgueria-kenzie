import styled from "styled-components"

export const StyledLi = styled.li`
  position: relative;
  display: flex;
  padding: 1.25rem;

  margin: 0 auto;
  gap: 10px;
  width: 100%;


  img {
  max-width: 100%;
  max-height: 100%;
  }

  .div__img {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 83px;
    height: 83px;

    border-radius: .3125rem;
    background-color: var(--color-grey-000);
  }

  a {
    position: absolute;
    right: 0;
    top: 0;
  }
`