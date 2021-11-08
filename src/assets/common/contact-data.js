import { useEffect, useState } from "react";


export function GetContactData () {
    const [aboutus, setAboutus] = useState()
    const [phone, setPhone] = useState()
    const [schedule, setSchedule] = useState()
    const [email, setEmail] = useState()
    
    setAboutus('[FALTA INFORMACION DEL EMPRENDIMIENTO]')
    setPhone('+56 9 9238 7070')
    setSchedule('Lunes a sabado: 9.00 a 21.00 hrs.')
    setEmail('piamanicura@gmail.com')

    const contactData = { 'aboutus': aboutus, 'phone': phone, 'schedule': schedule, 'email': email }
    return contactData
}
