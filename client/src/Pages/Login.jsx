import logo from '../images/logo.png'
import  LoginForm from '../components/Login/LoginForm.jsx'
import { FormFulfill } from '../components/styles/Styles'
import { Link } from 'react-router-dom';

export default function Login(){
    return(
        <FormFulfill>
                <Link to='/'><img src={logo} alt="Logo"/></Link>

                <LoginForm/>
        </FormFulfill>
    )
}