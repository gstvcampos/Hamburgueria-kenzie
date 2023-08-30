import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;

  
  max-width: 500px;
  min-width: 375px;
  transform: translate(-50%, -50%);

  header{
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 100%;
    padding: .8125rem 1.375rem;
    border-radius: 5px 5px 0px 0px;

    background-color: var(--color-primary);
  }

  footer {
    padding: 0;
    width: 100%;
    height: 150px;
    background-color: white;
  }

  .line__container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding-top: 18px;
    padding-bottom: 15px;
  }

  .line {
    background-color: var(--color-grey-100);
    height: 2px;
    width: 90%;
  }
  
  .value__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 1.5625rem;
    margin-bottom: 1.25rem;
  }

  .remover__button {
    font-size: 1rem;
    font-weight: 600;

    padding: 1.25rem;

    width: 90%;
    margin: 0 auto;
    
    color: var(--color-grey-300);
    background-color: var(--color-grey-100);
    border: 1px solid var(--color-grey-100);   
    border-radius: 0.5rem;

    :hover {
      color: var(--color-white);
      background-color: var(--color-primary);
      border-color: var(--color-primary);
    }
  }
`
