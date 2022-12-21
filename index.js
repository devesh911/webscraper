const express = require('express');

const request = require('request-promise');

// const apiKey = '721d1a0f3c86c5f436a16a933eeecd67';
// const baseUrl = `https://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

const generateScraperUrl = (apiKey) => `https://api.scraperapi.com?api_key=${apiKey}&autoparse=true`

const app =   express();

const PORT =  process.env.PORT || 5000;

app.get('/',(req,res)=>{

res.send('Welcome to amazon web scraper');

});

app.get('/products/:productId', async (req,res) => {

   const {productId} = req.params;
   const {api_key} = req.query;
   try{

    const  response = await request(`${generateScraperUrl(api_key)}&url=https://www.amazon.com/dp/${productId}`);

    res.json(JSON.parse(response))

   }catch(error){
    
    res.json(error)

   }
   

});
app.get('/products/:productId/reviews', async (req,res) => {

   const {productId} = req.params;
   const {api_key} = req.query;

   try{

    const  response = await request(`${generateScraperUrl(api_key)}&url=https://www.amazon.com/product-reviews/${productId}`);

    res.json(JSON.parse(response))

   }catch(error){
    
    res.json(error)

   }
   

});
app.get('/products/:productId/offers', async (req,res) => {

   const {productId} = req.params;
   const {api_key} = req.query;
   try{

    const  response = await request(`${generateScraperUrl(api_key)}&url=https://www.amazon.com/gp/offer-listing/${productId}`);

    res.json(JSON.parse(response))

   }catch(error){
    
    res.json(error)

   }
   

});
app.get('/search/:searchQuery', async (req,res) => {

   const {searchQuery} = req.params;
   const {api_key} = req.query;
   try{

    const  response = await request(`${generateScraperUrl(api_key)}&url=https://www.amazon.com/s?k=${searchQuery}`);

    res.json(JSON.parse(response))

   }catch(error){
    
    res.json(error)

   }
   

});

app.listen(PORT,()=>console.log(`server is running on port localhost:${PORT}`));



