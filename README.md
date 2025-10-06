# TechStore - E-commerce Website

A modern, responsive e-commerce website built with Next.js 15, TypeScript, TailwindCSS, and ShadCN/UI components.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with beautiful UI across all devices
- **Product Catalog**: Comprehensive product grid with filtering and search
- **Product Carousel**: Featured products showcase
- **Advanced Filtering**: Filter by category, price range, and brand
- **Search Functionality**: Real-time product search with modal interface
- **Pagination**: Efficient product browsing with pagination controls
- **Newsletter Subscription**: Email subscription with form validation
- **Modern UI**: Clean, professional design with smooth animations
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Next.js 15 with App Router for optimal performance

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: ShadCN/UI
- **Icons**: Custom SVG icons and Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/SophanithChrek379/figma-mcp-cursor-ai.git
cd figma-mcp-cursor-ai
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect Next.js and deploy your app
4. Your app will be available at `https://your-app-name.vercel.app`

### Manual Deployment

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and TailwindCSS
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page with e-commerce features
├── components/
│   └── ui/                  # ShadCN/UI components
├── assets/
│   ├── icons/               # Custom SVG icons
│   └── data/                # Static data and constants
└── lib/
    └── utils.ts             # Utility functions
public/
└── assets/
    ├── icons/               # Public icon assets
    └── images/              # Product images and graphics
```

## 🎨 Design System

The project follows a consistent design system with:
- **Color Palette**: Professional blue and gray tones
- **Typography**: Multiple font families for different UI elements
- **Spacing**: Consistent spacing scale using TailwindCSS
- **Components**: Reusable UI components with ShadCN/UI
- **Icons**: Custom SVG icons for consistent branding

## 🔧 Customization

### Adding New Products

Edit the `allProducts` array in `src/app/page.tsx` to add new products:

```typescript
const allProducts = [
  {
    id: 13,
    name: "New Product",
    price: 299,
    category: "Accessories",
    brand: "NewBrand",
    image: "/path/to/image.jpg",
    colors: ["color1", "color2"],
    description: "Product description"
  }
];
```

### Styling

- Global styles: `src/app/globals.css`
- Component styles: Use TailwindCSS classes
- Custom CSS: Add to `globals.css` with proper comments

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Performance

- Next.js 15 with App Router for optimal performance
- Image optimization with Next.js Image component
- Lazy loading for better initial page load
- Responsive images for different screen sizes

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support or questions, please open an issue on GitHub or contact the development team.

---

Built with ❤️ using Next.js, TypeScript, and TailwindCSS