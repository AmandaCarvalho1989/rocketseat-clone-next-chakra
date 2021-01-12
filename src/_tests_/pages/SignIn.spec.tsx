import { render } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import ThemeContainer from '../../contexts/theme/ThemeContainer'
import SignIn from '../../pages/index'


describe('Sign In Page', () =>{
  it('should be able to sign in', () =>{

    const { debug} = render(<ThemeContainer><SignIn/></ThemeContainer>)

    debug()
  })
})