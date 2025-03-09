const express = require('express');
const router = express.Router();

// Education main page
router.get('/', (req, res) => {
  res.render('pages/education/index', {
    title: 'E-Waste Education',
    path: '/education'
  });
});

// E-waste facts page
router.get('/facts', (req, res) => {
  const facts = [
    {
      id: 1,
      title: 'Growing Problem',
      content: 'The world generates 50 million tons of e-waste annually, with only 20% being formally recycled.',
      source: 'Global E-waste Monitor 2020'
    },
    {
      id: 2,
      title: 'Valuable Resources',
      content: 'E-waste contains precious metals like gold, silver, copper, and palladium that can be recovered and reused.',
      source: 'United Nations University'
    },
    {
      id: 3,
      title: 'Environmental Impact',
      content: 'Improper disposal of e-waste releases toxic substances like lead, mercury, and cadmium into the environment.',
      source: 'Environmental Protection Agency'
    },
    {
      id: 4,
      title: 'Economic Value',
      content: 'The raw materials in e-waste are worth approximately $57 billion annually, yet most are discarded rather than recovered.',
      source: 'World Economic Forum'
    },
    {
      id: 5,
      title: 'Health Risks',
      content: 'Informal e-waste recycling exposes workers to hazardous chemicals that can cause respiratory problems, DNA damage, and cancer.',
      source: 'World Health Organization'
    }
  ];
  
  res.render('pages/education/facts', {
    title: 'E-Waste Facts',
    path: '/education/facts',
    facts: facts
  });
});

// Tips for reducing e-waste
router.get('/tips', (req, res) => {
  const tips = [
    {
      id: 1,
      title: 'Repair Before Replacing',
      content: 'Many electronic devices can be repaired rather than replaced. Look for local repair shops or learn DIY repair skills.'
    },
    {
      id: 2,
      title: 'Buy Durable Products',
      content: 'Research and invest in high-quality electronics that are built to last longer and are more repairable.'
    },
    {
      id: 3,
      title: 'Donate or Sell Used Electronics',
      content: 'If your device still works but you no longer need it, consider donating it to schools, charities, or selling it to someone who can use it.'
    },
    {
      id: 4,
      title: 'Proper Recycling',
      content: 'When a device reaches the end of its life, take it to a certified e-waste recycling center rather than throwing it in the trash.'
    },
    {
      id: 5,
      title: 'Consider Refurbished Products',
      content: 'Buying refurbished electronics extends the life of existing products and reduces the demand for new manufacturing.'
    }
  ];
  
  res.render('pages/education/tips', {
    title: 'E-Waste Reduction Tips',
    path: '/education/tips',
    tips: tips
  });
});

// Resources page
router.get('/resources', (req, res) => {
  const resources = [
    {
      id: 1,
      title: 'E-Waste Coalition',
      url: 'https://example.org/ewaste-coalition',
      description: 'A global network of organizations working to solve the e-waste crisis through policy advocacy and education.'
    },
    {
      id: 2,
      title: 'Circular Electronics Partnership',
      url: 'https://example.org/circular-electronics',
      description: 'An industry initiative promoting circular economy principles in electronics manufacturing and recycling.'
    },
    {
      id: 3,
      title: 'E-Waste Research Institute',
      url: 'https://example.org/ewaste-research',
      description: 'Academic research center focused on developing innovative solutions for e-waste management.'
    },
    {
      id: 4,
      title: 'Global E-waste Statistics Partnership',
      url: 'https://example.org/ewaste-statistics',
      description: 'Provides comprehensive data and analysis on global e-waste generation and management.'
    }
  ];
  
  res.render('pages/education/resources', {
    title: 'E-Waste Resources',
    path: '/education/resources',
    resources: resources
  });
});

module.exports = router; 