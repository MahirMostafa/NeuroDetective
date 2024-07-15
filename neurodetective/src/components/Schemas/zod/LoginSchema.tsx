import {z} from 'zod'

export const LoginSchema = z.object({
        username: z
        .string()
        .email()
        .min(1, "Email is required"), 

        password: z
        .string()
        .min(1, "Password is required")
        .min(4, "Minimum 4 characters")
})

export default LoginSchema;