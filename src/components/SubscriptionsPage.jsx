import styled from "styled-components"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

export default function SubscriptionsPage(props) {

    const { token } = props

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    const [plans, setPlans] = useState([])

    const { idPlan } = useParams()
    console.log(idPlan);

    useEffect(() => {
        const request = axios.get('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships', config)
        request.then(resposta => (setPlans(resposta.data)))
    }, [])


    const plan = plans.map(plan =>
        <Link to={`/subscriptions/${plan.id}`} key={plan.id}>
            <Plan>
                <Img src={plan.image} alt={plan.image} />
                <p>R$ {plan.price}</p>
            </Plan>
        </Link>)



    return (
        <Div>
            <Title>Escolha seu Plano</Title>

            {plan}

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