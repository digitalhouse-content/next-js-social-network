"use client"
import useMessages from "@/contexts/message.context";
import { UserType } from "@/types/user.types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type MessagePostFormType = {
    parentId?: string,
    currentUser?: UserType
}

type FormData = {
    message: string,
}

const MessagePostForm = ({parentId, currentUser}: MessagePostFormType) => {
    const router = useRouter();
    const {postMessage} = useMessages();
    const {register, handleSubmit, resetField, setFocus} = useForm<FormData>();
    
    useEffect(() => {
        setFocus("message")
    }, [setFocus])

    const onSubmit = async (data: FormData) => {
        await postMessage(data.message, parentId);
        resetField("message");
        setFocus("message")
    }

    const goToLogin = () =>{
        router.push("/login")
        router.refresh();
    }

    if (!currentUser){
        return <div className="mb-4 flex flex-col items-center">
            <h3>Iniciá tu sesión para escribir un mensaje</h3>
            <button className="button-primary w-fit mt-4"
                        type="submit" onClick={() => goToLogin()}>
                            Iniciar sesión
            </button>
        </div>
    }

    return <div className="mb-4 grid grid-cols-12">
                <div className="w-full h-full mt-1 text-center mb-4 block relative col-span-2 flex items-center justify-center">
                    <Image src={currentUser.photoUrl}
                        priority
                        className="rounded-full"
                        width={60}
                        height={60}
                        alt={""}/>
                </div>
                <div className="flex flex-col ml-4 mt-2 col-span-10">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <textarea 
                            rows={4} 
                            placeholder="¿Qué estas pensando?"
                            className="resize-none p-4 w-full mb-4 rounded bg-gray-50 border border-gray-200"
                            {...register("message", {
                                required: true
                            })}
                        />
                        <div className="flex justify-end">
                            <button className="button-primary w-fit"
                                type="submit">Postear</button>
                        </div>
                    </form>
                </div>
            </div>
}

export default MessagePostForm;