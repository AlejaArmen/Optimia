import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"
import CustomBtnLogin from "../components/Customloginbtn";
import { Component } from "react";

const inter = Inter({ subsets: ["latin"] });
export default function LoginBtn() {
    const { data: session } = useSession()
    return (
      <>
    <main class="flex">
      <div className="w-1/2 h-screen bg-blue-700">
        <section className=" text-center">
          <div className="flex items-center justify-center h-screen">
            <div className="bg-blue-400 p-20">
              <Image
                src="/persona.png"
                width={400}
                height={190}
                className="w-86 h-86"
              />
            </div>
          </div>
        </section>
      </div>
      <div className="mx-auto bg-white">
        <section className="flex flex-col text-center">
          <div className="flex justify-center">
            <Image
              src="/logo.png"
              width={150}
              height={190}
              className="rounded-10"
            />
          </div>
          <div class="text-center">
            <h2 class="text-6xl font-mono flex justify-center text-blue-800 mt-32 mb-10">
              WELCOME
            </h2>
            <div className="bg-black w-80 h-1 mb-9"></div>
            <div class="justify-items-center ">
                <CustomBtnLogin/>
            </div>
          </div>
        </section>
      </div>
    </main>
    </>
  )
}

