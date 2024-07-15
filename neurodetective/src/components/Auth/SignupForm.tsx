'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { POST } from "../ApiCalls/POSTMethod";
import { SetCookie } from "../Cookies/CookiesLocal";
//import {GotoUserProfile} from "../Profile/UserProfile";
import SignupSchema from "../Schemas/zod/SignupSchema";
import { BACKEND_URL } from "../ENV_Client";


type input = z.infer<typeof SignupSchema>

export const SignupFormValidate = ()=> {

    const router = useRouter();
    const {register, formState : {errors}, handleSubmit, reset} = useForm<input>({
        resolver: zodResolver(SignupSchema)
    });
    
     
    const processForm = async (formData:input) => {
        console.log(formData);
    
        const { confirmpassword, ...rest } = formData;
    
        const Response = await POST(`${BACKEND_URL}/auth/signup`, rest);
        
        console.log("Signup Success",Response.data);
        if(Response.error){
            alert(Response.message);
        }
        else{
            alert(`${Response.message}.\nLet's Login!!`);
            router.push('/login');
        }
    }
    

    return(
        <form className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md" method="post" onSubmit={handleSubmit(processForm)}>   
        {/* Username */}
        <div className="mb-4">
            <label htmlFor="username" className="text-gray-600 block">Username:</label>
            <input 
                id="username" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" 
                type="text" 
                placeholder="Type Username" 
                {...register('username')}
            /> 
            {errors.username?.message && <p className='text-red-500 text-sm mt-1'>{errors.username.message}</p>}
        </div>
    
        {/* Email */}
        <div className="mb-4">
            <label htmlFor="user-email" className="text-gray-600 block">Email:</label>
            <input 
                id="user-email" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" 
                type="email" 
                placeholder="Type Email" 
                {...register('email')}
            /> 
            {errors.email?.message && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
        </div>
    
        {/* Phone Number */}
        <div className="mb-4">
            <label htmlFor="number" className="text-gray-600 block">Phone Number:</label>
            <input 
                id="number" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" 
                type="number" 
                placeholder="Type Phone Number" 
                {...register('phonenumber')}
            /> 
            {errors.phonenumber?.message && <p className='text-red-500 text-sm mt-1'>{errors.phonenumber.message}</p>}
        </div>
    
        {/* Gender */}
        <div className="mb-4">
            <label className="text-gray-600 block">Gender:</label>
            <div className="flex items-center">
                <input id="male" className="mr-2" type="radio" value="male" {...register('gender')}/> 
                <label htmlFor="male">Male</label>
                <input id="female" className="ml-4 mr-2" type="radio" value="female" {...register('gender')}/> 
                <label htmlFor="female">Female</label>
            </div>
            {errors.gender?.message && <p className='text-red-500 text-sm mt-1'>{errors.gender.message}</p>}
        </div>
    
        {/* Password */}
        <div className="mb-4">
            <label htmlFor="password" className="text-gray-600 block">Password:</label>
            <input 
                id="password" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" 
                type="password" 
                placeholder="Type Password" 
                {...register('password')}
            />
            {errors.password?.message && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>
    
        {/* Confirm Password */}
        <div className="mb-6">
            <label htmlFor="cpassword" className="text-gray-600 block">Confirm Password:</label>
            <input 
                id="cpassword" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" 
                type="password" 
                placeholder="Confirm Password" 
                {...register('confirmpassword')}
            />
            {errors.confirmpassword?.message && <p className="text-red-500 text-sm mt-1">{errors.confirmpassword.message}</p>}
        </div>
    
        <button className="w-full bg-green-400 text-white rounded-lg py-2 px-4 hover:bg-orange-400 focus:outline-none focus:shadow-outline-orange" type="submit">
            Submit
        </button>
    </form>
    
    );
}



