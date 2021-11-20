import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisborder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2021-11-15T00:00:00.000Z',
      '2021-11-16T00:00:00.000Z',
      '2021-11-17T00:00:00.000Z',
      '2021-11-18T00:00:00.000Z',
      '2021-11-19T00:00:00.000Z',
      '2021-11-20T00:00:00.000Z',
      '2021-11-21T00:00:00.000Z',
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  },
  colors: ['#ec41d0']

}
const series = [
  { name: 'series1', data: [10, 31, 40, 18, 5, 25, 50] }
]
const series2 = [
  { name: 'series1', data: [5, 13, 11, 22, 25, 24, 30] }
]

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100vw" my="6" maxWidth={1480} px="6 ">
        <Sidebar />
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box p="8" bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">Inscritos da semana</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>

          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">Taxa de abertura</Text>
            <Chart options={options} series={series2} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}