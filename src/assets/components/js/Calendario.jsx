import {useState, useEffect} from 'react'

export default function Calendario(){
    const [date, setDate]=useState(new Date());

    const meses=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]

    useEffect(()=>{
        const dateId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(dateId);
    }, []);

    const dia = date.getDate();
    const mes = meses[date.getUTCMonth()]
    const ano = date.getFullYear();

    return(
        <>
            {dia} {mes} {ano}
        </>
    )
}