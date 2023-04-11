import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ButtonCustom, CheckCustom, Form, InputCustom, Title } from './styled';
import { CustomInputMask } from '../inputMask';
import {  validateCPF } from 'validations-br';
import emailjs from '@emailjs/browser'


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
  cpf: yup.string().required('CPF é obrigatório').test('cpf', 'Por favor, inserir um CPF válido', value => validateCPF(value)),
  autorizoWhatsApp: yup.boolean()
});

export function FormPF() {

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
      from_name: data.name,
      from_phone: data.phone,
      from_email: data.email,
      from_endereco: data.endereco,
      from_cpf: data.cpf,
    }
    emailjs.send('service_vemflzy', 'template_wr3s29b', templateParams, '9vp6ipo6uye6MTwty')
    try {
     
     reset();
     setValue('phone', '');
     setValue('cpf', '');

    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    } finally{


    }
  }



  return (
    <Form  data-aos="fade-right"  onSubmit={handleSubmit(onSubmit)}>
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

        <CustomInputMask mask="999.999.999-99"
          {...register('cpf')}
          id="cpf"
          type="text"
        />
        {errors.cpf && <span>{errors.cpf.message}</span>}
      </InputCustom>

      <InputCustom>
        <label htmlFor="phone">Telefone*</label>
        <CustomInputMask mask="(99) 99999-9999"
        {...register('phone')} id="phone" type="text" />
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
