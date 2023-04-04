import { ContainerTermos } from './styled'
import { useState, useEffect } from 'react'

export function TermosCookies() {
  const [acceptTermos, setAcceptTermos] = useState<boolean>(() => {
    const acceptTermosFromSessionStorage = sessionStorage.getItem('acceptTermos')
    return acceptTermosFromSessionStorage
      ? JSON.parse(acceptTermosFromSessionStorage)
      : false
  })

  useEffect(() => {
    sessionStorage.setItem('acceptTermos', JSON.stringify(acceptTermos));

    // // Define um listener para o evento beforeunload
    // const handleBeforeUnload = () => {
    //   sessionStorage.setItem('acceptTermos', JSON.stringify(acceptTermos));
    // }
    // window.addEventListener('beforeunload', handleBeforeUnload);

    // // Remove o listener quando o componente é desmontado
    // return () => {
    //   window.removeEventListener('beforeunload', handleBeforeUnload);
    // }
  }, [acceptTermos])

  const handleAcceptTermos = () => {
    setAcceptTermos(true)
  }

  return (
    <>
      {!acceptTermos && (
        <ContainerTermos>
          <p>
            Usamos cookies para garantir que você obtenha a melhor experiência
            em nosso site. Ao clicar em Aceitar , você concorda que podemos usar
            esses cookies. Clique em
            <a
              href="https://drive.google.com/file/d/11mliZoxv58yTZ2y1VvHHoG6FyW6LDjqW/view?usp=drivesdk"
              target="_blank"
              rel="noreferrer"
            >
              políticas de privacidade
            </a>
            para consultar mais informações.
          </p>

          <button onClick={handleAcceptTermos}>Aceitar</button>
        </ContainerTermos>
      )}
    </>
  )
}
