import {z} from 'zod'

type U = {
 name: string
}

export const SignupSchema = z
.object({
        username: z
        .string()
        .min(1, "Username is required"), 

        email: z
        .string()
        .email()
        .min(1, "Email is required"), 

        phonenumber: z
        .string()
        .min(1, "Phone Number is required")
        .min(11, "Invalid Number")
        .max(11, "Invalid Number"),

        gender: z
        .string()
        .min(1, "Gender is required"),

        password: z
        .string()
        .min(1, "Password is required")
        .min(4, "Minimum 4 characters"),

        confirmpassword: z
        .string()
        .min(1, "Confirm Password is required")
        .min(4, "Minimum 4 characters")
})
.refine((data) => data.password === data.confirmpassword, {
        message: "Password doesn't Match",
        path: ['confirmpassword']
})


export default SignupSchema;