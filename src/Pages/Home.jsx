import React from 'react'
import Header from '../Components/Header'
import NavBar from '../Components/NavBar'
import Recipes from '../Components/Recipes'
import Footer from '../Components/Footer'

function Home() {
  return (
    <main className='w-full flex flex-col'>
      <NavBar/>
      <Header title = { <p>Teste the World with <br/>FlavorVerse!</p>} type='home'/>

      <section id="recipes" className='md:max-w-[1440px] mx-auto px-4 md:px-20'>
        <Recipes/>
      </section>

      <Footer/>
    </main>
  )
}

export default Home