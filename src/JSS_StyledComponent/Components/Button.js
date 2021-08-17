import styled from 'styled-components';


export const Button = styled.button`
    color: white;
    background-color: ${props => props.primary ? 'rgb(139, 90, 249)' : 'orange'};
    border: none;
    border-radius: 8px;
    padding: 8px 20px;
    text-align: center;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
    transition: all 0.5s ease;

    &:hover{
        color: ${props => props.primary ? 'rgb(139, 90, 249)' : 'orange'};
        background-color: white;
    }
`

export const BiggerButton = styled(Button)`
    font-size: 20px;
`

// linear-gradient(137deg, #3388ff, #a599ff, #ed79ff)