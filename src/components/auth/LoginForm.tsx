"use client"

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

type FormData = {
    username: string;
    password: string;
}

const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required()
}).required();

const LoginForm = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: FormData) => {
        console.log(JSON.stringify(data));
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
    <div className="flex flex-col">
        <label className="mb-2">Nombre de usuario:</label>
        <input 
            {...register("username")}
            className="p-4 mb-4 rounded bg-gray-50 border border-gray-200"
            type="text" placeholder="Anakin Skywalker"/>
        {errors?.username && <div className="text-red-600 mt-2">Este campo es obligatorio</div>}
    </div>
    <div className="flex flex-col mt-4">
        <label className="mb-2">Contraseña:</label>
        <input
            {...register("password")}
            className="p-4 mb-4 rounded bg-gray-50 border border-gray-200"
            type="password"/>
            {errors?.password && <div className="text-red-600 mt-2">Este campo es obligatorio</div>}
    </div>
    <div className="mt-4">
        <button className="button-primary"
            onClick={handleSubmit(onSubmit)}
            >Iniciar sesión</button> 
    </div>
</form>
}

export default LoginForm;