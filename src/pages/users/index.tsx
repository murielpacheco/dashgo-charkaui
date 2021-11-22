import { Box, Flex, Heading, Button, Icon, Table, Thead, Tbody, Tr, Th, Checkbox, Td, Text } from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'

import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/Sidebar'

export default function Users() {
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
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink"></Checkbox>
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td p="6">
                  <Checkbox colorScheme="pink"></Checkbox>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Muriel Pacheco</Text>
                    <Text fontSize="sm" color="gray.300">murieldps@gmail.com</Text>
                  </Box>
                </Td>
                <Td>22 de Novembro 2021</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    cursor="pointer"
                    leftIcon={<Icon
                      as={RiPencilLine}
                      fontSize="16" />}>
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}