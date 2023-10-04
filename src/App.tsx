import { defaultTheme } from './styles/themes/default'
import {ThemeProvider} from 'styled-components'
import { Button } from './components/Button'
import { GlobalStyle } from './styles/global'

export function  App() {
  return (
   
      <ThemeProvider theme={defaultTheme}>
        <Button variant="danger"/>
        <Button variant="primary" />
        <Button variant="secundary" />
        <Button variant="sucess" />
        <Button  />



        <GlobalStyle />
      </ThemeProvider>
    
  )
}

