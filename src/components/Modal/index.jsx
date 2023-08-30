import useOutClick from "../../hooks/useOutClick";
import useKeydowm from "../../hooks/useKeydowm";

import { AiOutlineClose } from "react-icons/ai"
import empty from "../../assets/empty.svg"

import { ModalOverlay, ModalWrapper } from "./style"
import { StyledBody, StyledHeading, StyledHeadline } from "../../styles/Typography"

import FormattedPrice from "../FormattedPrice"
import ShoppingList from "../ShopingList"
import ShoppingCard from "../ShoppingCard"

function Modal({ setIsOpen, listShopping, setListShopping }) {
  const modalRef = useOutClick(() => {
    setIsOpen(false)
  })

  const buttonRef = useKeydowm("Escape", (element) => {
    element.click()
  })

  const total = listShopping.reduce((accumulator, burguer) => {
    return accumulator + burguer.price
  }, 0)

  const handleRemoveAll = () => {
    setListShopping([])
  }

  return (
    <ModalOverlay role="dialog">
      <ModalWrapper ref={modalRef}>

        <header>
          <StyledHeading color="white">Carrinho de compras</StyledHeading>
          <button
            onClick={() => setIsOpen(false)}
            ref={buttonRef}
          >
            <AiOutlineClose size={20} color="#ffffff80"></AiOutlineClose>
          </button>
        </header>

        <ShoppingList>
          { total === 0 ? (
            <img src={empty} alt="Lista vazia"/>
          ) : (
            listShopping.map((burguer) => <ShoppingCard setListShopping={setListShopping} key={burguer.id} burguer={burguer}></ShoppingCard>)
          )}
        </ShoppingList>

        <footer>
          <div className="line__container">
            <div className="line"></div>
          </div>

          <div className="value__container">
            <StyledHeadline>Total</StyledHeadline>
            <StyledBody>
              <FormattedPrice price={total} />
            </StyledBody>
          </div>
          
          <button 
            className="remover__button" 
            onClick={handleRemoveAll}
            >Remover Todos
          </button>
        </footer>

      </ModalWrapper>
    </ModalOverlay>
  )
}

export default Modal
