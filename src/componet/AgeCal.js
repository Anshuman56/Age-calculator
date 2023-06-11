import arrow from './../images/icon-arrow.svg'
import './AgeCal.css'
import { useState } from 'react'
function AgeCal() {
    const [year, setYear] = useState('')
    const [month, setMonth] = useState('')
    const [day, setDay] = useState('')
    const [showYear, setShowYear] = useState('--')
    const [showMonth, setShowMonth] = useState('--')
    const [showDays, setShowDays] = useState('--')
    const [dayError, setDayError] = useState('')
    const [monthError, setMonthError] = useState('')
    const [yearError, setYearError] = useState('')


    function handelChangeYear(e) {
        setYear(e.target.value)
    }
    function handelChangeMonth(e) {
        setMonth(e.target.value)
    }
    const handleChangeDay = (event) => {
        setDay(event.target.value);
    };

    function handelSubmit(e) {
        e.preventDefault();
        if (!year || !month || !day) {
            setDayError('This field is requard')
            setMonthError('This field is requard')
            setYearError('This field is requard')
            setShowDays('--')
            setShowMonth('--')
            setShowYear('--')
            return;
        }

        const birthDay = new Date(year, month - 1, day)
        const currentDay = new Date()

        const ageInMilliseconds = currentDay - birthDay
        const ageInYears = Math.floor(ageInMilliseconds / 31557600000); // Approximate number of milliseconds in a year
        const ageInMonths = Math.floor((ageInMilliseconds % 31557600000) / 2629800000); // Approximate number of milliseconds in a month
        const ageInDays = Math.floor(((ageInMilliseconds % 31557600000) % 2629800000) / 86400000); // Approximate number of milliseconds in a day
        setShowYear(ageInYears)
        setShowMonth(ageInMonths)
        setShowDays(ageInDays)
        setDay('')
        setMonth('')
        setYear('')
        setDayError('')
        setMonthError('')
        setYearError('')
    }


    return (
        <div className='contaner'>
            <form className='form' onSubmit={handelSubmit} >
                <div className='contaner__top'>
                    <div className='text__box'>
                        <label >Day
                            <input type="text" placeholder="DD" value={day} onChange={handleChangeDay}></input></label>
                        {dayError && <div className='error__msg'>{dayError}</div>}
                    </div>
                    <div className='text__box'>
                        <label>Month
                            <input type="text" placeholder="MM" value={month} onChange={handelChangeMonth}></input></label>
                        {monthError && <div className='error__msg'>{monthError}</div>}
                    </div>
                    <div className='text__box'>
                        <label>year
                            <input type="text" placeholder="YYYY" value={year} onChange={handelChangeYear}></input></label>
                        {yearError && <div className='error__msg'>{yearError}</div>}
                    </div>
                </div>
                <button className='button' type='submit'><img className='arrow__icon' src={arrow} alt=''></img></button>
            </form>
            <div className='contaner__bottom'>

                <p><span>{showYear}</span> years</p>
                <p><span>{showMonth}</span> months</p>
                <p><span>{showDays}</span> days</p>

            </div>
        </div>
    )
}
export default AgeCal