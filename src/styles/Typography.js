import styled from "styled-components"

export const StyledHeading = styled.h2`
    font-size: 1.125rem;
    font-weight: 700;    

    color: ${props => props.color === 'white' ? 'var(--color-white)' : 'var(--color-grey-600)'};
`

/* <StyledTitle3 className="value" color="primary">{formattedAmount}</StyledTitle3> */

export const StyledHeadline = styled.h3`
    font-size: .875rem;
    font-weight: 600;    
    color: var(--color-grey-600);  
`

export const StyledBody = styled.p`
    font-size: .875rem;
    font-weight: 600;    
    color: var(--color-grey-300);  
`

export const StyledBody600 = styled.p`
    font-size: .875rem;
    font-weight: 600;    
    color: var(--color-primary);  
`

export const StyledCaption = styled.span`
    font-size: .75rem;
    font-weight: 400;    
    color: var(--color-grey-300);  
`