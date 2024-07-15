import { LoginFormValidate } from "@/components/Auth/LoginFormValidate";

export const metadata = {
    title: "Login",
    description: "This is login page"
}

export default function Login(){
    return(
        <LoginFormValidate/>  
    );
}