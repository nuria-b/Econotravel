import logo from '../images/logo.png'
import LoginForm from './InfoLogin/LoginForm.jsx'
import { FormFulfill } from './styles/Styles'
import { Link } from 'react-router-dom';

export default function Login(){
    return(
        <FormFulfill>
            <Link to='/'><img src={logo} alt="Logo"/></Link>

            <LoginForm/>
        </FormFulfill>
    )
}