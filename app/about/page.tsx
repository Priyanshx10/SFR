"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/marker-icon-2x.png",
  iconUrl: "/marker-icon.png",
  shadowUrl: "/marker-shadow.png",
});

export default function About() {
  const position = [27.2939, -80.3503]; // Port St. Lucie coordinates

  return (
    <div className="container mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-10">About Us</h1>
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
            <Image
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              alt="South Florida Restaurant"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              South Florida Restaurant & Bar was established in 2022 with a
              vision to bring authentic Haitian and Caribbean cuisine to Port
              Saint Lucie. Our family-owned restaurant is dedicated to
              preserving the rich culinary traditions of Haiti while offering a
              modern dining experience.
            </p>
            <p className="text-gray-600 mb-4">
              We take pride in using only the freshest ingredients and
              traditional cooking methods to create dishes that transport our
              guests to the vibrant streets of Port-au-Prince and the beautiful
              beaches of the Caribbean.
            </p>
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            Our mission is to provide an unforgettable dining experience that
            celebrates the flavors, culture, and hospitality of Haiti and the
            Caribbean. We strive to create a warm and welcoming atmosphere where
            families and friends can come together to enjoy delicious food,
            great conversation, and make lasting memories.
          </p>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember
              name="Chef Marie"
              role="Head Chef"
              image="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            />
            <TeamMember
              name="Jean"
              role="Restaurant Manager"
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=768&q=80"
            />
            <TeamMember
              name="Sophie"
              role="Bar Manager"
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=768&q=80"
            />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Find Us</h2>
          <div className="h-96 rounded-lg overflow-hidden">
            <MapContainer
              center={position}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  South Florida Restaurant & Bar <br /> 1622 SW Bayshore Blvd,
                  Port St. Lucie, FL 34984
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const TeamMember = ({ name, role, image }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg shadow-md p-6 text-center"
  >
    <Image
      src={image}
      alt={name}
      width={200}
      height={200}
      className="rounded-full mx-auto mb-4"
    />
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <p className="text-gray-600">{role}</p>
  </motion.div>
);
