import React from 'react'
import { Hero } from '../Component/Hero/Hero'
import { Popular } from '../Component/Popular/Popular'
import { Offers } from '../Component/Offers/Offers'
import { NewCollections } from '../Component/NewCollection/NewCollections'
import { NewLetters } from '../Component/NewLetters/NewLetters'
import { Footer } from '../Component/Footer/Footer'

export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewLetters/>
    </div>
  )
}
