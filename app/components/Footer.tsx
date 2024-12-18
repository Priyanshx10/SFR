import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">South Florida Restaurant and Bar</h3>
            <p className="mb-4">1622 SW Bayshore Blvd, Port St. Lucie, FL 34984</p>
            <p>Phone: 772-446-0698</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul>
              <li><Link href="/" className="hover:text-yellow-500">Home</Link></li>
              <li><Link href="/menu" className="hover:text-yellow-500">Menu</Link></li>
              <li><Link href="/reservations" className="hover:text-yellow-500">Reservations</Link></li>
              <li><Link href="/about" className="hover:text-yellow-500">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-500">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Hours</h3>
            <p>Monday - Friday: 11am - 10pm</p>
            <p>Saturday - Sunday: 10am - 11pm</p>
            <div className="mt-4 flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2024 South Florida Restaurant and Bar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

