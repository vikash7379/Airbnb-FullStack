"use client"

import React,{useCallback,useState} from 'react'
import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai'
import {FcGoogle} from 'react-icons\/fc'
import {FieldValues,SubmitHandler,useForm} from 'react-hook-form';
import useRegistrationModal from '../../Hooks/useRegistraionModal'
import Modals from './Modals'


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

  return (
    <Modals
      disabled={isLoading}
      isOpen={registerModal}
      title={"Register"}
      actionLabel='Continue'
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
    />
  )
}

export default RegisterModal