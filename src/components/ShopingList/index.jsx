import { StyledUl } from './style'

function ShoppingList( { children } ) {
    return (
        <StyledUl>
            {children}
        </StyledUl>
    )
}

export default ShoppingList