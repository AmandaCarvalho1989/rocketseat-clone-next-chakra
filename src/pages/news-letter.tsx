import { Flex, Text, Image } from '@chakra-ui/core'

import Input from '~/src/components/Input'
import Button from '~/src/components/Button'
import { FormEvent, useState } from 'react'
import axios from 'axios'

export default function NewsLetter() {

    const [email, setEmail] = useState('')

    function handleSignUpToNewsletter(event: FormEvent) {
        event.preventDefault()

        axios.post('/api/subscribe', { email })
    }
    ``

    return (
        <Flex
            as="main"
            height="100vh"
            justifyContent="center"
            alignItems="center"
        >
            <Flex
                as="form"
                onSubmit={handleSignUpToNewsletter}
                backgroundColor="gray.700"
                borderRadius="md"
                flexDir="column"
                alignItems="stretch"
                padding={8}
                marginTop={4}
                width="100%"
                maxW="400px"
            >
                <Image marginBottom={8} src="/rocketseat.svg" alt="Rocketseat" />

                <Text textAlign="center" fontSize="md" color="gray.300" marginBottom={2}>
                    Assine a newsletter da Rocketseat e receba os melhores conteúdos sobre programação!
      </Text>

                <Input
                    placeholder="Seu melhor e-mail"
                    marginTop={2}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    name='email'
                />

                <Button
                    type="submit"
                    backgroundColor="purple.500"
                    height="50px"
                    borderRadius="sm"
                    marginTop={6}
                    _hover={{ backgroundColor: 'purple.600' }}
                >
                    INSCREVER
      </Button>
            </Flex>
        </Flex>
    )
}


//MONGODB_URI=mongodb+srv://youtube:youtube@cluster0.yufjn.mongodb.net/news?retryWrites=true&w=majority