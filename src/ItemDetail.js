import React, {useState, useEffect} from 'react'

const ItemDetail = ({ match }) => {

  useEffect(() => {
    fetchItem()
  })

  const [item, setItem] = useState(0)

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://jsonplaceholder.typicode.com/todos/${match.params.id}`)
    const item = await fetchItem.json()

    setItem(item)
  }

  return (
    <div>
      <h1>{item.id}</h1>
    </div>
  )
}

export default ItemDetail
