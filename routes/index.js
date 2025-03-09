const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
  res.render('pages/index', {
    title: 'E-Waste Management - Home',
    path: '/'
  });
});

// About page route
router.get('/about', (req, res) => {
  res.render('pages/about', {
    title: 'About E-Waste Management',
    path: '/about'
  });
});

// Contact page route
router.get('/contact', (req, res) => {
  res.render('pages/contact', {
    title: 'Contact Us',
    path: '/contact'
  });
});

// Process contact form
router.post('/contact', (req, res) => {
  // In a real application, you would process the form data here
  // For now, just redirect back to the contact page with a success message
  res.render('pages/contact', {
    title: 'Contact Us',
    path: '/contact',
    success: 'Your message has been sent successfully!'
  });
});

// Login page route
router.get('/login', (req, res) => {
  res.render('pages/login', {
    title: 'Login - E-Waste Management',
    path: '/login'
  });
});

// Process login form
router.post('/login', (req, res) => {
  // In a real application, you would authenticate the user here
  // For now, just redirect to the dashboard with a success message
  res.redirect('/dashboard');
});

// Registration page route
router.get('/register', (req, res) => {
  res.render('pages/register', {
    title: 'Register - E-Waste Management',
    path: '/register'
  });
});

// Process registration form
router.post('/register', (req, res) => {
  // In a real application, you would create a new user account here
  // For now, just redirect to the login page with a success message
  res.render('pages/login', {
    title: 'Login - E-Waste Management',
    path: '/login',
    success: 'Your account has been created successfully! Please log in.'
  });
});

// Dashboard route
router.get('/dashboard', (req, res) => {
  res.render('pages/dashboard', {
    title: 'Dashboard - E-Waste Management',
    path: '/dashboard'
  });
});

// Logout route
router.get('/logout', (req, res) => {
  // In a real application, you would destroy the user's session here
  // For now, just redirect to the home page
  res.redirect('/');
});

// Google Authentication Routes
router.get('/auth/google', (req, res) => {
  // In a real application, you would redirect to Google OAuth
  // For now, just redirect to the dashboard to simulate successful login
  res.redirect('/dashboard');
});

router.get('/auth/google/callback', (req, res) => {
  // In a real application, this would handle the Google OAuth callback
  // For now, just redirect to the dashboard
  res.redirect('/dashboard');
});

// Facebook Authentication Routes
router.get('/auth/facebook', (req, res) => {
  // In a real application, you would redirect to Facebook OAuth
  // For now, just redirect to the dashboard to simulate successful login
  res.redirect('/dashboard');
});

router.get('/auth/facebook/callback', (req, res) => {
  // In a real application, this would handle the Facebook OAuth callback
  // For now, just redirect to the dashboard
  res.redirect('/dashboard');
});

// Forgot Password Route
router.get('/forgot-password', (req, res) => {
  res.render('pages/forgot-password', {
    title: 'Forgot Password - E-Waste Management',
    path: '/forgot-password'
  });
});

// Process forgot password form
router.post('/forgot-password', (req, res) => {
  // In a real application, you would send a password reset email
  // For now, just redirect back to the forgot password page with a success message
  res.render('pages/forgot-password', {
    title: 'Forgot Password - E-Waste Management',
    path: '/forgot-password',
    success: 'If your email address is registered with us, you will receive a password reset link shortly.'
  });
});

