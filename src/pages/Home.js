import React from 'react';
// import HomeHeader from '../components/HomeHeader';
import Sail2 from '../components/sail2';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import BestOfferCard from '../components/BestOfferCard';
// import InfoCard from '../components/InfoCard'
import HomeDestinations from '../components/HomeDestinations';
import Testimonials from '../components/Testimonials';
import Upcoming from '../components/Upcoming';
import Contact from '../components/Contact';
function Home() {
  return (
    <div>
      <Banner />
      <BestOfferCard />
      <HomeDestinations />
      <Upcoming />
      <Sail2 />
      <Testimonials />
      <Contact />
      <div style={{marginBottom:"70px"}}></div>
      <Footer />
    </div>
  )
}

export default Home