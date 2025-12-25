const express = require('express');
const app = express();
const port = 3000;

// Sample shoe data
const shoes = [
    { id: 1, name: 'Nike Air Max', price: 120, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Adidas Superstar', price: 80, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Converse Chuck Taylor', price: 60, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Vans Old Skool', price: 70, image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Reebok Classic', price: 90, image: 'https://via.placeholder.com/150' },
];

// Middleware to parse JSON requests
app.use(express.json());

// API route to get all shoes
app.get('/api/shoes', (req, res) => {
    res.json(shoes);
});

// API route to get a shoe by ID
app.get('/api/shoes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const shoe = shoes.find(shoe => shoe.id === id);
    if (!shoe) {
        res.status(404).json({ message: 'Shoe not found' });
    } else {
        res.json(shoe);
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});