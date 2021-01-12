import { fireEvent, render, waitFor } from '@testing-library/react'
import ThemeContainer from '../../contexts/theme/ThemeContainer'
import Input from '../../components/Input'


describe('Input component', () =>{
  it('should be able render input component', () =>{

    const {  getByPlaceholderText} = render(
    <ThemeContainer>
      <Input name='email' placeholder='E-mail'/>
      </ThemeContainer>
      )

      expect(getByPlaceholderText('E-mail')).toBeTruthy()
  })

  it('should render highlight on input focus', async () =>{

    const {  getByPlaceholderText, getByTestId} = render(
    <ThemeContainer>
      <Input name='email' placeholder='E-mail'/>
      </ThemeContainer>
      )

      const inputElement = getByPlaceholderText('E-mail')

      fireEvent.focus(inputElement)

      await waitFor(()=>{
        expect(getComputedStyle(inputElement).getPropertyValue('border-color')).toEqual('rgba(255,255,255,0.16)')
      })

  })
})