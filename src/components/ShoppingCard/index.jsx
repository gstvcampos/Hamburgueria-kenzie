import { FaTrash } from "react-icons/fa"
import { StyledHeading } from "../../styles/Typography"
import { StyledLi } from "./style"

function ShoppingCard({ burguer, setListShopping }) {

  const handleRemoveItem = () => {
    setListShopping((prevList) =>
      prevList.filter((item) => item.id !== burguer.id)
    )
  }

  return (
    <StyledLi>
      <div className="div__img">
        <img src={burguer.img} alt="" />
      </div>
        <StyledHeading>{burguer.name}</StyledHeading>
        <a onClick={handleRemoveItem}>
          <FaTrash size={18} color="#BDBDBD"></FaTrash>
        </a>
    </StyledLi>
  )
}

export default ShoppingCard
