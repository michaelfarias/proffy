import React, { InputHTMLAttributes } from 'react';

import './styles.css';

// o InputHTMLAttributes indica que terei acesso a todas as propriedades do input do HTML
// HTMLInputElement => variavel global e local

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

// o operador "spread" indica que pegarei todos os valores restantes => ...rest 

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return (

        <div className="input-block">
            <label htmlFor={name}> {label} </label>
            <input type="text" id={name} {...rest} />
        </div>

    );
}

export default Input;
