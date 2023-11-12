import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div class="min-h-screen bg-gradient-to-b from-blue-300 via-blue-200 to-blue-50 bg-opacity-75 p-5">
     <section className=" text-center">
        <div className="mx-auto flex justify-center mt-30">
        <Image src="/logo.png" width={180} height={102} className="rounded-40"/>
        </div>
<div class="text-center">
        <h2 class="text-6xl font-mono flex justify-center text-blue-700 mt-10">WELCOME TO optiMIA</h2>
        </div>
        <div class="absolute w-320 h-102 left-560 top-800 bg-black rounded-10"></div>
<div class="text-center">
        <h1 class="text-2xl font-bold flex justify-center text-b-700 mt-10">Organizing your world one task at a time</h1>
        </div>
        <div class="text-center">
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-20 rounded-full mt-10">
          <div class= "text-center"></div>
          <Link href="/login" class="text-2xl font-mono flex text-white mt-0">START</Link>
    </button>
        </div>
      </section>
      </div>
    </main>
  )
}