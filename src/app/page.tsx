"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  const router = useRouter();

  const handleLogin = () => {

    window.location.href = "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000/onebox";
  }

  return (
    <main className="relative flex min-h-screen bg-black flex-col items-center justify-center">

      <div className=" absolute top-0 flex justify-center items-center border-b border-slate-100" >
        <Image src="/logo.png" alt="logo" width={400} height={200} quality={100} />
      </div>

      <div className=" relative flex justify-center items-center" >
        {/* <div className="absolute top-1/2 right-2  text-white bg-gray-900 p-10 rounded-lg flex flex-col justify-center items-center border border-slate-50 w-80"></div> */}
        <div className="text-white bg-gray-900 px-10 py-5 rounded-lg flex flex-col justify-center items-center border border-gray-700">
          <h2 className="text-2xl">Create a new account</h2>
          <div className="mt-5">
            <Button className="p-5 border border-slate-100 flex justify-center items-center gap-3" variant="ghost" onClick={handleLogin} >
              <Image src="/google.svg" alt="google" width={30} height={30} quality={100} />
              Sign Up with Google
            </Button>
          </div>
          <div className="mt-5" >
            <Button className="p-2 bg-blue-500 hover:bg-blue-600 font-semibold" variant="secondary" onClick={handleLogin}  >
              Create an Account
            </Button>

          </div>
          <div className="mt-9 mb-6 text-xs text-gray-400" >
            Already have an account? <a href="#" className="text-blue-500 hover:text-blue-600" >Sign In</a>
          </div>

        </div>

      </div>


    </main>
  );
}
