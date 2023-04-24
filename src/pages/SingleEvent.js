import React from "react";
import "./Style.css";

function SingleEvent() {
  return (
    <>
      <section className="component event-banner">
        <div className="container">
          <div className="content">
            <div className="event-info">
              <h1 className="page-title">Neon Nights</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="./index.html" className="breadcrumb-link">
                    Home
                  </a>
                </li>
                <li className="divider">|</li>
                <li>
                  <a href="./explore-events.html" className="breadcrumb-link">
                    Events
                  </a>
                </li>
                <li className="divider">|</li>
                <li>
                  <a href="#" className="breadcrumb-link">
                    Neon Nights
                  </a>
                </li>
              </ul>
            </div>
            <div className="event-actions">
              <h3 className="price">at 33$</h3>
              <button className="btn btn-main">Book Now</button>
            </div>
          </div>
        </div>
      </section>
      <section className="component event-details">
        <div className="container">
          <div className="tabs-wrapper">
            <div className="event-details">
              <ul className="tabs-navbar">
                <li className="navbar-item active">Details</li>
                <li className="navbar-item">Location</li>
              </ul>
              <div className="tab-content">
                <p>
                  Neon Nights is a one-of-a-kind event that brings together
                  music, art, and entertainment to create an unforgettable
                  experience for all attendees. The event will take place in the
                  vibrant city of Lisbon, Portugal on a warm summer night.
                </p>
                <p>
                  As the name suggests, Neon Nights will be a celebration of
                  bright, colorful lights and neon visuals. The entire venue
                  will be transformed into a neon wonderland, complete with
                  glowing decorations, installations, and interactive exhibits.
                </p>
                <p>
                  The event will feature performances by some of the biggest
                  names in the music industry, including international DJs and
                  local talent. The music will be a mix of electronic dance,
                  hip-hop, and pop, providing something for everyone to enjoy.
                </p>
                <p>
                  Along with the music, there will be live art installations and
                  performances by talented artists, adding a unique visual
                  element to the event. Attendees will also have the opportunity
                  to participate in interactive activities such as
                  glow-in-the-dark face painting, light-up photo booths, and
                  neon-themed games.
                </p>
                <p>
                  The event will have a variety of food and beverage options,
                  including local delicacies and international cuisine. A fully
                  stocked bar will be available, serving up signature
                  neon-themed cocktails and non-alcoholic beverages.
                </p>
                <p>
                  Neon Nights promises to be an unforgettable experience that
                  combines music, art, and technology in a way that has never
                  been seen before. Don't miss out on this chance to be a part
                  of the neon revolution and join us for an unforgettable night
                  of fun, music, and entertainment in the heart of Lisbon,
                  Portugal.
                </p>
              </div>
            </div>
            <div className="event-overview">
              <div className="item">
                <h5>Start Date</h5>
                <p>02 Mar 2023</p>
              </div>
              <div className="item">
                <h5>End Date</h5>
                <p>02 Mar 2023</p>
              </div>
              <div className="item">
                <h5>Restrictions</h5>
                <p>Age 18+</p>
              </div>
              <div className="item">
                <h5>Website</h5>
                <p>neonevents.com</p>
              </div>
              <div className="item">
                <h5>Social</h5>
                <div className="icons">
                  <div className="icon facebook">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </div>
                  <div className="icon instagram">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleEvent;
