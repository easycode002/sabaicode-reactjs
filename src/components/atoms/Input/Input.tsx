import React, { useState } from 'react'
import InputComponent from './InputComponent'

const Input: React.FC = () => {
    // create new state for handle change
    const [inputValue, setInputValue]=useState("")
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setInputValue(event.target.value)
    }
    return (
        <div className='flex flex-col gap-y-4 mx-28'>
            <InputComponent
                type='date'
                value={inputValue}
                placeholder='Full Name'
                className='p-2 rounded'
                onChange={handleChange}
                autoFocus={false}
                maxLength={5}
                minLength={1}
                readOnly={false}
                required={true}
                
            />
            <InputComponent
                type='search'
                // value={inputValue}
                placeholder='@Username'
                className='p-2 rounded'
                onChange={handleChange}
                autoFocus={true}
            />
            <InputComponent
                type='password'
                // value={inputValue}
                placeholder='Enter your text'
                className='p-2 rounded'
                onChange={handleChange}
            />
            <h1>{inputValue}</h1>
        </div>
    )
}

export default Input
