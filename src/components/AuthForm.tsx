'use client';

import React, {useCallback, useState} from 'react';
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import Input from './Input';
import Button from './Button';
import AuthSocailButton from './AuthSocailButton';
import {BsGithub, BsGoogle} from 'react-icons/bs';

type Variant = 'LOGIN' | 'Register';
const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('Register');
    } else {
      setVariant('LOGIN');
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === 'Register') {
      // axios register
    }
    if (variant === 'LOGIN') {
      //nextAuth sign in
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    //nextauth social sign in
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 p-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === 'Register' && (
            <Input
              id="name"
              label="Name"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
          )}
          <Input
            id="email"
            label="Email address"
            type="email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Button disabled={isLoading} fullWidth type="submit">
            {variant === 'LOGIN' ? 'Sign in' : 'Register'}
          </Button>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="flex items-center">
              <div className="w-full border-t border-gray-300"></div>
              <div className="absolute inset-x-0 flex justify-center text-sm ">
                <span className="bg-white px-2 text-gray-500 ">
                  or continue with
                </span>
              </div>
            </div>
            <div className="mt-6 flex gap-2">
              <AuthSocailButton
                icon={BsGithub}
                onClick={() => socialAction('github')}
              />
              <AuthSocailButton
                icon={BsGoogle}
                onClick={() => socialAction('github')}
              />
            </div>
          </div>
          <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
            <div className="">
              {variant === 'LOGIN'
                ? 'New To Messenger'
                : 'Already have an account?'}
            </div>
            <div className="underline cursor-pointer" onClick={toggleVariant}>
              {variant === 'LOGIN' ? 'Create an account' : 'Login'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
