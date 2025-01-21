

// import ProductDetail from "@/app/shop/[id]/page"

// interface ProductPageProps {
//   params: {
//     id: string
//   }
// }

// export default async function ProductPage({ params }: ProductPageProps) {
//   return <ProductDetail id={params.id} />
// }


// app/shop/[id]/page.tsx
interface ProductDetailProps {
  params: {
    id: string;
  };
}

export default async function ProductDetail({ params }: ProductDetailProps) {
  const { id } = params;

  // Fetch product data based on the `id`
  // const product = await fetchProductById(id);

  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>Product ID: {id}</p>
      {/* Render product details here */}
    </div>
  );
}
