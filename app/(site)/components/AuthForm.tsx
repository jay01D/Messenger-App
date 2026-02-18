"use client"


import Input from "@/app/components/input/Input"
import { useCallback, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"

type Variant = "LOGIN" | "REGISTER"


const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>("LOGIN")
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
        if (variant === "LOGIN") {
            setVariant("REGISTER")
        } else {
            setVariant("LOGIN")
        }
    }, [variant])

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if (variant === "REGISTER") {
            // axios call register
        }

        if (variant === "LOGIN") {
            // Nextauth signin
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true)
        //NextAuth social signin
    }

    return (
        <div className="
    mt-8
    sm:mx-auto
    sm:w-full
    sm:max-w-md
    ">
            <div className="
        bg-white
        px-8
        py-8
        shadow
        sm:rounded-lg
        sm:px-10
        ">
                <form className="space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Input id="email"
                        label="Email"
                        register={register}

                    />
                </form>

            </div>
        </div>
    )
}

export default AuthForm