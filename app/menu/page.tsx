'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const menuCategories = [
  {
    name: 'Breakfast',
    items: [
      { name: 'Caribbean Breakfast Platter', price: '$12.99', description: 'Eggs, plantains, and Haitian sausage', image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
      { name: 'Haitian Omelette', price: '$10.99', description: 'Filled with cheese, peppers, and herbs', image: 'https://images.unsplash.com/photo-1594015774967-4e8c83572c1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
      { name: 'Tropical Fruit Bowl', price: '$8.99', description: 'Assorted fresh tropical fruits', image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
    ],
  },
  {
    name: 'Lunch',
    items: [
      { name: 'Griot', price: '$14.99', description: 'Haitian fried pork with pikliz', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80' },
      { name: 'Legim', price: '$12.99', description: 'Vegetable stew with meat', image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80' },
      { name: 'Poulet Creole', price: '$13.99', description: 'Creole-style chicken', image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
    ],
  },
  {
    name: 'Dinner',
    items: [
      { name: 'Lambi', price: '$18.99', description: 'Conch in Creole sauce', image: 'https://images.unsplash.com/photo-1560717845-968823efbee1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
      { name: 'Tassot Cabrit', price: '$16.99', description: 'Fried goat meat', image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80' },
      { name: 'Poisson Gros Sel', price: '$17.99', description: 'Fish in a spicy sauce', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
    ],
  },
  {
    name: 'Desserts',
    items: [
      { name: 'Haitian Cake', price: '$6.99', description: 'Traditional Haitian cake', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1289&q=80' },
      { name: 'Pen Patat', price: '$5.99', description: 'Sweet potato pudding', image: 'https://images.unsplash.com/photo-1508737804141-4c3b688e2546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1286&q=80' },
      { name: 'Kremas', price: '$4.99', description: 'Haitian eggnog', image: 'https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
    ],
  },
]

const weekendSpecials = [
  { name: 'Seafood Feast', price: '$24.99', description: 'A delightful mix of Caribbean seafood delicacies', image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80' },
  { name: 'Island BBQ Platter', price: '$22.99', description: 'Assorted grilled meats with tropical flavors', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80' },
]

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('Breakfast')

  return (
    <div className="container mx-auto px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-10"
      >
        Our Menu
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center space-x-4 mb-8"
      >
        {menuCategories.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`px-4 py-2 rounded-full ${
              activeCategory === category.name
                ? 'bg-yellow-500 text-white'
                : 'bg-gray-200 text-gray-800'
            } transition-colors duration-300`}
          >
            {category.name}
          </button>
        ))}
      </motion.div>

      {menuCategories.map((category) => (
        <motion.div
          key={category.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: activeCategory === category.name ? 1 : 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
            activeCategory === category.name ? '' : 'hidden'
          }`}
        >
          {category.items.map((item) => (
            <MenuItem key={item.name} {...item} />
          ))}
        </motion.div>
      ))}

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-3xl font-bold text-center my-12"
      >
        Weekend Specials
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {weekendSpecials.map((item) => (
          <MenuItem key={item.name} {...item} special />
        ))}
      </motion.div>
    </div>
  )
}

const MenuItem = ({ name, price, description, image, special = false }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className={`bg-white rounded-lg shadow-md overflow-hidden ${
      special ? 'border-2 border-yellow-500' : ''
    }`}
  >
    <Image
      src={image}
      alt={name}
      width={400}
      height={300}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-yellow-500 font-bold">{price}</span>
        {special && (
          <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-sm">
            Weekend Special
          </span>
        )}
      </div>
    </div>
  </motion.div>
)

