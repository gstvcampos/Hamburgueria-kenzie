import { StyledButtonDefault } from "../../styles/Button"
import { StyledBody600, StyledCaption, StyledHeading } from "../../styles/Typography"
import { StyledLi } from "./style"

import FormattedPrice from "../FormattedPrice"
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

function Product({ burguer, listShopping, setListShopping }) {

  return (
      <StyledLi>
      <ToastContainer />
        <div className="div__img">
          <img src={burguer.img} alt="" />
        </div>
        <div className="div__information">
          <StyledHeading>{burguer.name}</StyledHeading>
          <StyledCaption>{burguer.category}</StyledCaption>
          <StyledBody600><FormattedPrice price={burguer.price} /></StyledBody600>
          <StyledButtonDefault
            onClick={() => {
              const checkCart = listShopping.find(item => item.id === burguer.id)
              if (!checkCart) {
                setListShopping([...listShopping, burguer])
                toast.success("Item adicionado ao carrinho!",{
                  autoClose: 1500,
                  pauseOnHover: false,
                  draggable: false,
                })
              } else {
                toast.error("Item já adicionado ao carrinho!",{
                  autoClose: 1500,
                  pauseOnHover: false,
                  draggable: false,
                })
              }
            }}
          >adicionar
          </StyledButtonDefault>
        </div>

      </StyledLi>
  )
}

export default Product
