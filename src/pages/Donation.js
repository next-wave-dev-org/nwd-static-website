import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

function Donation() {
    return (
        <>
          <Helmet>
              <title>Donation - Next Wave Dev</title>
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