import React, { useState, useContext, createContext, useEffect } from "react";
import { useAuth } from '../../../auth';
import { getApiEndpoint } from '../../../axios/endpoints';
import axios from 'axios'

// Components
import Children from './layout'

export default function Appointments(){

    // Hooks
    const { user } = useAuth()

    // Initial state
    const initialForm = {
        date: "",
        time: "",
        client: user?.data?.account?.id,
        barber: null,
        hair_style: null,
    }

    // Getters
    const [form, setForm] = useState(initialForm)
    const serviceSelected = service => form.hair_style?.id === service
    const barberSelected = barber => form.barber?.id === barber
    const timeSelected = time => form.time === time
    const checkout = {
        date: form.date,
        time: form.time,
        client: user?.data?.account?.name || "Korisnik",
        barber: form.barber?.name,
        price: form.hair_style?.price,
        time_needed: form.hair_style?.time_needed,
        services: form.hair_style?.name
    }
    const canSubmit = 
        form.date !== "" &&
        form.time !== "" &&
        form.client !== null &&
        form.barber !== null &&
        form.hair_style !== null

    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState('')
    
    // Setters
    function setDate(date){
        setForm(prevState => ({...prevState, date }));
    }

    function setTime(time){
        setForm(prevState => ({...prevState, time }));
    }

    function setService(hair_style){
        setForm(prevState => ({...prevState, hair_style }));
    }

    function setBarber(barber){
        setForm(prevState => ({...prevState, barber }));
    }

    function submit(callback){
        const { date, time, client, barber, hair_style } = form;

        const data = {
            start_datetime: `${date} ${time}+01:00`,
            client,
            order_items: [{
                hair_style: hair_style.id,
                barber: barber.id
            }]
        }

        setLoading(true)
        axios.post(`${getApiEndpoint()}barber_booking/orders/`, data, {headers: {Authorization: "Token " + user.data.token}})
            .then(res => {
                console.log("Response => ", res)
                setStatus('success')
                callback()
                setLoading(false)
            })
            .catch(err => {
                console.log("Error => ", err)
                setStatus('error')
                setLoading(false)
            })
    }

    const value = { 
        form,
        checkout,
        canSubmit,
        loading,
        status,
        setStatus,
        barber: form.barber,
        serviceSelected,
        barberSelected,
        timeSelected,
        setForm, 
        setDate,
        setTime, 
        setService, 
        setBarber,
        submit,
    } 

    return(
        <AppointmentsContext.Provider value={value}>
            <Children />
        </AppointmentsContext.Provider>
    )
}

// Creating Auth Context
let AppointmentsContext = createContext(null);

// useAppointments hook
function useAppointments() {
    return useContext(AppointmentsContext);
}

export { useAppointments }