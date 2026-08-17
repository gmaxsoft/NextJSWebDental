# Strona Gabinetu Stomatologicznego

This is the official repository for the website [stomatolog-dentysta.pl](https://www.stomatolog-dentysta.pl/), a professional dental and prosthodontics clinic based in Zielona Góra, Poland. The website showcases the clinic's services, including general dentistry, pediatric dentistry, aesthetic dentistry, and prosthodontics, while providing a user-friendly interface for patients to explore offerings and contact the clinic.

## Demo

You can view the live website here: [https://www.stomatolog-dentysta.pl/](https://www.stomatolog-dentysta.pl/)

## Technologies Used

The website is built using modern web development technologies, with the following key dependencies:

### Core Framework & Language
- **Next.js** (^14.2.30): A React framework for server-side rendering and static site generation
- **React** (^18): A JavaScript library for building user interfaces
- **TypeScript** (^5): For type-safe JavaScript development
- **Node.js**: Runtime environment for JavaScript

### UI & Styling
- **Bootstrap** (^5.3.2): CSS framework for responsive design and layout utilities
- **React Bootstrap** (^2.10.0): Bootstrap components built with React
- **Sass** (^1.70.0): CSS preprocessor for advanced styling capabilities
- **Animate.css** (^4.1.1): Library for CSS animations

### Components & Libraries
- **Lucide React** (^0.312.0): Modern and customizable icon library
- **React Parallax** (^3.5.1): Library for creating parallax scrolling effects
- **React Compare Slider** (^3.0.1): Component for before/after image comparisons

### Maps & Third-Party Services
- **@react-google-maps/api** (^2.19.2): React wrapper for Google Maps integration
- **@next/third-parties** (^14.1.0): Next.js integration for third-party scripts

### Image Optimization
- **Sharp** (^0.34.5): High-performance image processing library
- **@uploadcare/nextjs-loader** (^1.0.0): Image loader for Next.js with Uploadcare
- **WebP Loader** (^0.4.0): WebP image format support

### Development Tools
- **@next/bundle-analyzer** (^15.5.4): Bundle size analysis tool
- **Cross-env** (^10.0.0): Cross-platform environment variable management
- **Schema-dts** (^1.1.5): TypeScript definitions for JSON-LD structured data
- **ESLint**: Code linting (via Next.js)

### Build & Configuration
- **Next Compose Plugins** (^2.2.1): Plugin composition for Next.js configuration

For a complete list of all dependencies and their versions, refer to the `package.json` file.

## Project Structure

The project is structured as a Next.js application with the following key scripts:

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the production-ready application.
- `npm run start`: Starts the production server on port 3000.
- `npm run lint`: Runs linting to check for code quality issues.
- `npm run analyze`: Analyzes the bundle size for optimization.
- `npm run pm2:start` / `pm2:reload` / `pm2:stop`: Process manager commands.

For a complete list of dependencies and scripts, refer to the `package.json` file.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/stomatolog-dentysta.pl.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd stomatolog-dentysta.pl
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Deployment (Nginx + PM2, port 3000)

Produkcja: Next.js (`next start`) na `127.0.0.1:3000` pod PM2, Nginx jako reverse proxy.

Pliki weryfikacyjne SEO (serwowane z `public/`):
- `ads.txt`
- `BingSiteAuth.xml`
- `googlebe45dfc5ad1b8108.html`
- `robots.txt`
- `sitemap.xml`

### 1. Aplikacja

```bash
npm ci
npm run build
npm run pm2:start
pm2 save
pm2 startup
```

Konfiguracja PM2: `ecosystem.config.js`.

### 2. Nginx

Konfiguracja: `deploy/nginx.conf` (HTTPS, www, nagłówki bezpieczeństwa, przekierowania 301 z dawnego `.htaccess`).

```bash
sudo cp deploy/nginx.conf /etc/nginx/sites-available/stomatolog-dentysta.pl
sudo ln -sf /etc/nginx/sites-available/stomatolog-dentysta.pl /etc/nginx/sites-enabled/
sudo certbot --nginx -d www.stomatolog-dentysta.pl -d stomatolog-dentysta.pl
sudo nginx -t && sudo systemctl reload nginx
```

Po zmianie kodu: `npm run build && npm run pm2:reload`.

## Features

- **Responsive Design**: Built with Bootstrap and React Bootstrap for a seamless experience across devices.
- **Google Maps Integration**: Displays the clinic's location for easy navigation.
- **SEO Optimization**: Utilizes Next.js for server-side rendering and static site generation to improve search engine visibility.
- **Modern UI**: Incorporates animations (via `animate.css`) and parallax effects (via `react-parallax`) for an engaging user experience.
- **Type Safety**: Uses TypeScript for robust and maintainable code.
- **Image Optimization**: Leverages `@uploadcare/nextjs-loader` and `webp-loader` for efficient image handling.

## About the Clinic

**ArtDent** is a professional dental clinic located at Bohaterów Westerplatte 9, Zielona Góra, Poland. The clinic offers a wide range of dental services, including:

- Pediatric dentistry (e.g., caries treatment, fluoridation, sealing).
- General dentistry (e.g., caries treatment, endodontic treatment, surgery).
- Aesthetic dentistry (e.g., teeth whitening, composite veneers, full-ceramic crowns).
- Prosthodontics (e.g., flexible acrylic dentures, bridges, zirconium crowns).

The clinic emphasizes patient comfort, modern equipment, and personalized care. For more details, visit the [Services](https://www.stomatolog-dentysta.pl/) section on the website.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## Contact

For inquiries about the clinic, contact:

- **Phone**: (+48) 504-219-034
- **Address**: Bohaterów Westerplatte 9, Floor II, Room 216, 65-034 Zielona Góra, Poland
- **Opening Hours**:
  - Monday-Wednesday: 10:00 - 15:00
  - Tuesday-Thursday: 14:00 - 18:00

For technical inquiries about the website, please open an issue in this repository.