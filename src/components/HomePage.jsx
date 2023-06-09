import axios from "axios"
import { useEffect, useState } from "react"
import person from "../assets/person.png"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"

export default function HomePage(props) {
    const { email } = props
    const { password } = props
    const [resposta, setResposta] = useState(null)
    const { token } = props
    const config = {
            headers: {
                "Authorization": `Bearer ${ token }`
            }
        }

    const navigate = useNavigate()

    useEffect(() => {
        const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/auth/login'
        const request = axios.post(URL, { email, password })

        request.then((resposta) => {
            setResposta(resposta);
        })
        request.catch(error => alert(error.response.data.message))
    }, [])


    

    function deletePlan() {
        const request = axios.delete('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions', config)
        request.then(() => navigate('/subscriptions'))
        request.catch(error => alert(error.response.data.message))
    }


    if (resposta === null) {
        return (
            <p>Carregando...</p>
        )
    } else {


        const beneficio = resposta.data.membership.perks.map(beneficio =>
            <a href={beneficio.link} target="_blank">
                <Button>{beneficio.title}</Button>
            </a>
        )
        console.log(resposta)
        return (
            <div>
                <NavBar>
                    <Logo src={resposta.data.membership.image} alt={resposta.data.membership.image} />
                    <Person src={person} alt={person} />
                </NavBar>
                <Body>
                    <Title>Olá, {resposta.data.name}</Title>

                    <ButtonsPerk>
                        {beneficio}
                    </ButtonsPerk>

                    <Buttons>
                        <Button>Mudar plano</Button>
                        <ButtonRed onClick={deletePlan}>Cancelar plano</ButtonRed>
                    </Buttons>

                </Body>
            </div>
        )
    }
}


const NavBar = styled.div`
    width: 320px;
    display:flex;
    justify-content:space-between;
    margin-top: 25px;
    height: 70px;
`

const Logo = styled.img`
    width: 70px;
`

const Person = styled.img`
    width: 34px;
    height: 34px;
`

const Title = styled.h1`
    font-family: 'Roboto';
    font-size: 24px;
    font-weight: 700;
    color: #FFFFFF;
`

const Body = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

const Buttons = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    position: fixed;
    bottom:5px;
`

const ButtonsPerk = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:50px;
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
    margin-bottom: 5px;
`
const ButtonRed = styled.button`
    width: 300px;
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 700;
    background-color: #FF4747;
    color: #FFFFFF;
    height: 52px;
    border-radius: 8px;
    margin-bottom: 5px;
`