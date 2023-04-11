import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ButtonCustom, CheckCustom, Form, InputCustom, Title } from './styled';
import { CustomInputMask } from '../inputMask';
import {  validateCNPJ } from 'validations-br';
import emailjs from '@emailjs/browser'



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
  cnpj:  yup.string().required('O CNPJ da empresa é obrigatório').test('cnpj', 'Por favor, inserir um CNPJ válido', value => validateCNPJ(value)),
  autorizoWhatsApp: yup.boolean(),
});

export function FormPJ() {

  const {
    register,
    setValue,
    reset,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: FormData) => {

       const templateParams = {
      from_razaoSocial: data.razaoSocial,
      from_phone: data.phone,
      from_email: data.email,
      from_cnpj: data.cnpj,

    }
    emailjs.send('service_vemflzy', 'template_r7rcvgf', templateParams, '9vp6ipo6uye6MTwty')

    try {
      setValue('cnpj', '');
      setValue('phone', '');
      reset();


    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    }
  };


  return (

    <Form data-aos="fade-right" onSubmit={handleSubmit(onSubmit)}>
      <Title>
        <h2>Fale conosco</h2>
        <p>Preencha o formulário e saiba mais.</p>
      </Title>

      <InputCustom>
        <label htmlFor="razaoSocial">Razão Social*</label>
        <input
        {...register('razaoSocial')} id="razaoSocial" type="text" />
        {errors.razaoSocial && <span>{errors.razaoSocial.message}</span>}
      </InputCustom>

      <InputCustom>
        <label htmlFor="cnpj">Cnpj*</label>
        <CustomInputMask mask='99.999.999/9999-99'

        {...register('cnpj')} id="cnpj" type="cnpj" />
        {errors.cnpj && <span>{errors.cnpj.message}</span>}
      </InputCustom>


      <InputCustom>
        <label htmlFor="email">E-mail*</label>
        <input {...register('email')} id="email" type="email" />
        {errors.email && <span>{errors.email.message}</span>}
      </InputCustom>

      <InputCustom>
        <label htmlFor="phone">Telefone*</label>
        <CustomInputMask mask='(99) 99999-9999'
        {...register('phone')} id="phone" type="text" />
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
