import React from 'react';
import { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';

import "./style.css"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  colorIcon?: string;
  sizeIcon?: number;
  styleCustom?: object;
  icon?: React.ComponentType<IconBaseProps>
}

const Input: React.FC<InputProps> = ({ icon: Icon, styleCustom, name, sizeIcon, colorIcon, ...rest }) => {
  return (
    <div className="Container-Input" style={styleCustom}>
      {Icon && <Icon size={sizeIcon} color={colorIcon}/>}
      <input {...rest} />
    </div>
  )
};

export  { Input };