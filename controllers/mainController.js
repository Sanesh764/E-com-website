const Pickup = require('../models/Pickup');
const Review = require('../models/Review');

exports.getIndex = async (req, res) => {
    try {
        const recentReviews = await Review.find()
            .populate('user', 'firstName lastName')
            .sort({ createdAt: -1 })
            .limit(3);

        res.render('pages/index', {
            title: 'E-Waste Management - Home',
            path: '/',
            reviews: recentReviews
        });
    } catch (err) {
        console.error(err);
        res.render('pages/index', {
            title: 'E-Waste Management - Home',
            path: '/',
            reviews: []
        });
    }
};

exports.getAbout = (req, res) => {
    res.render('pages/about', {
        title: 'About E-Waste Management',
        path: '/about'
    });
};

exports.getContact = (req, res) => {
    res.render('pages/contact', {
        title: 'Contact Us',
        path: '/contact'
    });
};

exports.postContact = (req, res) => {
    res.render('pages/contact', {
        title: 'Contact Us',
        path: '/contact',
        success: 'Your message has been sent successfully!'
    });
};

exports.getDashboard = async (req, res) => {
    try {
        const pickups = await Pickup.find({ user: req.session.user._id }).sort({ createdAt: -1 });

        const pickupsCount = pickups.length;
        const itemsRecycled = pickups.reduce((total, p) => total + p.items.length, 0);
        const co2Saved = itemsRecycled * 5;
        const rewardPoints = (pickupsCount * 10) + (itemsRecycled * 5);

        res.render('pages/dashboard', {
            title: 'Dashboard - E-Waste Management',
            path: '/dashboard',
            user: req.session.user,
            pickups: pickups,
            stats: {
                pickupsCount,
                itemsRecycled,
                co2Saved,
                rewardPoints
            }
        });
    } catch (err) {
        console.error(err);
        res.render('pages/dashboard', {
            title: 'Dashboard - E-Waste Management',
            path: '/dashboard',
            user: req.session.user,
            pickups: [],
            error: 'Could not fetch your data',
            stats: { pickupsCount: 0, itemsRecycled: 0, co2Saved: 0, rewardPoints: 0 }
        });
    }
};
