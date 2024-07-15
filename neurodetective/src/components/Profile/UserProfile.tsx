'use client'
import { GetCookieObject, SetCookieObject } from "../Cookies/CookiesLocal";
 import { GETToken } from "../ApiCalls/GETMethod";
 import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
 import { BACKEND_URL } from "../ENV_Client";

export const GotoUserProfile = async(router: AppRouterInstance)=>{
    const Response = await GETToken(`${BACKEND_URL}/profile`);
    if(Response.error){
        alert(Response.error);
        console.log(Response);
    }
    else{
        SetCookieObject('user', Response.user);
        setTimeout(async () => {
           // const user = await GetCookieObject('user');   
           // console.log(user);
            router.push(`/profile`);
        }, 1000); 
    }
}
