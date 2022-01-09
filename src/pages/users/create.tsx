import { Box, Flex, Heading, Divider, VStack, SimpleGrid, HStack, Button } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'


import Link from 'next/link'
import { Input } from '../../components/Form/Input'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome Obrigatório '),
  email: yup.string().required('Email obrigatório').email('Email deve ser válido'),
  password: yup.string().required('Senha Obrigatória').min(8, 'A senha deve conter no mínimo 8 caracteres'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'Senhas devem ser idênticas')

})


export default function CreateUser() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log(values)
  }

  return (
    <Box>
      <Header />

      <Flex w="100vw" my="6" maxWidth={1480} px="6 ">
        <Sidebar />
        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6",
            "8"]}
          onSubmit={handleSubmit(handleCreateUser)}>
          <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="name"
                label="Nome completo"
                type="text"
                {...register('name')}
                error={errors.name} />
              <Input
                name="email"
                label="Email"
                type="email"
                {...register('email')}
                error={errors.email} />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="password"
                label="Senha"
                type="password"
                {...register('password')}
                error={errors.password} />
              <Input
                name="password_confirmation"
                label="Confirme sua senha"
                type="password"
                {...register('password_confirmation')}
                error={errors.password_confirmation} />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button type="submit" colorScheme="pink" isLoading={isSubmitting}>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}