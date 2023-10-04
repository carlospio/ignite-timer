import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secundary' | 'danger' | 'sucess';

interface ButtonContainerProps{
    variant: ButtonVariant;
}


const buttonVariant = {
    'primary' : 'purple',
    'secundary': 'orange',
    'danger': 'red',
    'sucess': 'green',

}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100%;
    height: 40px;

    background-color: ${props => props.theme['green-500']};

    color: ${props=>props.theme['white']};


    /* ${props => {
        return `background-color: ${buttonVariant[props.variant]}`
    }} */


`