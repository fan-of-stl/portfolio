import { Container } from '@mui/material'
import React from 'react'
import './CardsGenerator.css'
import CardComponent from '../card/CardComponent'

const CardsGenerator = ({data, keyVal}) => {
  return (
    <Container maxWidth="xl" className='cards' key={keyVal}>
        {Object.keys(data).map(key => <CardComponent {...data[key]} heading={key}   key={key} />)}

    </Container>
  )
}

export default CardsGenerator