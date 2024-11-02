import { styled } from 'styled-components'

const Gradientbottom = styled.button `
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, #03E1FF, #13CDC2);
    height: 60px;
    width: 479px;
    border-radius: 9px;
    color: white;
    font-size: 12px;
    letter-spacing: 3px;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
`

export default function Button() {
    return(
        <Gradientbottom>
            <p>Записаться на ознакомительный вебинар</p>
        </Gradientbottom>
    )
}