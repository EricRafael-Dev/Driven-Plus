import StartPage from './StartPage';
import HomePage from './HomePage';
import SignUpPage from './SignUpPage';
import SubscriptionsPage from './SubscriptionsPage';
import SubscriptionsIDPage from './SubscriptionsIDPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

export default function App() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')
    const [idPlan, setIdPlan] = useState('')
  
    return (
      <>
        
        <BrowserRouter>
  
          <Routes>
  
            <Route path='/' element={<StartPage setToken={setToken} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>} />
            <Route path='/sign-up' element={<SignUpPage />} />
            <Route path='/subscriptions/:id_do_plano' element={<SubscriptionsIDPage token={token} idPlan={idPlan}/>} />
            <Route path='/subscriptions' element={<SubscriptionsPage token={token} setIdPlan={setIdPlan}/>} />
            <Route path='/home' element={<HomePage token={token} email={email} password={password}/>} />
  
          </Routes>
  
        </BrowserRouter>
      </>
    )
  }