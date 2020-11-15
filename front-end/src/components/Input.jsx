import React, { useRef } from 'react';
import { useField } from '@unform/core';
import { useEffect } from 'react';

export default function Input({name, ...rest}){
  const inputRef = useRef(null);
  const {fieldName, registerField, error} = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  },[fieldName, registerField,])

  return (
    <input ref={inputRef} {...rest}  />
  )
}


