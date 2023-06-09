import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import ConfirmScreen from "./ConfirmScreen"

export default function SubscriptionsIDPage(props) {

    const { token } = props

    const config = {
        headers: {
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUyOSwiaWF0IjoxNjg2MzMwMzQ4fQ.ib8AqECv-YaiDXkBZ70Fghm3e7a_s50lgjrMzL_pbWM`
        }
    }
    const membershipId = useParams()


    const [plan, setPlan] = useState(null)
    const [cardName, setCardName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [securityNumber, setSecurityNumber] = useState('')
    const [expirationDate, setExpirationDate] = useState('')
    const [confirm, setConfirm] = useState(false)

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${membershipId.id_do_plano}`, config)
        request.then(resposta => setPlan(resposta))
        request.catch(error => alert(error.response.data.message))
    }, [])


    function signIn(event) {
        event.preventDefault();

        setConfirm(true)
        
        return console.log(confirm)
        
    }


    if (plan === null) {
        return (
            <p>Carregando...</p>
        )
    } else {
        const perk = plan.data.perks.map((perk, position) => (<Paragrafy key={perk.id}> {position + 1}. {perk.title}</Paragrafy>))
        return (
            <div>
                {(confirm === true) ? (<ConfirmScreen plan={plan} setConfirm={setConfirm} token={token} membershipId={membershipId} cardName={cardName} cardNumber={cardNumber} securityNumber={securityNumber} expirationDate={expirationDate}/>) : (null)}
                <Body>
                    <div>
                        <Img src={plan.data.image} alt={plan.data.image} />
                        <Title>{plan.data.name}</Title>
                    </div>

                    <Div>
                        <SubTitle>Benefícios</SubTitle>
                        <div>
                            {perk}
                        </div>

                        <SubTitle>Preço</SubTitle>
                        <div>
                            <Paragrafy>R$ {plan.data.price} cobrados mensalmente</Paragrafy>
                        </div>
                    </Div>

                    <LoginInputs onSubmit={signIn}>
                        <Input
                            type="text"
                            placeholder="Nome impresso no cartão"
                            value={cardName}
                            onChange={e1 => setCardName(e1.target.value)}
                            required
                        />

                        <Input
                            type="number"
                            placeholder="Digitos do cartão"
                            value={cardNumber}
                            onChange={e2 => setCardNumber(e2.target.value)}
                            required
                        />

                        <Security>
                            <SelfInput
                                type="number"
                                placeholder="Código de segurança"
                                value={securityNumber}
                                onChange={e3 => setSecurityNumber(e3.target.value)}
                                required
                            />
                            <SelfInput
                                type="text"
                                placeholder="Validade"
                                value={expirationDate}
                                onChange={e4 => setExpirationDate(e4.target.value)}
                                required
                            />
                        </Security>

                        <Button type="submit">ASSINAR</Button>
                    </LoginInputs>

                </Body></div>
        )
    }

}


const Body = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    margin-top:50px;
`

const Div = styled.div`
    width:300px;
    margin-top:5px;
`
const Img = styled.img`
    width:140px;
`

const Title = styled.h1`
    font-family: 'Roboto';
    font-size: 32px;
    font-weight: 700;
    color:#FFFFFF;
    margin-top: 15px;
`

const SubTitle = styled.h2`
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 400;
    color:#FFFFFF;
    margin-bottom:10px;
    margin-top:20px;
`

const Paragrafy = styled.p`
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 300;
    color:#FFFFFF;
    margin-bottom:3px;
`

const LoginInputs = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`

const Input = styled.input`
    width: 300px;
    height: 52px;
    border-radius: 8px;
    margin-bottom: 10px;
`
const SelfInput = styled.input`
    width: 146px;
    height: 52px;
    border-radius: 8px;
    margin-bottom: 10px;
`

const Button = styled.button`
    width: 300px;
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 700;
    background-color: #FF4791;
    color: #FFFFFF;
    height: 52px;
    border-radius: 8px;
    margin-bottom: 25px;
`

const Security = styled.div`
    display:flex;
    width:300px;
    justify-content:space-between
`