import React from 'react'
import { useForm } from 'react-hook-form'

export default function FormHook() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data2) => console.log(data2)

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register('example')} />

      {/* include validation with required or other standard HTML validation rules */}
      <input
        placeholder="Ingrese nombre de usuario"
        name="usuario"
        {...register('usuario')}
      />

      <input type="submit" />
    </form>
  )
}
