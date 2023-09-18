'use client';

import { useRouter } from "next/navigation";
import '../login/login.css'

export default function LoginPage() {
    const router = useRouter();


    return (
        <section className="flex items-center justify-center h-[100vh]">
            <div className="flex flex-col items-center cover">

                <h2 className="m-[1rem] text-[30px]">Faça seu login</h2>
                <form className="flex flex-col gap-2 w-[100%] max-w-[100%]"
                    onSubmit={(e) => {
                        router.push('/');
                        e.preventDefault();
                    }} method="post">

                    <div className="flex flex-col gap-2">

                        <label htmlFor="">Email</label>
                        <input className="p-[10px] outline-0 rounded bg-inptcl" type="Email" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Senha:</label>
                        <input className="p-[10px] outline-0 rounded bg-inptcl" type="Password" />
                    
                    </div>

                    <div className=" bg-btcl flex justify-center items-center cursor-pointer rounded p-[10px] mt-5 text-white">
                        <button type="submit" >Login</button>
                    </div>

                    <fieldset className="border-t border-slate-50 mt-[10px]">
                        <legend className="mx-auto px-4 text-black text-1xl italic">ou</legend>
                        
                    </fieldset>


                </form>
            </div>



        </section>



    )
}