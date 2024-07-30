import React, { useContext } from "react"
import { CardContext } from "../../../context/CardContext"
import Card from "../../../Layouts/Client/Card"
const Favorites = () => {
  const { favorites, setFavorites } = useContext(CardContext)

  if (favorites.length === 0) {
    return <div className="flex justify-center items-center h-screen -mt-20 text-2xl text-neutral-600 font-semibold">No favorite products</div>
  }

  return (
    <div>
      <h1 className="text-center text-4xl my-6 font-semibold">Favorite products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-20 gap-10 my-4 ">
      {favorites.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
        />
      ))}
    </div>
    </div>
  )
}

export default Favorites