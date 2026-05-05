import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { pageMetadata, BASE_URL } from "../utils/metadataConfig";

const NotFound = () => {
  const metadata = pageMetadata.notFound;
  
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, follow" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content={metadata.type} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={`${BASE_URL}/og-logo.png`} />
        <meta property="og:site_name" content="Next Wave Dev" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        
        {/* Additional Meta Tags */}
        <meta name="author" content="Next Wave Dev" />
      </Helmet>
      <Navbar />

      <div className="notfound-container">
        <h1 className="notfound-title">404</h1>

        <p className="notfound-message">
          Oops! The page you're looking for doesn’t exist or may have been moved.
        </p>

        <div className="notfound-actions">
          <Link to="/Home">
            <button className="notfound-button">Go Home</button>
          </Link>

          <Link to="/Services">
            <button className="notfound-button">View Services</button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NotFound;