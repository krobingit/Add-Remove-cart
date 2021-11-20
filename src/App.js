import './App.css';
import * as React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import { CardActions } from '@mui/material';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import RemoveIcon from '@mui/icons-material/Remove';
function App() {
   const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -5,
    top: -10,
    border: `2px solid ${theme.palette.background.paper}`,
      padding: '4px 4px',
      fontSize:"1rem",
  },
  }));
  const products = [{
  prod:"iPhone",befDis:"50000",price:"20000",rating:3.5,img:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MHL63?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1623349246000"
  }, {
      prod: "One Plus 9R", befDis: "45000", price: "34000", rating: 4, img: "https://m.media-amazon.com/images/I/61PDbUd1VaL._SL1500_.jpg",
    },
   { prod:"Vivo V20",befDis:"30000",price:"24000",rating:4.5,img:"https://www.gizmochina.com/wp-content/uploads/2020/09/Vivo-V20.jpg",
    },
    { prod: "Poco F3 GT", befDis: "35000", price: "27000", rating: 4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4_SiAlj_DWymHWkRBDG9xjwwcShdtTNvQeqvr1UD6IbYMiQf6E8WNBRdYA5S-U2pE2EE&usqp=CAU", },
    { prod: "Asus Rog 5", befDis: "55000", price: "40000", rating: 4.5, img: "https://fdn2.gsmarena.com/vv/pics/asus/asus-rog-phone-5-1.jpg", },
  ]


  const style = { color: "white" }
  const [cartValue,setCartValue]=useState(0)
  return (
    <div className="App">
        <nav className="navbar">
        <h2 className="title">Online-Shopping</h2>
        <Button style={style} variant="text">Home</Button>
        <Button style={style} variant="text">About</Button>
<Button
        style={style} id="fade-button"
        aria-controls="fade-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Products
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Product Category 1</MenuItem>
        <MenuItem onClick={handleClose}>Product Category 2</MenuItem>
        <MenuItem onClick={handleClose}>Product Category 3</MenuItem>
      </Menu>

        <IconButton sx={style} variant="contained" style={{ height: "2.5rem",marginLeft: "8rem" }}
        >Cart <ShoppingCartIcon /><StyledBadge badgeContent={cartValue} color="secondary"></StyledBadge></IconButton>
      </nav>
      <img className="Wallpaper" alt="shopping-wallpaper" src="https://png.pngtree.com/background/20210711/original/pngtree-discounts-black-friday-background-picture-image_1155655.jpg"/>
      <Product products={products} cartValue={cartValue} setCartValue={setCartValue}/>
    </div>
  );
}
function CartBox({ prod, befDis, price, img, rating, cartValue, setCartValue, index }) {
  //displays AddtoCart and Remove from Cart
  const [addToCart, setAddToCart] = useState(true);
  //displays
  const [addItems,setAddItems]=useState(false);


  return (
    <section className="Box">
    <Card sx={{background:"rgba( 144, 19, 254, 0.15)",margin:"0.5rem",padding:"0.5rem",maxWidth:"13rem",borderRadius:"0.5rem"}}>
        <img className="productImage" alt="product" src={img} />
      <CardContent>
          <h3 className="prodtitle">{prod}</h3>
          <h4 className="detail"><span className="detail discount">₹ {befDis}</span> ₹ {price}</h4>
        <Rating name="product-rating" value={rating} precision={0.5} readOnly/>
      </CardContent>
        <CardActions sx={{display:"flex",flexDirection:"column",justifyContent:"center",padding:"0 0 1rem 0"}}>
          <Button variant="contained" color="secondary" onClick={() => {
            setAddToCart(!addToCart)
            { addToCart ? setCartValue(cartValue + 1) : setCartValue(cartValue > 0 ? cartValue=0 : cartValue=0) }
            { addToCart ? setAddItems(true) : setAddItems(false) }
          console.log(index)
          }}>{addToCart ? "Add To Cart" : "Remove from Cart"}</Button>
{addItems ? <div>
            <Button sx={{color:"purple"}} onClick={()=>setCartValue(cartValue+1)}><PlusOneIcon/></Button>
   <Button sx={{color:"purple",fontSize:"1.5rem"}} onClick={() => setCartValue(cartValue > 0 ? cartValue - 1 : cartValue=0)}> <RemoveIcon/> </Button> </div> : ""}
        </CardActions>
      </Card>
      </section>

)

}
function Product({products,cartValue,setCartValue}){
return(
  <section className="ProductPage">
    {products.map(({ prod, befDis, price, img, rating },index) =>
      <CartBox cartValue={cartValue} key={index} setCartValue={setCartValue} prod={prod} rating={rating} befDis={befDis} price={price} img={img} index={index}/>)}
  </section>
)

}
export default App;
