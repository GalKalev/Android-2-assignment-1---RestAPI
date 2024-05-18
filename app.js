const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/games', async(req, res) => {
    try{

        
        const apiRest = await fetch('https://www.freetogame.com/api/games?category=shooter&sort-by=alphabetical');
        if(!apiRest.ok){
            throw new Error(`HTTP error statys: ${apiRest.status}`);
        }

        const data = await apiRest.json();

        res.json(data);
    }catch(error){
        console.error('fetch error');
        res.status(500).send('internal sever error');
    }
});

app.listen(PORT, ()=>{
    console.log(`server is runnning http://localhost:${PORT}`);
});