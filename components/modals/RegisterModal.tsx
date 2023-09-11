"use client"

import React,{useCallback,useState} from 'react'
import axios from 'axios'
import {FieldValues,SubmitHandler,useForm} from 'react-hook-form';
import useRegistrationModal from '../../Hooks/useRegistraionModal'
import Modals from './Modals'
import Heading from '../Heading'
import Input from '../inputs/Input'


const RegisterModal = () => {

  const registerModal = useRegistrationModal();
  const [isLoading,setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState : {
      errors,
    }
  } = useForm<FieldValues> ({
    defaultValues : {
      name : "",
      email : "",
      password : "",
    }
  });

  const onSubmit :  SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios.post('/api/register', data)
      .then(()=>{
        registerModal.onClose();
      })
      .catch((error)=>{
        console.log(error)
      })
      .finally(()=>{
        setIsLoading(false);
      })
  }


  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading
        title='Welcome to Airbnb'
        subtitle='create an account'
      />
      <Input
        id='email'
        label='email'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
   )

  return (
    <Modals
      disabled={isLoading}
      isOpen={registerModal}
      title={"Register"}
      actionLabel='Continue'
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body ={bodyContent}
    />
  )
}

export default RegisterModal