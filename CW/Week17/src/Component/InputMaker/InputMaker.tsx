import React from 'react';

const InputMaker= ({placeholder, type, className, value}:React.InputHTMLAttributes<any>) => {
    return (
        <input placeholder={placeholder} type={type} className={className} value={value}/>
    );
};

export default InputMaker