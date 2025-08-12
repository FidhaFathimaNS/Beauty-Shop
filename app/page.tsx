import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "Rose Glow Facial Serum",
      price: 59.99,
      image: "/products/serum.jpg",
      description: "Illuminating serum with rose extracts"
    },
    {
      id: 2,
      name: "Natural Lip Tint",
      price: 24.99,
      image: "/placeholder.jpg",
      description: "Subtle color with nourishing ingredients"
    },
    {
      id: 4,
      name: "Vitamin C Serum",
      price: 59.99,
      image: "/placeholder.jpg",
      description: "Brightening & anti-aging formula"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            <div className="absolute inset-0 bg-beauty-pink-500/20 mix-blend-multiply z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-beauty-pink-500/30 to-purple-500/30 mix-blend-overlay z-20" />
          </div>
        </div>
        <div className="relative z-30 text-center px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Discover Your Glow
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto drop-shadow">
            Premium beauty products crafted for your radiance
          </p>
          <Link 
            href="/products" 
            className="inline-block px-8 py-4 text-lg bg-white/90 text-beauty-pink-500 rounded-full 
                     hover:bg-white hover:scale-105 transform transition-all duration-300 
                     shadow-lg hover:shadow-xl"
          >
            Explore Collection
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="section-title text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="relative h-64 mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-3">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">${product.price}</span>
                <button className="btn-primary">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <div className="text-pink-500 text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-2">Natural Ingredients</h3>
              <p className="text-gray-600">All products are made with carefully selected natural ingredients</p>
            </div>
            <div className="text-center">
              <div className="text-pink-500 text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold mb-2">Cruelty Free</h3>
              <p className="text-gray-600">We never test our products on animals</p>
            </div>
            <div className="text-center">
              <div className="text-pink-500 text-4xl mb-4">♻️</div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">Sustainable packaging and responsible production</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
