const express = require('express')
const app = express();

app.get('/orders', (req , res)=> {
res.json([{orderId: 101, userId: 1, amount: 500}]);
});
app.listen(4000 ,() => console.log('Order Service running on port 4000'));