// Articles page route
router.get('/articles', (req, res) => {
  // Sample articles data
  const articles = [
    {
      id: 1,
      title: 'The Growing E-Waste Crisis: What You Need to Know',
      summary: 'Learn about the scale of the global e-waste problem and its environmental impact.',
      image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      date: 'June 15, 2023',
      author: 'Sarah Johnson',
      category: 'Education',
      slug: 'growing-ewaste-crisis'
    },
    {
      id: 2,
      title: 'How to Properly Recycle Your Old Smartphone',
      summary: 'A step-by-step guide to ensure your old mobile devices are recycled responsibly.',
      image: 'https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      date: 'July 22, 2023',
      author: 'Michael Chen',
      category: 'How-to',
      slug: 'recycle-old-smartphone'
    },
    {
      id: 3,
      title: 'The Hidden Value in E-Waste: Urban Mining Explained',
      summary: 'Discover how valuable materials are recovered from electronic waste through urban mining.',
      image: 'https://images.unsplash.com/photo-1569163139599-0f4517e36f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      date: 'August 5, 2023',
      author: 'David Rodriguez',
      category: 'Technology',
      slug: 'urban-mining-explained'
    },
    {
      id: 4,
      title: 'E-Waste Legislation Around the World: A Comparison',
      summary: 'An overview of how different countries are addressing the e-waste challenge through policy.',
      image: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      date: 'September 12, 2023',
      author: 'Amara Okafor',
      category: 'Policy',
      slug: 'ewaste-legislation-comparison'
    },
    {
      id: 5,
      title: 'Extending the Lifespan of Your Electronics: Maintenance Tips',
      summary: 'Practical advice to help your devices last longer and reduce e-waste generation.',
      image: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      date: 'October 3, 2023',
      author: 'Sarah Johnson',
      category: 'How-to',
      slug: 'electronics-maintenance-tips'
    },
    {
      id: 6,
      title: 'The Social Impact of E-Waste: Communities at Risk',
      summary: 'Examining how improper e-waste disposal affects vulnerable communities worldwide.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      date: 'November 18, 2023',
      author: 'Amara Okafor',
      category: 'Social Impact',
      slug: 'ewaste-social-impact'
    }
  ];

  res.render('pages/articles', {
    title: 'Articles - E-Waste Management',
    path: '/articles',
    articles: articles
  });
});

// Article detail page route
router.get('/articles/:slug', (req, res) => {
  // In a real application, you would fetch the article from a database
  // For now, we'll use a sample article
  const article = {
    id: 1,
    title: 'The Growing E-Waste Crisis: What You Need to Know',
    image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    date: 'June 15, 2023',
    author: 'Sarah Johnson',
    category: 'Education',
    content: `
      <p class="lead">Electronic waste, or e-waste, is the fastest growing waste stream in the world. As technology advances and consumer demand for new devices grows, the volume of discarded electronics continues to rise at an alarming rate.</p>
      
      <h2>The Scale of the Problem</h2>
      <p>According to the Global E-waste Monitor 2020, the world generated a record 53.6 million metric tons of e-waste in 2019. This is an increase of 21% in just five years. By 2030, this number is projected to reach 74 million metric tons.</p>
      <p>To put this in perspective, the annual e-waste generated is worth approximately $57 billion, containing valuable materials such as gold, silver, copper, and palladium. However, only about 17.4% of this e-waste is documented to be properly collected and recycled.</p>
      
      <h2>Environmental Impact</h2>
      <p>Improper disposal of e-waste has severe environmental consequences. Electronic devices contain hazardous substances like lead, mercury, cadmium, and brominated flame retardants. When e-waste is dumped in landfills or improperly processed, these toxins can leach into soil and water systems, contaminating the environment and posing risks to wildlife and ecosystems.</p>
      <p>Additionally, informal recycling practices, such as burning cables to recover copper or using acid baths to extract gold, release toxic substances into the air, soil, and water, causing further environmental damage.</p>
      
      <h2>Health Risks</h2>
      <p>The hazardous materials in e-waste pose significant health risks to humans, particularly those involved in informal recycling operations. Exposure to these toxins can lead to:</p>
      <ul>
        <li>Respiratory problems</li>
        <li>Skin disorders</li>
        <li>Impaired brain development in children</li>
        <li>Damage to the nervous system</li>
        <li>DNA damage</li>
        <li>Cancer</li>
      </ul>
      <p>Communities living near informal e-waste recycling sites are especially vulnerable to these health impacts.</p>
      
      <h2>The Global E-Waste Trade</h2>
      <p>Despite international agreements like the Basel Convention, which aims to restrict the transboundary movement of hazardous waste, e-waste often flows from developed to developing countries. This transfer shifts the burden of managing hazardous materials to regions that may lack the infrastructure and regulations for safe processing.</p>
      
      <h2>Solutions and the Way Forward</h2>
      <p>Addressing the e-waste crisis requires a multi-faceted approach:</p>
      <ol>
        <li><strong>Extended Producer Responsibility (EPR):</strong> Policies that make manufacturers responsible for the entire lifecycle of their products, including take-back and recycling.</li>
        <li><strong>Circular Economy:</strong> Designing products for longevity, repairability, and eventual recycling, keeping materials in use for as long as possible.</li>
        <li><strong>Improved Recycling Infrastructure:</strong> Investing in formal recycling facilities that can safely recover valuable materials while properly handling hazardous substances.</li>
        <li><strong>Consumer Awareness:</strong> Educating consumers about the importance of proper e-waste disposal and available recycling options.</li>
        <li><strong>International Cooperation:</strong> Strengthening global agreements and cooperation to prevent illegal e-waste trade and support developing countries in building capacity for e-waste management.</li>
      </ol>
      
      <h2>What You Can Do</h2>
      <p>As an individual, you can make a difference by:</p>
      <ul>
        <li>Extending the life of your electronic devices through proper maintenance and repair</li>
        <li>Donating or selling working electronics you no longer need</li>
        <li>Using certified e-waste recyclers for end-of-life devices</li>
        <li>Supporting companies with sustainable practices and take-back programs</li>
        <li>Advocating for stronger e-waste policies in your community</li>
      </ul>
      
      <p>By understanding the e-waste crisis and taking action, we can all contribute to a more sustainable approach to our electronic consumption and disposal.</p>
    `,
    relatedArticles: [
      {
        id: 2,
        title: 'How to Properly Recycle Your Old Smartphone',
        summary: 'A step-by-step guide to ensure your old mobile devices are recycled responsibly.',
        image: 'https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
        slug: 'recycle-old-smartphone'
      },
      {
        id: 6,
        title: 'The Social Impact of E-Waste: Communities at Risk',
        summary: 'Examining how improper e-waste disposal affects vulnerable communities worldwide.',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
        slug: 'ewaste-social-impact'
      }
    ]
  };

  res.render('pages/article-detail', {
    title: `${article.title} - E-Waste Management`,
    path: '/articles',
    article: article
  });
});

