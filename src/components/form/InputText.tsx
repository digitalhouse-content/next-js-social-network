import { FieldValues, useFormContext } from "react-hook-form";

type InputTextProps = {
    label: string;
    fieldName: string;
    placeholder?: string;
    styles?: string
    type: 'text' | 'password'
}

const InputText = ({fieldName, label, type, placeholder, styles}: InputTextProps) => {
    const {register, formState: {errors}} = useFormContext();
    return <div className={`flex flex-col ${styles ?? ''}`}>
        <label className="mb-2">{label}:</label>
        <input 
            {...register(fieldName)}
            className="p-4 mb-4 rounded bg-gray-50 border border-gray-200"
            type={type} placeholder={placeholder}/>
        {errors && errors[fieldName] && 
            <div className="text-red-600 mt-2">Este campo es obligatorio</div>
            }
    </div>
}

export default InputText;