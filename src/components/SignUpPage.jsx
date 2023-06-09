import styled from "styled-components"
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


export default function SignUpPage() {
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    function signUp(event) {
        event.preventDefault();
        
        const newUser = {email, name, cpf, password}
        console.log(newUser)

        const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up'
        const request = axios.post(URL, newUser)

        request.then(() => navigate('/'))
        request.catch((error) => alert(error.response.data.message))
    }

    return (
        <LoginInputs onSubmit={signUp}>
            <Input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={e => setName(e.target.value)}
                required
            />

            <Input
                type="number"
                placeholder="CPF"
                value={cpf}
                onChange={e => setCpf(e.target.value)}
                required
            />

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

            <Button type="submit">CADASTRAR</Button>
            <Link to="/"><Span>Já possuí uma conta? Entre</Span></Link>
        </LoginInputs>
    )
}

const LoginInputs = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 140px;
    width:100%;
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