// Videos page route
router.get('/videos', (req, res) => {
  // Sample videos data
  const videos = [
    {
      id: 1,
      title: 'The E-Waste Crisis Explained',
      description: 'An overview of the global e-waste problem and its environmental impact.',
      thumbnail: 'https://img.youtube.com/vi/ITwYEPCKFkM/maxresdefault.jpg',
      videoId: 'ITwYEPCKFkM',
      duration: '8:24',
      date: 'May 10, 2023',
      category: 'Education'
    },
    {
      id: 2,
      title: 'Inside an E-Waste Recycling Facility',
      description: 'Take a tour of a modern e-waste recycling facility and see how electronic devices are processed.',
      thumbnail: 'https://img.youtube.com/vi/HQkjP_DqgdQ/maxresdefault.jpg',
      videoId: 'HQkjP_DqgdQ',
      duration: '12:37',
      date: 'June 22, 2023',
      category: 'Behind the Scenes'
    },
    {
      id: 3,
      title: 'How to Prepare Your Devices for Recycling',
      description: 'Learn the steps to properly prepare your electronic devices before recycling them.',
      thumbnail: 'https://img.youtube.com/vi/0JZey9GJQP0/maxresdefault.jpg',
      videoId: '0JZey9GJQP0',
      duration: '6:15',
      date: 'July 5, 2023',
      category: 'How-to'
    },
    {
      id: 4,
      title: 'The Hidden Value in E-Waste',
      description: 'Discover the valuable materials contained in electronic waste and how they can be recovered.',
      thumbnail: 'https://img.youtube.com/vi/zU62hh3DBfY/maxresdefault.jpg',
      videoId: 'zU62hh3DBfY',
      duration: '9:42',
      date: 'August 18, 2023',
      category: 'Education'
    },
    {
      id: 5,
      title: 'E-Waste and the Circular Economy',
      description: 'How the principles of circular economy can be applied to electronic waste management.',
      thumbnail: 'https://img.youtube.com/vi/JXDrIvShZKU/maxresdefault.jpg',
      videoId: 'JXDrIvShZKU',
      duration: '15:08',
      date: 'September 3, 2023',
      category: 'Sustainability'
    },
    {
      id: 6,
      title: 'DIY Electronics Repair: Extending Device Lifespan',
      description: 'Basic repair techniques to help your electronic devices last longer and reduce e-waste.',
      thumbnail: 'https://img.youtube.com/vi/Kv5fSBfnue0/maxresdefault.jpg',
      videoId: 'Kv5fSBfnue0',
      duration: '18:22',
      date: 'October 12, 2023',
      category: 'How-to'
    }
  ];

  res.render('pages/videos', {
    title: 'Videos - E-Waste Management',
    path: '/videos',
    videos: videos
  });
});

module.exports = router; 