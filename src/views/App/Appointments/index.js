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
        client: user.data.account.id,
        barber: null,
        hair_style: null,
        order_items: []
    }

    // Getters
    const [form, setForm] = useState(initialForm)
    // const serviceSelected = service => form.order_items.some(item => item?.id === service)
    const serviceSelected = service => form.hair_style?.id === service
    const barberSelected = barber => form.barber?.id === barber
    const timeSelected = time => form.time === time
    const checkout = {
        date: form.date,
        time: form.time,
        client: user.data.account.name || "Korisnik",
        barber: form.barber?.name,
        price: getPrice(),
        time_needed: getTimeNeeded(),
        services: form.hair_style?.name
        // services: form.order_items?.map(item => item?.name)
    }
    const canSubmit = 
        form.date !== "" &&
        form.time !== "" &&
        form.client !== null &&
        form.barber !== null &&
        form.hair_style !== null
        // form.order_items.length

    
    function getPrice(){
        // let price = 0;
        // if(form.order_items.length){
        //     const arr = [...form.order_items.map(item => +item.price)]
        //     price = arr.reduce((previousValue, currentValue) => previousValue + currentValue)
        // }
        // return price;
        return form.hair_style?.price
    }

    function getTimeNeeded() {
        // let time_needed = 0;
        // if(form.order_items.length){
        //     const arr = [...form.order_items.map(item => +item.time_needed)]
        //     time_needed = arr.reduce((previousValue, currentValue) => previousValue + currentValue)
        // }
        // return time_needed;
        return form.hair_style?.time_needed
    }

    // Setters
    function setDate(date){
        setForm(prevState => ({...prevState, date }));
    }

    function setTime(time){
        setForm(prevState => ({...prevState, time }));
    }

    function setService(hair_style){
        // if(form.order_items?.some(item => item.id === hair_style.id)){
        //     const orders = [...form.order_items]
        //     const index = form.order_items.findIndex(item => item.id === hair_style.id)
        //     orders.splice(index, 1)
        //     setOrderItems(orders)
        // }
        // else{
        //     const orders = [...form.order_items]
        //     orders.push(hair_style)
        //     setOrderItems(orders)
        // }

        setForm(prevState => ({...prevState, hair_style }));
    }

    function setBarber(barber){
        setForm(prevState => ({...prevState, barber }));
    }

    function setOrderItems(order_items){
        setForm(prevState => ({...prevState, order_items }));
    }

    function submit(){
        const { date, time, client, barber, order_items, hair_style } = form;
        // const _order_items = [];
        // order_items.forEach(element => {
        //     _order_items.push({
        //         hair_style: element.id,
        //         barber: barber.id
        //     })
        // });

        const data = {
            start_datetime: `${date} ${time}`,
            client,
            order_items: [{
                hair_style: hair_style.id,
                barber: barber.id
            }]
        }

        axios.post(`${getApiEndpoint()}barber_booking/orders/`, data, {headers: {Authorization: "Token " + user.data.token}})
            .then(res => {
                console.log("Response => ", res)
            })
            .catch(err => {
                console.log("Error => ", err)
            })
    }

    const value = { 
        form,
        checkout,
        canSubmit,
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