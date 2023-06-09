import StartPage from './StartPage';
import HomePage from './HomePage';
import SignUpPage from './SignUpPage';
import SubscriptionsPage from './SubscriptionsPage';
import SubscriptionsIDPage from './SubscriptionsIDPage';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {

    axios.defaults.headers.common['Authorization'] = '';
  
    
    return (
      <>
        
        <BrowserRouter>
  
          <Routes>
  
            <Route path='/' element={<StartPage />} />
            <Route path='/sign-up' element={<SignUpPage />} />
            <Route path='/subscriptions/:id_do_plano' element={<SubscriptionsIDPage />} />
            <Route path='/subscriptions' element={<SubscriptionsPage />} />
            <Route path='/home' element={<HomePage />} />
  
          </Routes>
  
        </BrowserRouter>
      </>
    )
  }