# E-Waste Management Website

A responsive website focused on electronic waste management, recycling, and education. This project aims to address the growing e-waste crisis by providing information, resources, and services related to responsible e-waste disposal and recycling.

## Features

### Home Page
- Modern, responsive hero section with call-to-action buttons
- Key statistics about the e-waste crisis
- Overview of services offered
- Call-to-action section for user engagement

### User Authentication
- User registration with form validation
- Login functionality with email and password
- Social login options (Google, Facebook)
- Password recovery system
- User dashboard with personalized information

### Recycling Services
- Interactive recycling center locator with map integration
- Detailed information about recycling centers (location, hours, accepted items)
- E-waste pickup request service with scheduling
- Step-by-step guide for preparing items for recycling
- Recycling process explanation

### Educational Content
- Comprehensive e-waste facts and statistics
- Practical tips for reducing electronic waste
- Detailed articles on e-waste management topics
- Educational videos with embedded players
- Resources and links to external organizations

### Articles Section
- Categorized articles on e-waste topics
- Category filtering system
- Detailed article pages with rich content
- Related articles suggestions
- Social sharing functionality
- Author information

### Videos Section
- Featured video showcase
- Categorized video library
- Video filtering by category
- Modal video players
- Video metadata (duration, date, category)

### About Section
- Mission statement and vision
- Organizational goals and objectives
- Visual representation of impact goals

### Contact & Support
- Contact form with validation
- Interactive map with location
- FAQ section with common questions
- Office location and hours information

### Additional Features
- Fully responsive design that works on all devices
- Newsletter subscription functionality
- Social media integration
- Modern UI with Bootstrap 5
- Accessibility considerations
- Cross-browser compatibility

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript) for templating
- MongoDB (optional, for data storage)
- Bootstrap 5 for responsive design
- Font Awesome for icons
- JavaScript for interactive elements
- CSS3 for styling and animations

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (optional, for database functionality)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/ewaste-management.git
   cd ewaste-management
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   NODE_ENV=development
   # MONGODB_URI=mongodb://localhost:27017/ewaste_db
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
e-waste-management/
├── config/             # Configuration files
├── controllers/        # Route controllers
├── models/             # Database models
├── public/             # Static assets
│   ├── css/            # CSS files
│   ├── js/             # JavaScript files
│   └── images/         # Image files
├── routes/             # Route definitions
├── views/              # EJS templates
│   ├── pages/          # Page templates
│   └── partials/       # Reusable template parts
├── .env                # Environment variables
├── app.js              # Application entry point
├── package.json        # Project dependencies
└── README.md           # Project documentation
```

## Future Enhancements
- Mobile application development
- Real-time tracking of pickup requests
- Integration with recycling center APIs
- User rewards system for recycling activities
- Community forum for sharing recycling experiences
- Analytics dashboard for tracking environmental impact
- Multi-language support for global reach

## Deployment

This application can be deployed to various platforms:

- Heroku
- Vercel
- Netlify
- DigitalOcean
- AWS

For deployment, make sure to set the appropriate environment variables on your hosting platform.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Global E-waste Monitor for statistics and information
- United Nations Sustainable Development Goals, particularly SDG 12: Responsible Consumption and Production
- Open source community for various libraries and tools used in this project 