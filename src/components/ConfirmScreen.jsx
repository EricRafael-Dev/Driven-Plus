import axios from "axios"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import close from "../assets/Close.svg"

export default function ConfirmScreen(props) {
    const { plan } = props
    const { setConfirm } = props
    const { token } = props
    const membershipIds = props.membershipId
    const { cardName } = props
    const { cardNumber } = props
    const { securityNumber } = props
    const { expirationDate } = props

    const navigate = useNavigate()

    function nao() {
        setConfirm(false)
    }

    function confirm() {
        

        const config = {
            headers: {
                "Authorization": `Bearer ${ token }`
            }
        }
        const membershipId = parseInt(membershipIds.id_do_plano)

        const objeto = {
            membershipId, 
            cardName, 
            cardNumber, 
            securityNumber, 
            expirationDate
        }
        console.log(objeto, 'oi')
        const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions'
        const request = axios.post(URL, objeto, config)

        request.then(() => navigate('/home'))
        request.catch(error => alert(error.response.data.message))

        
    }

    return (
        <Background>
            <Close onClick={nao}>
                <img src={close} alt={close} />
            </Close>
            <Confirm>
                <P>Tem certeza que deseja assinar o plano {plan.data.name} (R$ {plan.data.price})?</P>
                <Buttons>
                    <Nao onClick={nao}>Não</Nao>
                    <Sim onClick={confirm}>Sim</Sim>
                </Buttons>
            </Confirm>
        </Background>
    )
}

const Close = styled.div`
    position:fixed;
    top: 30px;
    right: 35px;
`
const Background = styled.div`
    position:absolute;
    background-color: rgba(0, 0, 0, 0.7);
    z-index:1;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`

const Confirm = styled.div`
    position:fixed;
    z-index:2;
    width: 250px;
    height:210px;
    background-color:#FFFFFF;
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 700;
    border-radius:12px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    text-align:center;
`
const P = styled.p`
    width: 205px;
    margin-top:35px;
`
const Nao = styled.button`
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 700;
    color:#FFFFFF;
    background-color:#CECECE;
    width: 95px;
    height: 52px;
    border-radius:8px;
    border:none;
`

const Sim = styled.button`
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 700;
    color:#FFFFFF;
    background-color:#FF4791;
    width: 95px;
    height: 52px;
    border-radius:8px;
    border:none;
`
const Buttons = styled.div`
    display:flex;
    justify-content:space-between;
    width:205px;
    font-size: 18px;
`