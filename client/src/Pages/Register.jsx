import logo from '../images/logo.png'
import RegisterForm from '../components/Register/RegisterForm.jsx'
import { FormFulfill } from '../components/styles/Styles'
import { Link } from 'react-router-dom';


export default function Register(){
    return(
        <FormFulfill>
                <Link to='/'><img src={logo} alt="Logo"/></Link>

                <RegisterForm/>
        </FormFulfill>
    )
}