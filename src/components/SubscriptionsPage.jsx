import styled from "styled-components"
import silver from "../assets/Group 1.png"
import gold from "../assets/Group 2.png"
import platiumn from "../assets/Group 3.png"
import { Link } from "react-router-dom"

export default function SubscriptionsPage() {
    return (
        <Div>
            <Title>Escolha seu Plano</Title>

            <Link>
                <Plan>
                    <Img src={silver} alt={silver} />
                    <p>R$ 39,99</p>
                </Plan>
            </Link>

            <Link>
                <Plan>
                    <Img src={gold} alt={gold} />
                    <p>R$ 69,99</p>
                </Plan>
            </Link>

            <Link>
                <Plan>
                    <Img src={platiumn} alt={platiumn} />
                    <p>R$ 99,99</p>
                </Plan>
            </Link>
            
        </Div>
    )
}
const Div = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;   
`

const Title = styled.h1`
    font-family:'Roboto';
    font-size:32px;
    font-weight:700;
    color:#FFFFFF;
    margin-top:30px;
    margin-bottom:25px;
`
const Plan = styled.div`
    width:290px;
    height:180px;
    border:3px solid #7E7E7E;
    color:#FFFFFF;
    border-radius:12px;
    display:flex;
    align-items:center;
    justify-content:space-around;
    font-family:'Roboto';
    font-size:24px;
    font-weight:700;
    margin-bottom:10px;
`

const Img = styled.img`
    width:140px;
`
//img width 140px