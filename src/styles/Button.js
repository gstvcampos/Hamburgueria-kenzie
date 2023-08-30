import styled from "styled-components"

export const StyledButtonDefault = styled.button`
    font-size: 1rem;
    font-weight: 600;

    padding: 0.6rem 1.25rem;

    color: var(--color-white);
    background-color: var(--color-grey-100);
    border: 1px solid var(--color-grey-100);
    border-radius: 0.5rem;

    :hover {
      background-color: var(--color-primary);
      border: 1px solid var(--color-primary);
    }
`
export const StyledButtonMedium = styled.button`
    font-size: 1rem;
    font-weight: 600;

    padding: 1.25rem;
    
    color: var(--color-grey-300);
    background-color: var(--color-grey-100);
    border: 1px solid var(--color-grey-100);   
    border-radius: 0.5rem;

    :hover {
      background-color: var(--color-primary);
      border-color: var(--color-primary);
    }
`