import { StyledUl } from './style'

function ProductsList( { children } ) {
    return (
        <StyledUl>
            {children}
        </StyledUl>
    )
}

export default ProductsList