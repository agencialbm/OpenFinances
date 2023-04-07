import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ButtonCustom, CheckCustom, Form, InputCustom, Title } from './styled';

import React, { useState } from 'react';
import { useFormik } from 'formik';

type FormData = {
  name: string
  phone: string
  email: string
  endereco: string
  cpf: string
  autorizoWhatsApp: string
}

const schema = yup.object().shape({
  name: yup.string().trim().required(),
  phone: yup.string().required(),
  email: yup.string().trim().email().required(),
  endereco: yup.string().required(),
  cpf: yup
    .string()
    .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido')
    .required('CPF é obrigatório'),
  autorizoWhatsApp: yup.boolean()
});

export function FormPF() {
  const [mask, setMask] = useState('');

  const formik = useFormik({
    initialValues: { cpf: '' },
    validationSchema: schema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cpf = event.target.value.replace(/\D/g, '');
    setMask(cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'));
    formik.setFieldValue('cpf', cpf);
  };

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
        <label htmlFor="name">Nome completo*</label>
        <input {...register('name')} id="name" type="text" />
        {errors.name && <span>{errors.name.message}</span>}
      </InputCustom>
      <InputCustom>
        <label htmlFor="endereco">Endereço </label>
        <input {...register('endereco')} id="endereco" type="text" />
        {errors.endereco && <span>{errors.endereco.message}</span>}
      </InputCustom>
      <InputCustom>
        <label htmlFor="cpf">CPF</label>
        <input
          {...register('cpf')}
          id="cpf"
          type="text"
          onChange={handleCpfChange}
          value={mask}
        />
        {formik.touched.cpf && formik.errors.cpf ? (
          <div>{formik.errors.cpf}</div>
        ) : null}
        {errors.cpf && <span>{errors.cpf.message}</span>}
      </InputCustom>

      <InputCustom>
        <label htmlFor="phone">Telefone*</label>
        <input {...register('phone')} id="phone" type="text" />
        {errors.phone && <span>{errors.phone.message}</span>}
      </InputCustom>

      <InputCustom>
        <label htmlFor="email">E-mail*</label>
        <input {...register('email')} id="email" type="email" />
        {errors.email && <span>{errors.email.message}</span>}
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
