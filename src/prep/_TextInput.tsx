import type {ChangeEvent, FC} from "react";

interface TextInputProps {
    placeholder: string;
    onChange: (value: string) => void;
}

export const _TextInput: FC<TextInputProps> = ({onChange,placeholder}) =>{

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        onChange(event.target.value);
    }

    return (
        <input placeholder={placeholder} onChange={handleChange}/>
    )
}