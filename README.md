# Chicago Outdoor Ads

A modern, responsive website for Chicago Outdoor Ads - premium outdoor advertising solutions across Chicago.

## Features

- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Contact Form**: Interactive contact form with validation
- **Performance Optimized**: Lazy loading, code splitting, and optimized images
- **SEO Ready**: Meta tags, Open Graph, and Twitter Card support
- **Analytics Ready**: Google Analytics 4 integration
- **Error Handling**: Error boundaries for graceful error handling
- **Accessibility**: ARIA labels, proper alt texts, and keyboard navigation

## Tech Stack

- **React 19** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Styling framework
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/chicago-outdoor-ads.git
cd chicago-outdoor-ads
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Production Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Environment Variables

For production, set up these environment variables:

- `VITE_GA_TRACKING_ID` - Your Google Analytics 4 tracking ID

### Performance Optimization

The project includes several performance optimizations:

- **Code Splitting**: Vendor and icon chunks are separated
- **Lazy Loading**: Images load only when needed
- **Bundle Optimization**: Manual chunk configuration for optimal loading
- **Image Optimization**: Proper image imports and alt texts

### SEO Configuration

Update the following in `index.html` for your domain:

- Meta description and keywords
- Open Graph URLs and images
- Twitter Card URLs and images
- Favicon path

### Analytics Setup

1. Create a Google Analytics 4 property
2. Update `GA_TRACKING_ID` in `src/Components/Analytics/Analytics.jsx`
3. Analytics will automatically track:
   - Page views
   - Contact form submissions
   - Button clicks
   - File downloads

## Project Structure

```
src/
├── Components/
│   ├── Analytics/          # Google Analytics integration
│   ├── ContactForm/        # Contact form modal
│   ├── ErrorBoundary/      # Error handling
│   ├── Flex/              # Statistics section
│   ├── Footer/            # Footer component
│   ├── Hero/              # Hero section
│   ├── ImgSec/            # Image gallery
│   ├── Nav/               # Navigation
│   ├── Products/          # Products section
│   ├── SecImg/            # Secondary image section
│   └── SubSec/            # Sub section
├── assets/
│   └── images/            # Image assets
├── App.jsx                # Main app component
├── App.css                # Global styles
├── index.css              # Tailwind imports
└── main.jsx               # App entry point
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact us through the contact form on the website.
