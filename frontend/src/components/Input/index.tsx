import React from 'react';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

const Input: React.FC<InputProps> = ({ children, ...rest }) => {
  return (
    <input {...rest} />
  )
};

export  { Input };