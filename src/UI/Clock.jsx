import React, {useState, useEffect} from 'react'

const Clock = () => {
    
    const [days, setDays] = useState()
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()
    let interval
    

    const countdown = ()=>{
        
        const destination = new Date('Jan 13, 2023').getTime()
        
        interval = setInterval(() => {
            const now = new Date().getTime()
            const diff = destination - now

            const days = Math.floor(diff/(1000*60*60*24))
            const hours = Math.floor(diff % (1000*60*60*24) / (1000*60*60))
            const minutes = Math.floor(diff % (1000*60*60) / (1000*60))
            const seconds = Math.floor(diff % (1000*60) / (1000))

            if(destination<0){

                clearInterval(interval.current)
            
            }else{
            
                setDays(days)
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
            
            }
        }, );
    }

    useEffect(() => {
        countdown()

    // eslint-disable-next-line
    }, [])
    

  return (
    <div className="main-wrapper d-flex align-items-center mb-3 gap-3">
        <div className='countdown-wrapper d-flex align-items-center gap-3'>
            <div className='text-center'>
                <h2>{days}</h2>
                <h6>Days</h6>
            </div>
            <span className='fs-3'>:</span>
        </div>
        <div className='countdown-wrapper d-flex align-items-center gap-3'>
            <div className='text-center'>
                <h2>{hours}</h2>
                <h6>Hours</h6>
            </div>
            <span className='fs-3'>:</span>
        </div><div className='countdown-wrapper d-flex align-items-center gap-3'>
            <div className='text-center'>
                <h2>{minutes}</h2>
                <h6>Minutes</h6>
            </div>
            <span className='fs-3'>:</span>
        </div><div className='countdown-wrapper d-flex align-items-center gap-3'>
            <div className='text-center'>
                <h2>{seconds}</h2>
                <h6>Seconds</h6>
            </div>
        </div>
    </div>
  )
}

export default Clock