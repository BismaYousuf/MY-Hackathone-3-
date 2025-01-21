'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from 'next/link'

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

interface CheckoutFormProps {
  products: Product[]; // Ensure this prop is passed correctly
}

export default function CheckoutForm({ products = [] }: CheckoutFormProps) {  // Default to empty array if products is undefined
  const [sameAsShipping, setSameAsShipping] = useState(false);

  // Calculate total, ensuring products is an array
  const total = products.reduce((acc, product) => acc + (product.price * product.quantity), 0);
  const shipping = 0; // Free shipping for simplicity
  const discount = total * 0.25; // 25% discount
  const tax = (total - discount) * 0.1; // Tax is 10% after discount
  const finalTotal = total - discount + tax + shipping;

  return (
    <>
      <div className="relative w-full h-[410px] bg-black m-auto">
        <Image
          src={'/menubg.png'}
          alt={'Menu Background'}
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 px-4 sm:px-6 md:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">Checkout Page</h1>
          <p className="text-sm sm:text-base text-white flex items-center space-x-2 group">
            <Link href={"/"} ><span className="transition-colors duration-300">Home</span></Link>
            <ChevronRight size={16} className="text-white transition-colors duration-300 group-hover:text-orange-500" />
            <span className="transition-colors duration-300 text-orange-500">Checkout Page</span>
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Shipping Address Form */}
          <div className="lg:col-span-2">
            {/* Shipping Address Form Fields (same as before) */}
            {/* ... */}

            <div className="mt-6 flex items-center space-x-2">
              <Checkbox
                id="sameAddress"
                checked={sameAsShipping}
                onCheckedChange={(checked) => setSameAsShipping(checked as boolean)}
              />
              <Label htmlFor="sameAddress">Same as shipping address</Label>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <Link href={'/shoppingCart'} >
                <Button variant="outline" className="flex items-center gap-2">
                  Back to cart
                </Button>
              </Link>
              <Button className="bg-[#FF9F0D] hover:bg-[#FF9F0D]/90 flex items-center gap-2">
                Proceed to shipping
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Dynamic Order Items */}
              {products.length === 0 ? (
                <p className="text-center text-gray-500">No products in your cart.</p>
              ) : (
                products.map((product) => (
                  <div key={product.id} className="flex gap-4">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="h-20 w-20 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900">{product.name}</h3>
                      <p className="text-sm text-gray-500">{product.quantity} x ${product.price}</p>
                      <p className="text-sm text-gray-500">${product.price * product.quantity}</p>
                    </div>
                  </div>
                ))
              )}
              <Separator />
              
              {/* Order Calculations */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sub-total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#FF9F0D] hover:bg-[#FF9F0D]/90">
                Place an order
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
