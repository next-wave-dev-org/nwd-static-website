import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { pageMetadata, BASE_URL } from "../utils/metadataConfig";

function Donation() {
    const metadata = pageMetadata.donation;
    
    return (
        <>
          <Helmet>
              {/* Primary Meta Tags */}
              <title>{metadata.title}</title>
              <meta name="description" content={metadata.description} />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="canonical" href={`${BASE_URL}/#${metadata.pageUrl}`} />
              
              {/* Open Graph Meta Tags */}
              <meta property="og:type" content={metadata.type} />
              <meta property="og:title" content={metadata.title} />
              <meta property="og:description" content={metadata.description} />
              <meta property="og:image" content={`${BASE_URL}/og-logo.png`} />
              <meta property="og:image:alt" content="Next Wave Dev Donation" />
              <meta property="og:url" content={`${BASE_URL}/#${metadata.pageUrl}`} />
              <meta property="og:site_name" content="Next Wave Dev" />
              
              {/* Twitter Card Meta Tags */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content={metadata.title} />
              <meta name="twitter:description" content={metadata.description} />
              <meta name="twitter:image" content={`${BASE_URL}/og-logo.png`} />
              
              {/* Additional Meta Tags */}
              <meta name="keywords" content="donation, give, support, contribute, non-profit" />
              <meta name="author" content="Next Wave Dev" />
          </Helmet>
          <Navbar />
            <div style={{ minHeight: "calc(100vh - 95px)" }}>
              <div
                style={{
                  marginTop: 0,
                  marginBottom: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  height: "100%",
                }}
              >
                <div
                  style={{
                    ...flexParent,
                    height: "100%",
                  }}
                >
                  <div style={{                
                    ...flexChild,
                    display: "flex",
                    justifyContent: "center",
                  }}> 
                    <iframe 
                        style={{ position: "absolute", border: 0, top: 0, left:0, bottom:0, right:0, width:"100%", height:"100%"}}
                        title='Donation form powered by Zeffy'  
                        src='https://www.zeffy.com/embed/donation-form/support-the-next-wave-of-developers' 
                        allowpaymentrequest allowTransparency="true">
                    </iframe>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
        </>
    );
}

export const flexChild = {
  position: "relative",
  width: "100%",
  minHeight: "820px",
  paddingRight: 0,
  paddingLeft: 0,
};

export const flexParent = {
  display: "flex",
  flexWrap: "wrap",
};

export default Donation;