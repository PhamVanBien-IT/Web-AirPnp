import React , {Fragment} from 'react'
import './App.css';
import Navbar from './component/navbar/Navbar';
import Banner from './component/banner/Banner';
import Search from './component/search/Search';
import Explore from './component/explore/Explore';
import Adventures from './component/adventures/Adventures';
import Booking from './component/booking/Booking';
import Gallery from './component/gallery/Gallery';
import Address from './component/address/Address';
import Footer from './component/footer/Footer';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Banner />
      <Search />
      <Explore />
      <Adventures />
      <Booking />
      <Gallery />
      <Address />
      <Footer />
    </Fragment>
  );
}

export default App;
