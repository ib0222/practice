import React from 'react'

const AdminTableRow = ({item,setProductToEdit,setProductToDelete}) => {
  return (
    <div>
        <li key={item.id} className="p-4 flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 rounded-lg object-contain"
              />
              <div className="flex-1">
                <div className="font-bold text-lg">{item.title}</div>
                <div className="text-gray-700">Price: ${item.price}</div>
                <div className="text-gray-700">Category: {item.category}</div>
                <div className="text-gray-700">
                  Description: {item.description}
                </div>
              </div>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 ease-in-out duration-200  focus:outline-none"
                onClick={() => setProductToDelete(item.id)}
              >
                Delete
              </button>
              <button
                className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 ease-in-out duration-200 focus:outline-none"
                onClick={() => setProductToEdit()}
              >
                Edit
              </button>
            </li>
    </div>
  )
}

export default AdminTableRow