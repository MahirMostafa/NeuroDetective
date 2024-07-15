'use server'
import { cookies } from "next/headers";

export const SetCookie = (name : string,value : string) => {
    const options = {
        maxAge: 15 * 60 
      };  

    cookies().set(name,value,options);
}

export const SetCookieObject = (name: string, obj: any) => {

    const options = {
        maxAge: 15 * 60 
      };  

    const json = JSON.stringify(obj)
    cookies().set(name, json, options)
  
  }

export const GetCookie = (name : string): any => {
    return cookies().get(name)?.value;
}

export const GetCookieObject = (name: string) => {

    const json = cookies().get(name)?.value
  
    if (!json) return null
  
    try {
      return JSON.parse(json)
    } 
    catch{
        return {error: "Problems occured in parsing json"}
    }
  }

export const DeleteCookie = (name : string) => {
    cookies().delete(name);
}

export const HasCookie = (name : string): boolean => {
   return cookies().has(name);
}