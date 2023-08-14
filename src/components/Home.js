import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
  return (
    <Container>
      <Section
        title='Model S'
        description='Order Online for Touchless Delivery'
        backgroundImg='model-s.jpg'
        leftBtnText='custom order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Model X'
        description='Order Online for Touchless Delivery'
        backgroundImg='model-x.jpg'
        leftBtnText='custom order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Model Y'
        description='Order Online for Touchless Delivery'
        backgroundImg='model-y.jpg'
        leftBtnText='custom order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Model 3'
        description='Order Online for Touchless Delivery'
        backgroundImg='model-3.jpg'
        leftBtnText='custom order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Roadster'
        description='Order Online for Touchless Delivery'
        backgroundImg='roadster.jpg'
        leftBtnText='custom order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Cybertruck'
        description='Order Online for Touchless Delivery'
        backgroundImg='cybertruck.jpg'
        leftBtnText='custom order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Lowest Cost Solar Panels in India'
        description='Money-back guarantee'
        backgroundImg='solar-panel.jpg'
        leftBtnText='Order now'
        rightBtnText='Learn more'
      />
      <Section
        title='Solar for New Roofs'
        description='Solar Roof Cost Less Than a New Roof Plus a Solar Panels'
        backgroundImg='solar-roof.jpg'
        leftBtnText='Order now'
        rightBtnText='Learn more'
      />
      <Section
        title='Accessories' 
        backgroundImg='accessories.jpg'
        leftBtnText='Order now'

      />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height = 100vh;
`