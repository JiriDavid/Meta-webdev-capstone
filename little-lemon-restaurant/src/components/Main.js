import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import Testimonials from "./Testimonials";
import About1 from "./About1";
import Footer from "./Footer";
import Specials from "./Specials";

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
        <div className="specials">
          <Specials />
        </div>
        <div className="testimonials">
          <Testimonials />
        </div>
        <div className="about1">
          <About1 />
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