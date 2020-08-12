import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Shop = () => {

  useEffect(() => {
    fetchItems()
  }, [])

  const [items, setItems] = useState([])

  const fetchItems = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')

    const items = await data.json()

    setItems(items)
  }

  return (
    <div>
      <h1>Shop</h1>
      {items.map((item, index) => (
        <h2 key={index}><Link to={`/shop/${item.id}`}>{item.title}</Link></h2>
      ))}
    </div>
  )
}

export default Shop
