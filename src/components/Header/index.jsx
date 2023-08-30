import { useState } from "react"

import { StyledInput, StyledFormContainer } from "../../styles/Input"
import { StyledContainer } from "../../styles/Container"
import { StyledHeader } from "./style"
import { FaShoppingCart } from "react-icons/fa"

import logo from "../../assets/logo.svg"
import search from "../../assets/search.svg"

import Modal from "../Modal"

function Header({ setInputSearch, listShopping, setListShopping }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => {
    setIsOpen(true)
  }


  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const items = listShopping.length


  return (
    <StyledHeader>
      <StyledContainer className="container">
        <div className="flexbox">
          <img src={logo} alt="logo Burguer Kenzie" />
        </div>
        <StyledFormContainer onSubmit={handleSubmit}>

          <a onClick={handleOpenModal}>
            <span>{items}</span>
            <FaShoppingCart color="#BDBDBD" size={30}></FaShoppingCart>
          </a>

          {isOpen ? 
            <Modal setIsOpen={setIsOpen} listShopping={listShopping} setListShopping={setListShopping}></Modal> 
            : null}

          <StyledInput
            type="text"
            onChange={(event) => setInputSearch(event.target.value)}
          />
          <button type="submit"><img src={search} alt="botão de busca" /></button>
        </StyledFormContainer>
      </StyledContainer>
    </StyledHeader>
  )
}

export default Header
