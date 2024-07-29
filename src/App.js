import './App.css';
import Selling from '../src/Components/BestSellingProducts/Selling.jsx';
import Categories from '../src/Components/Categories/Categories.jsx';
import Arrival from './Components/Arrival/Arrival.jsx';
import Delievery from './Components/Delievery/Delievery.jsx';
import Exclusive from './Components/ExclusiveSection/Exclusive.jsx';
import ExploreProducts from './Components/ExploreOurProduct/ExploreProducts.jsx';
import MusicEnhance from './Components/MusicEnhance/MusicEnhance.jsx';
import SalesTimer from './Components/SalesTimer/SalesTimer.jsx';
import Shop from './Components/ShopNow/Shop.jsx';
import TopHeader from './Components/TopHeader/TopHeader.jsx';
import Footer from '../src/Components/Footer/Footer.jsx';
import {BrowserRouter} from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import Signup from './Components/Signup/Signup.jsx';
import Login from './Components/Login/Login.jsx';
import {useState} from 'react'
import WishList from './Components/Wishlist/WishList.jsx';
import Cart from './Components/Cart/Cart.jsx';
import BillingDetails from './Components/BillingDetails/BillingDetails.jsx';
import Account from './Components/Account/Account.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Error from './Components/Error/Error.jsx';
import ProductDetail from './Components/ProductDetailPage/ProductDetail.jsx';
import GameElectronic from './Components/Product-Gaming-Electronic-Section/GameElectronic.jsx';
function App() {
  const [data,setData]=useState({
    name:'',
    email:'',
    password:''
})
const [data1,setData1]=useState({
  Email:"",
  Password:""
})
  const [operation,setOpeartion]=useState([])
  const [operation1,setOpeartion1]=useState([])
  const [wishlist,setWishList]=useState([])
  const [cart,setCart]=useState([]);
  const [billing,setBilling]=useState([])
  const [billingsTotal,setBillingsTotal]=useState()
  const [active,setActive]=useState("")
  return (
    <>
    <BrowserRouter>
    <TopHeader/>
    <Exclusive operation1={operation1} wishlist={wishlist} cart={cart} />
    <Routes>
      <Route path='/' element={<>
    <Shop/>
    <SalesTimer setCart={setCart} setWishList={setWishList}/>
    <Categories/>
    <Selling setWishList={setWishList}/>
    <MusicEnhance/>
    <ExploreProducts setCart={setCart}  setWishList={setWishList}/>
    <Arrival/>
    <Delievery/>
      </>}  />
    <Route path='/about' element={<>
        <About/>
      <Delievery/>
      </> 
         }  />
         
     <Route path='/contact' element={ <Contact/> } />    
     <Route path='/signup' element={<Signup data={data} setData={setData} setOpeartion={setOpeartion} />}  />
     <Route path="/login" element={<Login data1={data1} setData1={setData1} operation={operation}  setOpeartion1={setOpeartion1} />} />
     <Route path='/wishlist' element={ <WishList wishlist={wishlist} setWishList={setWishList} setCart={setCart}/> } />
     <Route path="/cart" element={<Cart cart={cart} setCart={setCart} billing={billing} setBilling={setBilling} billingsTotal={billingsTotal} setBillingsTotal={setBillingsTotal} active={active} setActive={setActive}/>} />
     <Route path='/billing' element={<BillingDetails  cart={cart} billing={billing} setBilling={setBilling} billingsTotal={billingsTotal} setBillingsTotal={setBillingsTotal}   />}/>
     <Route path='/account' element={<Account  operation1={operation1} />} />
     <Route path='/productDetail'  element={<ProductDetail setCart={setCart} setWishList={setWishList}/>} />
     <Route path='/gameelectronic/:category' element={<GameElectronic/>}/>
     <Route path="*" element={<Error/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
