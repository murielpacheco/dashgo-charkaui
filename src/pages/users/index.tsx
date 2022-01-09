import { Box, Flex, Heading, Button, Icon, Table, Thead, Tbody, Tr, Th, Checkbox, Td, Text, useBreakpointValue, Spinner } from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'

import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/Sidebar'

import Link from 'next/link'
import { useQuery } from 'react-query'

export default function Users() {
  const { data, isLoading, error } = useQuery('users', async () => {
    const response = await fetch('http://localhost:3000/api/users')
    const data = await response.json()

    return data
  })


  const isWideVersion = useBreakpointValue({ //hook do chakra para determinar responsividade
    base: false,
    lg: true,
  })


  return (
    <Box>
      <Header />

      <Flex w="100vw" my="6" maxWidth={1480} px="6 ">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p='8'>
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                cursor="pointer"
                leftIcon={<Icon
                  as={RiAddLine}
                  fontSize="20"
                />}>
                Criar novo usuário
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner></Spinner>
            </Flex>
          ) : error ? (
            <Text>Falha na obtenção de dados dos usuários.</Text>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={["4", "4", "6"]} color="gray.300" width="8">
                      <Checkbox colorScheme="pink" ml={["2", "2", "0"]}></Checkbox>
                    </Th>
                    <Th>Usuário</Th>
                    {isWideVersion && <Th>Data de cadastro</Th>}
                    <Th width="8"></Th>
                  </Tr>
                </Thead>
                <Tbody>

                </Tbody>
              </Table>
              {data.users.map(user  => {
                return (
                  <Tr key={user.id}>
                    <Td p="6">
                      <Checkbox colorScheme="pink"></Checkbox>
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">{user.name}</Text>
                        <Text fontSize="sm" color="gray.300">{user.email}</Text>
                      </Box>
                    </Td>
                    {isWideVersion && <Td>{user.createdAt}</Td>}
                  </Tr>
                )
              })}
              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}