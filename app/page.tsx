'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <FeaturedMenu />
      <Testimonials />
      <CTA />
    </div>
  )
}

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center text-white">
    <Image
      src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
      alt="Caribbean food"
      layout="fill"
      objectFit="cover"
      quality={100}
    />
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="z-10 text-center"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-4">South Florida Restaurant and Bar</h1>
      <p className="text-xl md:text-2xl mb-8">Experience the best Caribbean cuisine in Port Saint Lucie</p>
      <Link href="/menu" className="bg-yellow-500 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-colors duration-300">
        View Our Menu
      </Link>
    </motion.div>
  </section>
)

const About = () => (
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap items-center"
      >
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Restaurant interior"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-10">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 mb-6">
            Welcome to South Florida Restaurant & Bar, the premier Haitian restaurant in Port Saint Lucie. Our family invites you to savor the unique flavors of Haitian and Caribbean cuisine. Established in 2022, our commitment to quality ingredients and heartfelt hospitality ensures an authentic culinary experience.
          </p>
          <Link href="/about" className="text-yellow-500 font-semibold hover:text-yellow-600 transition-colors duration-300">
            Learn More About Us
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
)

const FeaturedMenu = () => (
  <section className="py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Featured Menu Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <MenuItem
          name="Caribbean Breakfast"
          description="Farm-fresh cage-free eggs, homemade fluffy biscuits, and scratch-made sausage gravy."
          image="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        />
        <MenuItem
          name="Haitian Lunch Special"
          description="A flavorful assortment of homemade dishes, perfect for a satisfying midday meal."
          image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
        />
        <MenuItem
          name="Caribbean Dinner Platter"
          description="A delightful dinner experience featuring our chef's selection of Caribbean specialties."
          image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        />
      </div>
    </div>
  </section>
)

const MenuItem = ({ name, description, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden"
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
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
)

const Testimonials = () => (
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TestimonialCard
          name="John Doe"
          text="The flavors at South Florida Restaurant are incredible! It's like a trip to the Caribbean without leaving Port Saint Lucie."
        />
        <TestimonialCard
          name="Jane Smith"
          text="I love the authentic Haitian dishes. The staff is always friendly and the atmosphere is welcoming."
        />
        <TestimonialCard
          name="Mike Johnson"
          text="Best Caribbean food in town! The breakfast is amazing and keeps me coming back for more."
        />
      </div>
    </div>
  </section>
)

const TestimonialCard = ({ name, text }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white p-6 rounded-lg shadow-md"
  >
    <p className="text-gray-600 mb-4">"{text}"</p>
    <p className="font-semibold">{name}</p>
  </motion.div>
)

const CTA = () => (
  <section className="py-20 bg-yellow-500">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Flavors?</h2>
      <p className="text-xl mb-8">Join us for a delightful culinary journey through Caribbean cuisine.</p>
      <Link href="/reservations" className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
        Make a Reservation
      </Link>
    </div>
  </section>
)

