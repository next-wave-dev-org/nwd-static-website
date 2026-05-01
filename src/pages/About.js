import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import NWD_about_photo from "../images/about/New_NWD_about_photo.png";
import { pageMetadata, BASE_URL } from "../utils/metadataConfig";

function About() {
  const metadata = pageMetadata.about;
  
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
        <meta property="og:image:alt" content="Next Wave Dev Logo" />
        <meta property="og:url" content={`${BASE_URL}/#${metadata.pageUrl}`} />
        <meta property="og:site_name" content="Next Wave Dev" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={`${BASE_URL}/og-logo.png`} />
        
        {/* Additional Meta Tags */}
        <meta name="keywords" content="about, mission, tech education, career development, mentorship" />
        <meta name="author" content="Next Wave Dev" />
      </Helmet>
      <Navbar />

        <div style={{ paddingTop:"2rem", paddingLeft: "3vw", paddingRight:"3vw", maxWidth: "2200px", margin: "0 auto" }}>
            <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "2rem", color:"#004da8" }}>
                About Next Wave Dev
            </h1>

            <h2 style={{ fontSize: "2rem", font:"bold", marginBottom: "1rem", color:"gray-800" }}>Our Mission: Launching Tech Careers</h2>
            <p style={{ fontSize: "1rem", marginBottom: "1rem", color:"gray-600" }}>
                At Next Wave Dev, our core purpose is to solve the classic conundrum of the tech world: Graduates need experience to get a job, but they need a job to get experience.
                <br/>
                We are a dynamic platform dedicated to bridging this gap. We connect highly motivated and skilled recent graduates with real-world company projects, providing them with the vital professional experience, mentorship, and portfolio-building opportunities they need to successfully launch their careers in the technology field.
            </p>
        </div>

        <div style={{ paddingLeft: "3vw", paddingRight:"3vw", maxWidth: "2200px", margin: "0 auto" }}>
            <div>
                <h3 style={{ fontSize: "1.5rem", font:"bold", marginBottom: "1rem", color:"gray-800", mb:4 }}>For Graduates: Your Launchpad</h3>
                <p style={{ fontSize: "1rem", marginBottom: "0.5rem", color:"gray-600" }}>You’ve put in the work, earned the degree, and mastered the theory. Now, it’s time to build your professional portfolio.</p>
                <ul style={{ paddingBottom:"1rem", marginLeft:"1rem"}}>
                    <li className="flex items-start">
                        <span><span className="font-semibold">Gain Real Experience:</span> Work on tangible, in-production company projects, not simulated ones.</span>
                    </li>
                    <li className="flex items-start">
                        <span><span className="font-semibold">Build Your Portfolio:</span> Accumulate impressive case studies and references that hiring managers look for.</span>
                    </li>
                    <li className="flex items-start">  
                        <span><span className="font-semibold">Access Mentorship:</span> Learn best practices, industry workflows, and professional communication from experienced developers and project managers.</span>
                    </li>
                    <li className="flex items-start">  
                        <span><span className="font-semibold">Increase Employability:</span> Graduates from our program are significantly more prepared and marketable for entry-level and junior roles.</span>
                    </li>
                </ul>
            </div>
            <div>
                <h3 style={{ fontSize: "1.5rem", font:"bold", marginBottom: "1rem", color:"gray-800" }}>For Companies: Unlocking Future Talent</h3>
                <p style={{ fontSize: "1rem", marginBottom: "0.5rem", color:"gray-600" }}>Tap into a pool of fresh, enthusiastic, and academically current talent ready to contribute immediately.</p>
                <ul style={{ paddingBottom:"1rem", marginLeft:"1rem"}}>
                        <li className="flex items-start">
                        
                        <span><span className="font-semibold">Cost-Effective Support:</span> Get project assistance from bright, motivated talent while they gain essential experience.</span>
                    </li>
                    <li className="flex items-start">
                        
                        <span><span className="font-semibold">Pipeline for Hiring:</span> Identify and evaluate potential full-time employees directly through their project performance.</span>
                    </li>
                    <li className="flex items-start">
                        
                        <span><span className="font-semibold">Fresh Perspectives:</span> Benefit from the latest methodologies and innovative thinking brought by recent graduates.</span>
                    </li>
                    <li className="flex items-start">
                        
                        <span><span className="font-semibold">Impactful Contribution:</span> Invest in the future of the tech industry by providing invaluable opportunities to the next generation of developers.</span>
                    </li>
                </ul>
            </div>
        </div>

            <div style={{ paddingLeft:"3vw", paddingBottom:"2rem", maxWidth: "2200px", margin: "0 auto" }}>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    We envision a tech ecosystem where the path from graduation to a successful, fulfilling career is clear, efficient, and accessible to everyone. Next Wave Dev is more than just a platform; we are the dedicated accelerator for the next generation of tech leaders.
                </p>
            </div>
        
        <img
          src={NWD_about_photo}
          alt="Picture of NWD"
          className="about-page-image"
          style={{ width: "100%", 
                   display: "block", 
                   height: "auto" }}
        />
      <Footer />
    </>
  );
}

const flexChild = {
  position: "relative",
  minHeight: "1px",
  paddingRight: "15px",
  paddingLeft: "15px",
};

const flexParent = {
  display: "flex",
  flexWrap: "wrap",
};

export default About;
