//src\components\OurMenu.tsx
import { Great_Vibes as GreatVibes } from 'next/font/google'
import Image from 'next/image'


const greatVibes = GreatVibes({ 
  weight: '400',
  subsets: ['latin'],
})

const menuCategories = [
  { name: 'Breakfast', active: true },
  { name: 'Lunch', active: false },
  { name: 'Dinner', active: false },
  { name: 'Dessert', active: false },
  { name: 'Drink', active: false },
  { name: 'Snack', active: false },
  { name: 'Suops', active: false },
]

const menuItems = [
  {
    name: 'Chicken Kofty',
    description: 'Succulent, spiced chicken meatballs, grilled to perfection for a tender and flavorful bite.',
    price: '12.5',
    image: '/01.png',
  },
  {
    name: 'Fresh Breakfast',
    description: 'A wholesome, delicious start to your day, packed with nutrients and taste.',
    price: '14.5',
    image: '/05.png',
  },
  {
    name: 'Mild Burger',
    description: 'Smooth and creamy, adding a rich touch to your favorite bread or dish.',
    price: '12.5',
    image: '/02.png',
  },
  {
    name: 'Cold Coffee',
    description: 'A refreshing blend of smooth cream, chilled to perfection for a cool, energizing treat',
    price: '12.5',
    image: '/06.png',
  },
  {
    name: 'Glow Cheese',
    description: 'Creamy, rich, and flavorful, this cheese elevates any dish with its unique taste',
    price: '12.5',
    image: '/03.png',
  },
  {
    name: 'Silice Beef',
    description: 'ender, juicy beef slices that bring savory goodness to any dish',
    price: '14.5',
    image: '/07.png',
  },
  
  {
    name: 'Desert',
    description: 'Indulge in a sweet, delightful end to your meal with our rich  desserts, crafted to satisfy',
    price: '12.5',
    image: '/04.png',
  },
  {
    name: 'Mushroom Burger',
    description: 'A flavorful pizza topped with earthy mushrooms and a blend of savory ingredients',
    price: '12.5',
    image: '/08.png',
  },
]

export default function MenuSection() {
  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className={`${greatVibes.className} text-[#FF9F0D] text-3xl mb-2`}>
            Choose & pick
          </h3>
          <h2 className="text-5xl font-bold">
            <span className="text-[#FF9F0D]">Fr</span>
            <span className="text-white">om Our Menu</span>
          </h2>
        </div>

        <nav className="flex justify-center gap-8 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.name}
              className={`text-xl ${
                category.active ? 'text-[#FF9F0D] font-bold' : 'text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 sm:w-40 md:w-96 lg:w-[366px]">
  <div className="relative aspect-square rounded-lg overflow-hidden">
    <Image
      src="/00.png"
      alt="Featured dish"
      width={366}
      height={362}
      className="object-cover w-full h-full"
    />
  </div>
</div>



          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {menuItems.map((item) => (
              <div key={item.name} className="flex gap-4 items-start">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-white text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-white/80 text-sm mb-2">{item.description}</p>
                  <p className="text-[#FF9F0D] font-bold">{item.price}$</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

