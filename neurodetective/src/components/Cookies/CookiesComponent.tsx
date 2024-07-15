'use client'
import { useState, useEffect } from "react";
import { DeleteCookie, GetCookie } from "./CookiesLocal";
import { useCookies } from "react-cookie";


export const GetCookieComponent = ({name}:{name : string})  => {

    const [token,setToken] = useState();

    useEffect(() => {
        setToken(GetCookie(name))
      }, [])

    return(
        <div>
            Your Cookie: {token} <br />
        </div>
    );
}

export const DeleteCookieComponent = ({name}:{name : string}) => {

    const DeleteProcess = () => {
        DeleteCookie(name);
        window.location.reload();
    }  

    return(
        <div>
            <button className="bg-green-300 rounded-xl py-1 px-2" onClick={()=>DeleteProcess()}>Delete Cookie</button>
        </div>
    );
}


export const CookieHook = () => {

    const [data] = useCookies(["profile"]); 

    return(
        <div>
           Your email: {data.profile.email}
           Your Name: {data.profile.name}
           Your ID: {data.profile.id}
        </div>
    );
}