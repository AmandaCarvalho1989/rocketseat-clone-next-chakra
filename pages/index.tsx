import Head from 'next/head'
import { Flex, Grid, Text, Link, Stack } from '@chakra-ui/core'

import Input from '~/components/Input'
import Button from '~/components/Button'
import Divider from '~/components/Divider'
import { MdLock, MdMail } from 'react-icons/md'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rocketseat | Login</title>
      </Head>

      <Grid
        as="main"
        height="100vh"
        templateColumns="1fr 480px 480px 1fr"
        templateRows="1fr 480px 1fr"
        templateAreas="
          '. .    .    .' 
          '. logo form .'
          '. .    .    .'
        "
        justifyContent="center"
        alignItems="center"
      >
        <Flex gridArea="logo" as="aside" flexDir="column" alignItems="flex-start">
          <img src="/rocketseat.svg" alt="Rocketseat" />

          <Text fontSize="6xl" fontWeight="bold" lineHeight="shorter" marginTop={16}>
            Faça seu login <br /> na plataforma
          </Text>
        </Flex>

        <Flex
          gridArea="form"
          height="100%"
          backgroundColor="gray.700"
          borderRadius="md"
          flexDirection="column"
          alignItems="stretch"
          padding={16}
        >
          <Stack spacing={3}>
            <Input
              name="email"
              placeholder="E-mail"
              icon={<MdMail size={20} />}
            />

            <Input
              name="password"
              placeholder="Senha"
              icon={<MdLock size={20} />}
            />
          </Stack>
          <Link
            alignSelf="flex-start"
            marginTop={2}
            fontSize="sm"
            _hover={{ color: 'purple.500' }}
            color="purple.600"
            fontWeight="bold"
            href='/forgot-password'
          >
            Esqueci minha senha
          </Link>

          <Button marginTop={6}>
            ENTRAR
          </Button>

          <Text textAlign="center" fontSize="sm" color="gray.300" marginTop={6}>
            Não tem uma conta? {' '}
            <Link
              _hover={{ color: 'purple.500' }}
              color="purple.600"
              fontWeight="bold"
              href='./register'
            >
              Registre-se
            </Link>
          </Text>

          <Divider />

          <Flex alignItems="center">
            <Text fontSize="sm">Ou entre com</Text>
            <Button
              backgroundColor="gray.600"
              flex="1"
              marginLeft={6}
              _hover={{ backgroundColor: "purple.500" }}
            >
              <Link
            // alignSelf="flex-start"
            // marginTop={2}
            // fontSize="sm"
            // _hover={{ color: 'purple.500' }}
            // color="purple.600"
            // fontWeight="bold"
            href='/news-letter'
          >
              GITHUB
          </Link>
            </Button>
          </Flex>
        </Flex>
      </Grid>
    </div>
  )
}
