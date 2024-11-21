

export default function Services() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition">
            <img
              src="./kitchen.jpg"
              alt="Kitchen Design"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Kitchen Design</h2>
            <p>Stylish and functional kitchen solutions.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition">
            <img
              src="./drawing.jpg"
              alt="Drawing Room"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Drawing Room</h2>
            <p>Elegant spaces for family and guests.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition">
            <img
              src="./outdoor.jpg"
              alt="Outdoor Spaces"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Outdoor Spaces</h2>
            <p>Beautiful outdoor living areas.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition">
            <img
              src="./lawn.jpg"
              alt="Garden Design"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Garden Design</h2>
            <p>Create the garden of your dreams.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition">
            <img
              src="./interior.jpg"
              alt="Interior Design"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Interior Design</h2>
            <p>Modern and stylish interiors for every room.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition">
            <img
              src="./renovations.jpg"
              alt="Renovations"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Renovations</h2>
            <p>Transform your spaces with expert renovations.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition">
            <img
              src="./Furniture.jpg"
              alt="Furniture Setup"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Furniture Setup</h2>
            <p>Perfectly placed furniture to enhance your space.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition">
            <img
              src="./customized.jpg"
              alt="More Services"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">More Services</h2>
            <p>Explore additional customized services.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
