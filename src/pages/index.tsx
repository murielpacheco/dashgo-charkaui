import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../components/Form/Input'

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('Email obrigatório').email('Email deve ser válido'),
  password: yup.string().required('Senha Obrigatória '),
})

export default function SignIn() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(signInFormSchema)
  })


  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => { // func that handles user auth
    await new Promise(resolve => setTimeout(resolve, 1000))
    event.preventDefault()
    console.log(values)
  }

  console.log(errors)

  return (
    <Flex
      w="100%"
      h="100%"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        mt="36"
        width="100%"
        maxWidth={360}
        bg='gray.800'
        p="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            type="email"
            name="email"
            label="E-mail"
            {...register('email')}
            error={errors.email} />
          <Input
            type="password"
            name="password"
            label="Password"
            {...register('password')}
            error={errors.password} />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={isSubmitting}
        >Entrar</Button>
      </Flex>
    </Flex >
  )
}
