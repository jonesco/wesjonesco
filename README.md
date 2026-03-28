# Wes Jones Portfolio - React Version

A pixel-perfect React conversion of the Wes Jones portfolio website maintaining 100% visual parity with the original HTML site.

![Portfolio](https://img.shields.io/badge/React-18.2.0-blue)
![Router](https://img.shields.io/badge/React%20Router-6.20.0-red)
![Status](https://img.shields.io/badge/Status-Production%20Ready-green)

## 📋 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The application will open at `http://localhost:3000`

### Production Build

```bash
# Create optimized production build
npm run build

# The build folder is ready to be deployed
```

## 🏗️ Project Structure

```
react-portfolio/
├── public/              # Static assets served as-is
│   ├── css/            # Foundation + custom CSS
│   ├── fonts/          # Font files (Trade Gothic, Font Awesome)
│   ├── images/         # All portfolio images (157+ files)
│   ├── trade/          # Trade Gothic font files
│   └── index.html      # HTML template
├── src/
│   ├── components/     # Reusable React components
│   │   ├── Header.js
│   │   ├── CaseStudyTile.js
│   │   └── NextCaseStudy.js
│   ├── pages/          # Page components (routes)
│   │   ├── Home.js
│   │   ├── FundManager.js
│   │   ├── NetspendPatternLibrary.js
│   │   ├── CustomCardCreator.js
│   │   ├── Wayblazer.js
│   │   ├── MagicStaff.js
│   │   ├── CPay.js
│   │   ├── SpotMe.js
│   │   └── Wellsmith.js
│   ├── App.js          # Main app with routing
│   └── index.js        # Entry point
└── package.json        # Dependencies
```

## 🚀 Features

- ✅ **Pixel-Perfect Replication** - Exact visual match to original HTML site
- ✅ **Client-Side Routing** - React Router for instant page transitions
- ✅ **Responsive Design** - Mobile, tablet, and desktop optimized
- ✅ **Foundation CSS** - Preserved original Foundation framework
- ✅ **Custom Fonts** - Trade Gothic and Font Awesome icons
- ✅ **Production Ready** - Optimized build (~65KB gzipped)
- ✅ **SEO Friendly** - Meta tags and document titles

## 🌐 Routes

| Path | Component | Original File |
|------|-----------|--------------|
| `/` | Home | index.html |
| `/fund-manager` | FundManager | fund-manager.html |
| `/ns_pattern_library` | NetspendPatternLibrary | ns_pattern_library.html |
| `/custom_card_creator` | CustomCardCreator | custom_card_creator.html |
| `/wayblazer` | Wayblazer | wayblazer.html |
| `/magicstaff` | MagicStaff | magicstaff.html |
| `/cpay` | CPay | cpay.html |
| `/spotme` | SpotMe | spotme.html |
| `/wellsmith` | Wellsmith | wellsmith.html |

## 📦 Deployment

### Netlify, Vercel, or Similar

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `build` folder

3. The `_redirects` file is already configured for SPA routing

### Environment Setup

The app works out of the box with no environment variables needed. All assets are bundled or served from the public folder.

## 🎨 Styling

All original CSS is preserved and loaded from the public folder:
- Foundation CSS framework (`foundation.css`)
- Custom styles (`wesjones.css`)
- Font Awesome icons
- Trade Gothic font files

The React components use the original CSS classes, ensuring 100% visual consistency.

## 🔧 Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Create production build
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (not recommended)

### Adding a New Case Study

1. Create a new component in `src/pages/YourCaseStudy.js`
2. Add the route in `src/App.js`
3. Add a tile in `src/pages/Home.js`

### Modifying Content

- **Text/Images**: Edit the respective page component in `src/pages/`
- **Styles**: Edit `public/css/wesjones.css`
- **Shared Components**: Modify components in `src/components/`

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile Safari (iOS 12+)
- ✅ Chrome Mobile (Android 8+)

## 📄 Documentation

- **[SETUP.md](SETUP.md)** - Detailed setup instructions
- **[MIGRATION-SUMMARY.md](MIGRATION-SUMMARY.md)** - Complete migration details

## 🤝 Contact

**Wes Jones**  
📧 wes@jonesco.com  
📱 512-944-8513  
📄 [Download Resume](public/images/Wes_Jones_Resume.pdf)

## 📝 License

This is a personal portfolio site. All rights reserved.

---

Built with ❤️ using React and Foundation CSS
