import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import Header from '../../components/Header'
import Product from '../../components/Product'
import ProductsList from '../../components/ProductsList'

function Feed() {
  const [listBurguers, setListBurguers] = useState([])
  const [inputSearch, setInputSearch] = useState('')
  const [listShopping, setListShopping] = useState([])

  const filteredBurgers = listBurguers.filter(burger =>
    burger.name.toLowerCase().includes(inputSearch.toLowerCase()) ||
    burger.category.toLowerCase().includes(inputSearch.toLowerCase())
  )

  useEffect(() => {
    const getBurguers = async () => {
      try {
        const reponse = await api.get('/products')

        setListBurguers(reponse.data)
      } catch (error) {

        console.error(error)

      } finally {

      }
    }

    getBurguers()

  }, [])

  return (
    <>
      <Header setInputSearch={setInputSearch} setListShopping={setListShopping} listShopping={listShopping}/>
      <ProductsList>
        {
          filteredBurgers.map((burguer) => <Product listShopping={listShopping} setListShopping={setListShopping} key={burguer.id} burguer={burguer}></Product>)
        }
      </ProductsList>
    </>

  )
}

export default Feed