import { SignupFormValidate } from "@/components/Auth/SignupForm";


export const metadata = {
    title: "Signup",
    description: "This is sign up page"
}

export default function Login(){
    return(

        <div className="max-w-md mx-auto p-6 bg-white3 mb-8">
        <h1 className="text-3xl font-bold text-black-500 mb-4">Signup Form</h1>
            <SignupFormValidate/>
        </div>   

    );
}