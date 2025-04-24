import React from "react";
import faqImage from "../assets/images/faqs-image.jpg";
import service01 from "../assets/images/services-01.jpg";
import service02 from "../assets/images/services-02.jpg";
import service03 from "../assets/images/services-03.jpg";
import service04 from "../assets/images/services-04.jpg";

function Faq() {
  return (
    <>
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 align-self-center">
              <div className="caption header-text">
                <h6>SEO DIGITAL AGENCY</h6>
                <div className="line-dec"></div>
                <h4>Most Frequently Asked <em>Questions</em> Here <em>?</em></h4>
              </div>
            </div>
            <div className="col-lg-5">
              <img src={faqImage} alt="FAQs" />
            </div>
          </div>
        </div>
      </div>

      <div className="happy-steps">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Our 4 Steps To Success &amp; Happy Clients</h2>
            </div>
            <div className="col-lg-12">
              <div className="steps">
                <div className="row">
                  {[service01, service02, service03, service04].map((img, index) => (
                    <div className="col-lg-3" key={index}>
                      <div className={`item${index === 3 ? ' last-item' : ''}`}>
                        <img
                          src={img}
                          alt={`Step ${index + 1}`}
                          style={{ maxWidth: "66px", borderRadius: "50%", margin: "0 auto" }}
                        />
                        <h4>{["Project Introduction", "Work Development", "Data Analysis", "Project Finishing"][index]}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="most-asked section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Most <em>Frequently</em> Asked <span>Questions</span> ?</h2>
                <div className="line-dec"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="accordions is-first-expanded">
                {[
                  {
                    title: "Sartorial Butcher Humblebrag",
                    content:
                      "Tale is the best SEO agency website template using Bootstrap v5.2.2 CSS for your company. It is a free download provided by TemplateMo. There are 3 HTML pages, Home, About, and FAQ."
                  },
                  {
                    title: "Jean Shorts Microdosing",
                    content:
                      "You are free to use this template for any purpose. You are not allowed to redistribute the downloadable ZIP file of Tale SEO Template on any other template website. Please contact us. Thank you. Semiotics blog cray letterpress lo-fi vexillologist before they sold out swag YOLO schlitz. Coloring book roof party gentrify brunch."
                  },
                  {
                    title: "Waistcoat Aesthetic Polaroid",
                    content:
                      "Semiotics blog cray letterpress lo-fi vexillologist before they sold out swag YOLO schlitz. Coloring book roof party gentrify brunch. Fingerstache cronut taxidermy, echo park quinoa tumblr activated charcoal before they sold out."
                  },
                  {
                    title: "Dolores Accordion HTML5",
                    content:
                      "Pickled succulents bitters belly direct trade, shaman iceland raw denim kombucha cray offal. Food truck swag hell of tumblr poutine tilde live-edge shorts microdosing fixie succulents, viral everyday carry tattooed."
                  }
                ].map((item, idx) => (
                  <article className="accordion" key={idx}>
                    <div className="accordion-head">
                      <span>{item.title}</span>
                      <span className="icon">
                        <i className="icon fa fa-chevron-right"></i>
                      </span>
                    </div>
                    <div className="accordion-body">
                      <div className="content">
                        <p>{item.content}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="get-free-quote">
                <form id="free-quote" method="submit" role="search" action="#">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="section-heading">
                        <h2>Get a <em>Free Quote</em> Now</h2>
                      </div>
                    </div>
                    {[
                      { name: "email", type: "text", placeholder: "Your E-mail", pattern: "[^ @]*@[^ @]*", required: true },
                      { name: "website", type: "text", placeholder: "Website URL", required: true },
                      { name: "phone-number", type: "text", placeholder: "Phone Number", required: true },
                      { name: "full-name", type: "text", placeholder: "Full Name" }
                    ].map((field, idx) => (
                      <div className="col-lg-12" key={idx}>
                        <fieldset>
                          <input
                            type={field.type}
                            name={field.name}
                            id={field.name}
                            placeholder={field.placeholder}
                            pattern={field.pattern || undefined}
                            required={field.required || undefined}
                            autoComplete="on"
                          />
                        </fieldset>
                      </div>
                    ))}
                    <div className="col-lg-12">
                      <fieldset>
                        <button type="submit" id="form-submit" className="orange-button">
                          Get Your Free Quote
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cta section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h4>Are You Ready To Work &amp; Develop With Us ?<br />Don't Hesitate &amp; Contact Us !</h4>
            </div>
            <div className="col-lg-4">
              <div className="main-button">
                <a href="#">Contact Us Now!</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="col-lg-12">
            <p>
              Copyright © 2036 <a href="#">Tale SEO Agency</a>. All rights
              reserved.
              <br />
              Design: <a href="https://templatemo.com" target="_blank" rel="noopener noreferrer">TemplateMo</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Faq;