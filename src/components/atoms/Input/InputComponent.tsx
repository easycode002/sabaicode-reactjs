import React, { CSSProperties } from 'react'

// define interface
interface InputProps {
  type?: string;
  value?: string | number;
  defaultValue?: string | number;
  placeholder?: string;
  name?: string;
  id?: string;
  className?: string;
  style?: CSSProperties;
  autoComplete?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  step?: number | string;
  min?: number | string;
  max?: number | string;
  size?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
}

const InputComponent: React.FC<InputProps> = ({
  type = 'text',
  value,
  defaultValue,
  placeholder,
  name,
  id,
  className,
  style,
  autoComplete,
  autoFocus,
  disabled,
  readOnly,
  required,
  maxLength,
  minLength,
  step,
  min,
  max,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  onKeyUp,
  onClick
}) => {
  return (
    <div className='border-2'>
      <input
        type={type} //text, password, email, number, range, range, url, search, date, time, datetime-local, month, week, color, file, hidden, checkbox, radio, button, submit, reset
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        name={name}
        id={id}
        className={className}
        style={style}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        maxLength={maxLength}
        minLength={minLength}
        step={step}
        max={max}
        min={min}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onClick={onClick}
      />
    </div>

  );
};

export default InputComponent;
