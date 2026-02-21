const Review = require('../models/Review');

exports.getReviews = async (req, res) => {
    try {
        const reviews = await Review.find().populate('user', 'firstName lastName').sort({ createdAt: -1 });

        let averageRating = 0;
        if (reviews.length > 0) {
            const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
            averageRating = (totalRating / reviews.length).toFixed(1);
        }

        res.render('pages/reviews', {
            title: 'User Reviews - E-Waste Management',
            path: '/reviews',
            reviews: reviews,
            averageRating: averageRating,
            totalReviews: reviews.length
        });
    } catch (err) {
        console.error(err);
        res.render('pages/error', {
            title: 'Error',
            path: '/reviews',
            error: {
                status: 500,
                message: 'Could not fetch reviews'
            }
        });
    }
};

exports.postReview = async (req, res) => {
    try {
        const { rating, comment } = req.body;

        const newReview = new Review({
            user: req.session.user._id,
            rating: parseInt(rating),
            comment
        });

        await newReview.save();
        res.redirect('/reviews');
    } catch (err) {
        console.error(err);
        res.redirect('/reviews');
    }
};

exports.getEditReview = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);

        if (!review || review.user.toString() !== req.session.user._id) {
            return res.redirect('/reviews');
        }

        res.render('pages/reviews-edit', {
            title: 'Edit Review - E-Waste Management',
            path: '/reviews',
            review: review
        });
    } catch (err) {
        console.error(err);
        res.redirect('/reviews');
    }
};

exports.postEditReview = async (req, res) => {
    try {
        const { rating, comment } = req.body;
        const review = await Review.findById(req.params.id);

        if (!review || review.user.toString() !== req.session.user._id) {
            return res.redirect('/reviews');
        }

        review.rating = parseInt(rating);
        review.comment = comment;
        await review.save();

        res.redirect('/reviews');
    } catch (err) {
        console.error(err);
        res.redirect('/reviews');
    }
};

exports.deleteReview = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);

        if (!review || review.user.toString() !== req.session.user._id) {
            return res.redirect('/reviews');
        }

        await Review.findByIdAndDelete(req.params.id);
        res.redirect('/reviews');
    } catch (err) {
        console.error(err);
        res.redirect('/reviews');
    }
};
