import {useState, useEffect} from 'react'

export default function Relogio(){
    const [time, setTime]=useState(new Date());

    useEffect(()=>{
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    if(time.getMinutes() < 10){

    }

    const hora = time.getHours()
    const minutos= time.getMinutes()

    return(
        <>
            {hora}:{minutos.toString().padStart(2, '0')}
        </>
    )
}