

// import ProductDetail from "@/app/shop/[id]/page"

// interface ProductPageProps {
//   params: {
//     id: string
//   }
// }

// export default async function ProductPage({ params }: ProductPageProps) {
//   return <ProductDetail id={params.id} />
// }
import { notFound } from "next/navigation"
import Image from "next/image"
import type { Metadata } from "next"

interface Product {
  id: string
  name: string
  description: string
  price: number
  imageUrl: string
}

interface ProductPageProps {
  params: {
    id: string
  }
}

async function fetchProductById(id: string): Promise<Product> {
  // This is a mock fetch function. Replace with actual API call in production.
  const res = await fetch(`https://api.example.com/products/${id}`)
  if (!res.ok) throw new Error("Failed to fetch product")
  return res.json()
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  try {
    const product = await fetchProductById(params.id)
    return {
      title: `${product.name} | Our Store`,
      description: product.description,
    }
  } catch (error) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    }
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  let product: Product

  try {
    product = await fetchProductById(params.id)
  } catch (error) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square">
          <Image
            src={product.imageUrl || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg mb-4">{product.description}</p>
          <p className="text-2xl font-bold mb-6">${product.price.toFixed(2)}</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}


