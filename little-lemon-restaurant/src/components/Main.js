import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import Highlights1 from "./Highlights1";
import Highlights2 from "./Highlights2";
import Hightlights3 from "./Hightlights3";
import Testimonials from "./Testimonials";
import About1 from "./About1";
import About2 from "./About2";
import Footer from "./Footer";

const Main = () => {
  return(
    <>
    <section>
      <div className="layout">
        <div className="nav">
          <Nav />
        </div>
        <div className="header">
          <Header />
        </div>
        <div className="highlights1">
          <Highlights1 />
        </div>
        <div className="highlights2">
          <Highlights2 />
        </div>
        <div className="highlights3">
          <Hightlights3 />
        </div>
        <div className="testimonials">
          <Testimonials />
        </div>
        <div className="about1">
          <About1 />
        </div>
        <div className="about2">
          <About2 />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </section>
    </>
  )
}

export default Main;