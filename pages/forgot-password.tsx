import { Flex, Text, Image, Stack, Link } from '@chakra-ui/core'

import Input from '~/components/Input'
import Button from '~/components/Button'
import { useState } from 'react'
import { MdMail } from 'react-icons/md'
import Head from 'next/head'

export default function ForgotPassword() {

    const [email, setEmail] = useState('')

    function handleResetPassword() {

    }
    return (
        <div>
            <Head>
                <title>Rocketseat | Esqueci senha</title>
            </Head>
            <Flex
                as="main"
                height="100vh"
                justifyContent="center"
                alignItems="center"
            >
                <Flex
                    as="form"
                    onSubmit={handleResetPassword}
                    borderRadius="md"
                    flexDir="column"
                    alignItems="stretch"
                    padding={8}
                    marginTop={4}
                    width="100%"
                    maxW="400px"
                >

                    <Text textAlign="center" fontSize="3xl" fontWeight='bold' color="gray.300" marginBottom={2}>
                        Recuperar senha
      </Text>
                    <Text textAlign="center" fontSize="md" color="gray.300" marginBottom={6}>
                        Enviaremos as intruções para a redefinição da sua senha no seu email.
      </Text>

                    <Input
                        placeholder="Seu melhor e-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        name='email'
                        icon={<MdMail size={20} />}
                    />

                    <Button
                        type="submit"
                        backgroundColor="purple.500"
                        height="50px"
                        borderRadius="sm"
                        marginTop={6}
                        marginBottom={6}
                        _hover={{ backgroundColor: 'purple.600' }}
                    >
                        RECUPERAR
      </Button>
                    <Link _hover={{ color: 'gray.500' }}
                        color="gray.400"
                        textAlign='center'
                        fontSize={14}
                        href='/'>
                        Voltar
      </Link>
                </Flex>
            </Flex>
        </div>
    )
}
