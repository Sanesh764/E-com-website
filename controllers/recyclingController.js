const Pickup = require('../models/Pickup');

const centers = [
    {
        id: 0,
        name: 'Patna Green E-Waste Solutions',
        address: 'Plot No. 12, Pataliputra Industrial Estate, Patna, Bihar 800013',
        phone: '+91 612 234 5678',
        email: 'contact@patnagreen.com',
        website: 'https://www.patnagreen.com',
        hours: 'Monday - Saturday: 9:00 AM - 7:00 PM',
        acceptedItems: ['Computers', 'Laptops', 'Monitors', 'Printers', 'Mobile Phones', 'Tablets', 'Televisions', 'Batteries'],
        certifications: ['BSPCB Authorized', 'ISO 14001'],
        description: 'The premier e-waste recycling facility in Bihar, ensuring safe and eco-friendly disposal of electronics.',
        image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
        latitude: 25.611,
        longitude: 85.144
    },
    {
        id: 1,
        name: 'EcoRecycle India',
        address: 'Plot No. 45, Okhla Industrial Area, Phase III, New Delhi, Delhi 110020',
        phone: '+91 11 2345 6789',
        email: 'info@ecorecycleindia.com',
        website: 'https://www.ecorecycleindia.com',
        hours: 'Monday - Saturday: 9:00 AM - 6:00 PM',
        acceptedItems: ['Computers', 'Laptops', 'Monitors', 'Printers', 'Mobile Phones', 'Tablets', 'Televisions', 'Batteries'],
        certifications: ['CPCB Authorized', 'ISO 14001'],
        description: 'EcoRecycle India is a leading e-waste management company in Delhi NCR, authorized by the Central Pollution Control Board.',
        image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
        latitude: 28.5355,
        longitude: 77.2625
    },
    {
        id: 2,
        name: 'E-Waste Recyclers India',
        address: 'Shed No. 12, Bommasandra Industrial Area, Bengaluru, Karnataka 560099',
        phone: '+91 80 4123 4567',
        email: 'contact@ewasterecyclers.in',
        website: 'https://www.ewasterecyclers.in',
        hours: 'Monday - Saturday: 9:30 AM - 6:30 PM',
        acceptedItems: ['Computers', 'Laptops', 'Monitors', 'Printers', 'Mobile Phones', 'Tablets', 'Televisions', 'Batteries', 'Appliances'],
        certifications: ['KSPCB Authorized', 'R2 Certified'],
        description: 'E-Waste Recyclers India provides comprehensive recycling solutions for IT parks and corporate offices in Bengaluru.',
        image: 'https://images.unsplash.com/photo-1567177662154-dfeb4c93b6ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
        latitude: 12.8245,
        longitude: 77.6896
    }
];

exports.getCenters = (req, res) => {
    res.render('pages/recycling/centers', {
        title: 'Recycling Centers - E-Waste Management',
        path: '/recycling/centers',
        centers: centers
    });
};

exports.getCenterDetail = (req, res) => {
    const center = centers.find(c => c.id === parseInt(req.params.id));

    if (!center) {
        return res.redirect('/recycling/centers');
    }

    res.render('pages/recycling/center-detail', {
        title: `${center.name} - E-Waste Management`,
        path: '/recycling/centers',
        center: center
    });
};

exports.getPickup = (req, res) => {
    res.render('pages/recycling/pickup', {
        title: 'Schedule Pickup - E-Waste Management',
        path: '/recycling/pickup'
    });
};

exports.postPickup = async (req, res) => {
    try {
        const {
            firstName, lastName, email, phone,
            address, city, state, zip, addressNotes,
            items, itemDetails,
            pickupDate, pickupTime, pickupNotes
        } = req.body;

        const itemsArray = Array.isArray(items) ? items : [items];

        const pickupData = {
            user: req.session.user ? req.session.user._id : null,
            firstName,
            lastName,
            email,
            phone,
            address,
            city,
            state,
            zip,
            addressNotes,
            items: itemsArray,
            itemDetails,
            pickupDate: new Date(pickupDate),
            pickupTime,
            pickupNotes,
            status: 'Pending'
        };

        const newPickup = new Pickup(pickupData);
        await newPickup.save();

        res.render('pages/recycling/pickup', {
            title: 'Schedule Pickup - E-Waste Management',
            path: '/recycling/pickup',
            success: 'Your pickup has been scheduled successfully! We will contact you shortly to confirm.'
        });
    } catch (err) {
        console.error(err);
        res.render('pages/recycling/pickup', {
            title: 'Schedule Pickup - E-Waste Management',
            path: '/recycling/pickup',
            error: 'An error occurred while scheduling your pickup. Please try again.'
        });
    }
};
