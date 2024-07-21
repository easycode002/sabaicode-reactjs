import React from 'react'

// define interface of label component
interface LabelProps{
  text?:string;      // optional
  htmlFor?:string;
  className?:string;
  style?:React.CSSProperties;
  id?: string;
  children?:React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLLabelElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLLabelElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLLabelElement>;
}

// declear const
const Label_Component: React.FC<LabelProps> = ({
  text,
  htmlFor,
  className,
  style,
  id,
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
})=>{
  return (
    <label
      id={id}
      htmlFor={htmlFor}
      className={className}
      style={style}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {text}
      {children}
    </label>
  )
}

export default Label_Component;
