import styled from "styled-components"
import React, { useState } from "react"
import driven_logo from "../assets/driven_white.png"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function StartPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    function login(event) {
        event.preventDefault();
        
        const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/auth/login'
        const request = axios.post(URL, {email, password})

        request.then((resposta) => ((resposta.data.membership == null) ? (navigate('/subscriptions')) : (navigate('/home'))))
        request.catch(error => alert(error.response.data.message))
    }

    return (
        <div>
            <Page>
                <Img src={driven_logo} alt="logo_driven_plus" />
                <LoginInputs onSubmit={login}>
                    <Input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />

                    <Input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />

                    <Button type="submit">ENTRAR</Button>
                    <Link to="/sign-up"><Span>Não possui uma conta? Cadastre-se</Span></Link>
                </LoginInputs>
            </Page>
        </div>
    )
}

const Img = styled.img`
    width: 300px;
`


const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 130px;
`

const LoginInputs = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`

const Input = styled.input`
    width: 300px;
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

const Span = styled.span`
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 400;
    color:#FFFFFF;
    text-decoration: underline;
`
