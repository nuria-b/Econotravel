import FormReservation from "./Reservation/FormReservation.jsx";
import logo from '../images/logo.png'
import { FlexRow } from "./styles/Styles.jsx";

export default function Reservation (){
    return(
        <>
            <FlexRow>
                <img src={logo} alt="Logo"/>
                <h1>Formulario de reserva</h1>
            </FlexRow>

            <FormReservation/>

            <section>

            </section>
        </>
    )
}