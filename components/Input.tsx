import React, { forwardRef, useCallback, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { Box, Input as ChakraInput, InputProps as ChakraInputProps, InputGroup, InputLeftElement, Button, InputRightElement } from '@chakra-ui/core';
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { IconType } from 'react-icons/lib';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  icon?: JSX.Element;
  isPassword?: boolean;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, type, icon, label,
  isPassword = false,
  ...rest }, ref) => {

  const [hiddePassword, setHiddePassword] = useState(true)
  const handleClick = () => setHiddePassword(!hiddePassword)

  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleBlur = useCallback(() => {
    setIsFocused(false)
  }, [])
  return (

    <Box alignItems='center' display='flex' position='relative'>
      {icon &&
        <InputLeftElement
          pointerEvents="none"
          children={icon}
          width='50px'
          height='50px'
          color={!isFocused ? '#28272C' : '#6b46c1'}
        />
      }
      <ChakraInput
        name={name}
        ref={ref}
        type={type}
        height="50px"
        backgroundColor="gray.800"
        focusBorderColor="purple.500"
        borderRadius="sm"
        paddingLeft={icon ? '12': '5'}
        onFocus={handleFocus}
        onBlur={handleBlur}

        {...rest}
      />
      {/* {isPassword &&
        <InputRightElement width="4.5rem">
          <Button size="md" onClick={handleClick} >
            {hiddePassword ? <FiEye /> : <FiEyeOff />}
          </Button>
        </InputRightElement>
      } */}
    </Box>
  );
}

export default forwardRef(Input);