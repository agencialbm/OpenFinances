import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ButtonCustom, CheckCustom, Form, InputCustom, Title } from './styled';

import React, { useState } from 'react';


type FormData = {
  razaoSocial: string
  phone: string
  email: string
  cnpj: string
  autorizoWhatsApp: string
}

const schema = yup.object().shape({
  razaoSocial: yup.string().trim().required(),
  phone: yup.string().required(),
  email: yup.string().trim().email().required(),
  cnpj: yup.string().required(),
  autorizoWhatsApp: yup.boolean(),
});

export function FormPJ() {



  const {
    register,
    setValue,
    formState: { errors, isValid }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });



  return (

    <Form >
      <Title>
        <h2>Fale conosco</h2>
        <p>Preencha o formulário e saiba mais.</p>
      </Title>

      <InputCustom>
        <label htmlFor="razaoSocial">Razão Social*</label>
        <input {...register('razaoSocial')} id="razaoSocial" type="text" />
        {errors.razaoSocial && <span>{errors.razaoSocial.message}</span>}
      </InputCustom>

      <InputCustom>
        <label htmlFor="cnpj">Cnpj*</label>
        <input {...register('cnpj')} id="cnpj" type="cnpj" />
        {errors.cnpj && <span>{errors.cnpj.message}</span>}
      </InputCustom>


      <InputCustom>
        <label htmlFor="email">E-mail*</label>
        <input {...register('email')} id="email" type="email" />
        {errors.email && <span>{errors.email.message}</span>}
      </InputCustom>

      <InputCustom>
        <label htmlFor="phone">Telefone*</label>
        <input {...register('phone')} id="phone" type="text" />
        {errors.phone && <span>{errors.phone.message}</span>}
      </InputCustom>


      <CheckCustom>
        <input
          type="checkbox"
          {...register('autorizoWhatsApp')}
          onChange={e =>
            setValue('autorizoWhatsApp', e.target.checked.toString())
          }
        />
        <label>Autorizo receber informações pelo WhatsApp</label>
        {errors.autorizoWhatsApp && (
          <span>{errors.autorizoWhatsApp.message}</span>
        )}
      </CheckCustom>

      <ButtonCustom type="submit" disabled={!isValid}>
        Enviar
      </ButtonCustom>
    </Form>
  );
}
