import Hero from "@/components/hero"
import Product from "@/components/product"
import { ProductType } from "@/interface"

 
async function Home() {
  let data = await fetch("https://fakestoreapi.com/products")
  let products:ProductType[] = await data.json()
  
  return (
    <main className='min-h-screen max-w-7xl mx-auto px-8 xl:px-0 relative top-20'>
      <Hero />
      <section className='flex flex-col space-y-12'>
        <h1 className='text-5xl text-black font-bold text-center'>
					JAVOHIR SHOP DEALS
				</h1>
        <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
					{products.map((val) => (
						<Product key={val.id} product={val} />
					))}
				</div>
      </section>
    </main>
  )
}

export default Home
