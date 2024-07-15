import { redirect } from "next/navigation";
import { GetCookieObject } from "../Cookies/CookiesLocal";

export const IfAdmin = async () =>{
    const user: IUser = await GetCookieObject('user')
    
    if(user){
        if(user.role !== 'admin'){
            redirect('/profile');
        }
    }
    else{
        redirect('/login');
    }

}

export const IfUser = async () =>{
    const user: IUser = await GetCookieObject('user')
    
    if(user){
        if(user.role !== 'user'){
            redirect('/profile');
        }
    }
    else{
        redirect('/login');
    }

}

export const IfAny = async () =>{
    const user: IUser = await GetCookieObject('user')
    
    if(!user){
        redirect('/login');
    }
}

export const IsAdmin = async (): Promise<boolean> =>{
    const user =await GetCookieObject('user')
    
    if(user){
        if(user.role === 'admin'){
           return true;
        }else{
            return false;
        }
    }
    else{
        redirect('/login');
    }
}

export const IsUser = async (): Promise<boolean> =>{
    const user: IUser = await GetCookieObject('user')
    
    if(user){
        if(user.role === 'user'){
           return true;
        }else{
            return false;
        }
    }
    else{
        redirect('/login');
    }
}