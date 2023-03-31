import React from "react";

type ButtonProps = {
    variant: 'primary' | 'secondary'& React.ComponentProps<'button'>;
    children: string & Omit<React.ComponentProps<'button'>, 'children'>
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}


export const CustomButton = ({variant, children, handleClick, ...rest}: ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest} onClick={(event) => handleClick(event)}>
        {children}
    </button>
  )
}