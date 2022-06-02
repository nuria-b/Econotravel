import FormReservation from "./FormReservation.jsx";
import logo from '../images/logo.png'

export default function Reservation (){
    return(
        <>
            <section>
                <img src={logo} alt="Logo"/>
                <h1>Formulario de reserva</h1>
            </section>

            <FormReservation/>

            <section>

            </section>
        </>
    )
}