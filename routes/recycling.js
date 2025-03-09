const express = require('express');
const router = express.Router();

// Recycling main page
router.get('/', (req, res) => {
  res.render('pages/recycling/index', {
    title: 'E-Waste Recycling',
    path: '/recycling'
  });
});

// Recycling centers page
router.get('/centers', (req, res) => {
  // In a real application, this data would come from a database
  const centers = [
    {
      id: 1,
      name: 'EcoTech Recycling Center',
      address: '123 Green Street, Eco City',
      phone: '(123) 456-7890',
      hours: 'Mon-Fri: 9am-5pm, Sat: 10am-2pm',
      acceptedItems: ['Computers', 'Phones', 'Tablets', 'TVs', 'Batteries']
    },
    {
      id: 2,
      name: 'GreenCycle E-Waste Facility',
      address: '456 Earth Avenue, Sustainable Town',
      phone: '(987) 654-3210',
      hours: 'Mon-Sat: 8am-6pm',
      acceptedItems: ['Computers', 'Printers', 'Monitors', 'Keyboards', 'Cables']
    },
    {
      id: 3,
      name: 'TechReclaim Center',
      address: '789 Recycle Road, Green Valley',
      phone: '(555) 123-4567',
      hours: 'Mon-Fri: 10am-7pm, Sat-Sun: 11am-4pm',
      acceptedItems: ['All electronic devices', 'Batteries', 'Light bulbs']
    }
  ];
  
  res.render('pages/recycling/centers', {
    title: 'Recycling Centers',
    path: '/recycling/centers',
    centers: centers
  });
});

// Pickup request page
router.get('/pickup', (req, res) => {
  res.render('pages/recycling/pickup', {
    title: 'Schedule a Pickup',
    path: '/recycling/pickup'
  });
});

// Process pickup request
router.post('/pickup', (req, res) => {
  // In a real application, you would process the form data here
  // For now, just redirect back to the pickup page with a success message
  res.render('pages/recycling/pickup', {
    title: 'Schedule a Pickup',
    path: '/recycling/pickup',
    success: 'Your pickup request has been submitted successfully!'
  });
});

module.exports = router; 