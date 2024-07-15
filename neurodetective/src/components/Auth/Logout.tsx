'use client'
import { useRouter } from "next/navigation";
import { DeleteCookie } from "../Cookies/CookiesLocal";

export const LogoutComponent = () => {

    const router = useRouter();
    const DeleteProcess = async () => {
       // DeleteCookie('user');
        DeleteCookie('token');
        router.push('/login');
    }  

    return(
        <div>
            <button className="bg-red-900 text-sky-50 font-bold rounded-md py-1 px-2" onClick={()=>DeleteProcess()}>Logout</button>
        </div>
    );
}
