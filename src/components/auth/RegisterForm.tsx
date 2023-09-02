"use client"

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import SubmitButton from "../form/SubmitButton";
import InputText from "../form/InputText";

type FormData = {
    username: string;
    password: string;
    name: string;
    photoUrl: string;
}

const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
    name: yup.string().required(),
    photoUrl: yup.string().required()
}).required();

const RegisterForm = () => {

    const methods = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const {register, handleSubmit, formState: {errors}} = methods;

    const onSubmit = (data: FormData) => {
        console.log(JSON.stringify(data));
    }

    return <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputText label={"Tu nombre completo:"}
                    fieldName={"name"} 
                    placeholder="Anakin Skywalker"
                    type="text"
            />
            <InputText label={"La URL de tu foto de perfil:"}
                fieldName={"photoUrl"} 
                placeholder="https://..."
                type="text"
                styles="mt-4"
            />
            <InputText label={"Nombre de usuario:"}
                fieldName={"username"} 
                placeholder="anakin"
                type="text"
                styles="mt-4"
            />
            <InputText label={"Contraseña:"}
                fieldName={"password"} 
                placeholder=""
                type="password"
                styles="mt-4"
            />
        <SubmitButton label={"Crear cuenta"} 
                    onSubmit={onSubmit} 
                    styles="mt-4"/>
                    
        </form>
</FormProvider>
}

export default RegisterForm;