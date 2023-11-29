// Payment.js
import { CiCreditCard1 } from "react-icons/ci";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useState } from 'react';
import Header from "./Header";
import {
  Button,
  TextField,
  Grid,
  Container,
  Typography,
  Card,
  CardContent,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Payment = () => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [country, setCountry] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [postCode, setPostCode] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [cardholderName, setCardholderName] = useState('');

  const countries = ['USA', 'Canada', 'UK', 'Australia', 'Germany', 'France', 'Other'];

  const handlePayment = () => {
    // Handle payment logic (this is just a placeholder)
    console.log('Processing payment...');
  };

  return (
    <div className="pay h-[97vh]">
    <Header/>
    <Link to={"/cart"}>
        <FaRegArrowAltCircleLeft className="absolute text-black top-12 text-3xl ml-1 " /></Link>
    <div className='flex mb-[177px] ml-28'>
       
        <div>
        <Container className=' mt-16'>
      <Card className='w-[500px] h-[400px] '>
        <CardContent className=''>
        <Typography variant="h5" gutterBottom className=" text-center">
            Customer Information
          </Typography>
          <form>
          <div className="w-full py-2 ">
                {/* Customer Information */}
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Customer Name"
                      variant="outlined"
                      fullWidth
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Customer Phone"
                      variant="outlined"
                      fullWidth
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel id="country-label">Country</InputLabel>
                      <Select
                        labelId="country-label"
                        id="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      >
                        {countries.map((country) => (
                          <MenuItem key={country} value={country}>
                            {country}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Address 1"
                      variant="outlined"
                      fullWidth
                      value={address1}
                      onChange={(e) => setAddress1(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Address 2"
                      variant="outlined"
                      fullWidth
                      value={address2}
                      onChange={(e) => setAddress2(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} className='py-4'>
                    <TextField
                      label="Post Code"
                      variant="outlined"
                      fullWidth
                      value={postCode}
                      onChange={(e) => setPostCode(e.target.value)}
                    />
                  </Grid>
                </Grid>
                {/* Product Information */}
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Product Name"
                      variant="outlined"
                      fullWidth
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Product Price"
                      variant="outlined"
                      fullWidth
                      value={productPrice}
                      onChange={(e) => setProductPrice(e.target.value)}
                    />
                  </Grid>
                </Grid>
                </div>
          </form>
        </CardContent>
      </Card>
    </Container>
        </div>
    <Container className=' mt-16'>
      <Card className='w-[500px] h-[400px]'>
        <CardContent>
          <form>
            <div className="w-full ">
            {/* Payment Information */}
            <Typography variant="h5" gutterBottom style={{ marginTop: '10px' }} className=" text-center">
              Payment Information
            </Typography>
            <Grid container spacing={2} >
              <Grid item xs={12} sm={12} className=" relative">
                <TextField
                  placeholder='2555 2555 2555 2555'
                  variant="outlined"
                  fullWidth
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
                <button className="absolute right-3 top-5 text-gray-500 text-2xl mt-3"><CiCreditCard1 /></button>
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  label="Expiry Date"
                  variant="outlined"
                  fullWidth
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  label="CVV"
                  variant="outlined"
                  fullWidth
                  value={cvv}
                  onChange={(e) => setCVV(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Cardholder Name"
                  variant="outlined"
                  fullWidth
                  value={cardholderName}
                  onChange={(e) => setCardholderName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handlePayment}
                  style={{ marginTop: '20px' }}
                >
                  Pay Now
                </Button>
              </Grid>
            </Grid>
            </div>
          </form>
        </CardContent>
      </Card>
    </Container>
    </div>
    <Footer/>
    </div>
  );
};

export default Payment;
