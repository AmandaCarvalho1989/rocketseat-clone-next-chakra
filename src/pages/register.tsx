import Head from "next/head";
import {
  Flex,
  Grid,
  Text,
  Link,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Stack,
} from "@chakra-ui/core";
// import { Icon } from '@chakra-ui/react'
// import {FiArrowLeft} from 'react-icons/fi'

// import {ArrowBackIcon} from '@chakra-ui/icons'
import Input from "~/src/components/Input";
import Button from "~/src/components/Button";
import {
  MdDescription,
  MdKeyboardBackspace,
  MdLock,
  MdMail,
  MdPerson,
  MdStore,
} from "react-icons/md";
import logo from "../assets/rocketseat-logo.png";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Rocketseat | Cadastro</title>
      </Head>

      <Tabs variant="unstyled" mt={16}>
        <TabList ml={180}>
          <Tab
            _selected={{
              color: "white",
              fontWeight: "bold",
              borderBottom: "3px solid",
              borderBottomColor: "purple.600",
            }}
            outline="none"
            fontSize={18}
            color="gray.200"
          >
            Aluno
          </Tab>
          <Tab
            _selected={{
              color: "white",
              fontWeight: "bold",
              borderBottom: "3px solid",
              borderBottomColor: "purple.600",
            }}
            color="gray.200"
            fontSize={18}
          >
            Empresa
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid
              as="main"
              templateColumns="1fr 480px 480px 1fr"
              templateRows="1fr 600px 1fr"
              templateAreas="
          '. .    .    .' 
          '. form logo .'
          '. .    .    .'
        "
              columnGap="20"
              rowGap="2"
              justifyContent="center"
              alignItems="center"
            >
              <Flex
                gridArea="form"
                height="auto"
                backgroundColor="gray.700"
                borderRadius="md"
                flexDirection="column"
                alignItems="stretch"
                padding={16}
              >
                <Text fontSize="2xl" fontWeight="bold" mb="6">
                  {" "}
                  Crie sua conta
                </Text>
                <Stack spacing={3}>
                  <Input
                    name="email"
                    placeholder="Seu email"
                    icon={<MdMail size={20} />}
                  />
                  <Input
                    name="name"
                    placeholder="Seu nome"
                    icon={<MdPerson size={20} />}
                  />

                  <Input
                    name="password"
                    placeholder="Sua senha"
                    isPassword={true}
                    icon={<MdLock size={20} />}
                  />

                  <Input
                    name="password_confirmation"
                    placeholder="Confirme sua senha"
                    isPassword={true}
                    icon={<MdLock size={20} />}
                  />
                </Stack>

                <Text
                  textAlign="center"
                  fontSize="sm"
                  color="gray.300"
                  marginTop={6}
                >
                  Ao se registrar, você aceita nossos
                  <Link
                    _hover={{ color: "purple.500" }}
                    color="purple.600"
                    fontWeight="bold"
                  >
                    {" "}
                    termos de uso{" "}
                  </Link>
                  e a nossa
                  <Link
                    _hover={{ color: "purple.500" }}
                    color="purple.600"
                    fontWeight="bold"
                  >
                    {" "}
                    política de privacidade
                  </Link>
                </Text>

                <Button marginTop={6}> CADASTRAR </Button>
              </Flex>
              <Flex
                gridArea="logo"
                as="aside"
                flexDir="column"
                alignItems="flex-start"
              >
                <img src={logo} alt="Rocketseat" />

                <Text
                  fontSize="4xl"
                  fontWeight="bold"
                  lineHeight="shorter"
                  marginTop={16}
                >
                  Mais de 200 mil <br />
                  boosters já estão
                  <br /> conectados.
                </Text>
                <Text
                  fontSize="lg"
                  lineHeight="shorter"
                  marginTop={8}
                  color="gray.400"
                >
                  Junte-se a milhares de devs e acelere na direção dos
                  <br /> seus objetivos.
                </Text>

                <Box
                  mt="8"
                  color="purple.600"
                  display="flex"
                  alignItems="center"
                >
                  <MdKeyboardBackspace size={20} />
                  <Link fontWeight="bold" href="/" ml={4}>
                    {" "}
                    Voltar para login
                  </Link>
                </Box>
              </Flex>
            </Grid>
          </TabPanel>
          <TabPanel>
            <Grid
              as="main"
              templateColumns="1fr 480px 480px 1fr"
              templateRows="1fr 600px 1fr"
              templateAreas="
          '. .    .    .' 
          '. form logo .'
          '. .    .    .'
"
              justifyContent="center"
              alignItems="center"
              columnGap="20"
              rowGap="2"
            >
              <Flex
                gridArea="form"
                height="auto"
                backgroundColor="gray.700"
                borderRadius="md"
                flexDirection="column"
                alignItems="stretch"
                padding={16}
              >
                <Text fontSize="2xl" fontWeight="bold" mb="6">
                  {" "}
                  Cadastro de empresa
                </Text>

                <Stack spacing={3}>
                  <Input
                    name="cnpj"
                    placeholder="CNPJ"
                    icon={<MdDescription size={20} />}
                  />
                  <Input
                    name="name"
                    placeholder="Nome da sua empresa"
                    icon={<MdStore size={20} />}
                  />

                  <Input
                    name="email"
                    placeholder="Email"
                    icon={<MdMail size={20} />}
                  />
                </Stack>

                <Text
                  textAlign="center"
                  fontSize="sm"
                  color="gray.300"
                  marginTop={6}
                >
                  Ao se registrar, você aceita nossos
                  <Link
                    _hover={{ color: "purple.500" }}
                    color="purple.600"
                    fontWeight="bold"
                  >
                    {" "}
                    termos de uso{" "}
                  </Link>
                  e a nossa
                  <Link
                    _hover={{ color: "purple.500" }}
                    color="purple.600"
                    fontWeight="bold"
                  >
                    {" "}
                    política de privacidade
                  </Link>
                </Text>

                <Button marginTop={6}> CADASTRAR </Button>
              </Flex>
              <Flex
                gridArea="logo"
                as="aside"
                flexDir="column"
                alignItems="flex-start"
              >
                <img src={logo} alt="Rocketseat" />

                <Text
                  fontSize="4xl"
                  fontWeight="bold"
                  lineHeight="shorter"
                  marginTop={16}
                >
                  Pré-cadastro para <br /> empresas
                </Text>
                <Text
                  fontSize="lg"
                  lineHeight="shorter"
                  marginTop={8}
                  color="gray.400"
                >
                  Após informar seu interesse seu pedido será <br />
                  analisado por nossa equipe e entraremos em contato <br />
                  para novos passos.
                </Text>
                <Box
                  mt="8"
                  color="purple.600"
                  display="flex"
                  alignItems="center"
                >
                  <MdKeyboardBackspace size={20} />
                  <Link fontWeight="bold" href="/" ml={4}>
                    {" "}
                    Voltar para login
                  </Link>
                </Box>
              </Flex>
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
