import styled from "styled-components";

export const StyledHeader = styled.header`
  max-width: 100vw;
  background-color: var(--color-grey-000);



  @media screen and (max-width: 723px){
    .container {
      justify-content: center;
      align-items: center;
    }
  }

  div > .flexbox {
    height: 90px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    padding-right: 200px;
  }

  button {
    background-color: transparent;

    :hover {
      filter: grayscale(100%) sepia(100%) hue-rotate(113deg);
    }
  }

  a {
    cursor: pointer;
    position: relative;

    display: flex;
    align-items: center;

    height: 60px;
    width: 60px;
    padding-left: 1rem;

    margin-right: 1rem;
  }

  a > span {
    position: absolute;
    right: 0;
    top: 0;

    font-size: .875rem;
    font-weight: 900;

    padding: .3125rem;
    border-radius: .4375rem;

    color: var(--color-white);
    background-color: var(--color-primary);
  }
`
