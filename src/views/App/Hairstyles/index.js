import React from 'react'

// Components
import PageTitle from '../../../components/PageTitle'

export default function Hairstyles(){
    return(
        <div>
            <PageTitle />
            <div>Scroll test</div>
            <div style={{ minHeight: 500, backgroundColor: '#dadada' }} />
            <div style={{ minHeight: 500, backgroundColor: '#aeaeae' }} />
            <div style={{ minHeight: 500, backgroundColor: '#dadada' }} />
        </div>
    )
}