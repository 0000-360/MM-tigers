import React, { useState, useEffect } from 'react';
import logo1 from './image/logo.jpeg';
import open from './image/opening.jpg';
import trophy from './image/trophy2.png';
import gal1 from './image/gal1.jpg';
import gal2 from './image/gal2.jpg';
import gal3 from './image/gal3.jpg';
import gal4 from './image/gal4.jpg';
import gal5 from './image/gal5.jpg';
import gal from './image/gallary.jpg';
import ach1 from './image/ach1.jpeg';
import ach2 from './image/ach2.jpeg';
import ach3 from './image/ach3.jpeg';
import ach4 from './image/ach3.jpeg';
import founder from './image/founder.jpeg';
import logo2 from './image/logo2.png';
import statsBg from './image/bg1.png';
import mentorsBg from './image/logo2.png';
import feature1 from './image/Roller_hockey1.png';
import feature2 from './image/Roll_Ball1.png';
import feature3 from './image/Archery1.png';
import feature4 from './image/silam.png';
import co1 from './image/co1.jpeg';
import co2 from './image/co2.jpeg';
import co3 from './image/co3.jpeg';
import co4 from './image/co4.jpeg';
import founder2 from './image/founder2.jpeg'
import founder3 from './image/founder3.jpeg'
import india from './image/india.png'




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo-container" onClick={() => scrollToSection('home')}>
          <div className="logo-circle"><img src={logo1} alt="" /></div>
          <span className="logo-text">MM TIGERS</span>
        </div>

        <div className="menu-desktop">
          <span className="nav-link" onClick={() => scrollToSection('home')}>Home</span>
          <span className="nav-link" onClick={() => scrollToSection('about')}>About</span>
          <span className="nav-link" onClick={() => scrollToSection('achievements')}>Achievements</span>
          <span className="nav-link" onClick={() => scrollToSection('gallery')}>Gallery</span>
          <span className="nav-link" onClick={() => scrollToSection('footer')}>Contact</span>
        </div>

        <button className="btn btn-primary menu-desktop" onClick={() => scrollToSection('footer')}>Register Now</button>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={`mobile-overlay ${isOpen ? 'open' : ''}`} onClick={toggleMenu}></div>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <span className="nav-link" onClick={() => scrollToSection('home')}>Home</span>
        <span className="nav-link" onClick={() => scrollToSection('about')}>About</span>
        <span className="nav-link" onClick={() => scrollToSection('achievements')}>Achievements</span>
        <span className="nav-link" onClick={() => scrollToSection('gallery')}>Gallery</span>
        <span className="nav-link" onClick={() => scrollToSection('footer')}>Contact</span>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="hero" id="home" >
    <div className="container hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Master The Wheels<br />Achieve Greatness</h1>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => document.getElementById('footer').scrollIntoView({ behavior: 'smooth' })}>Let's Play</button>
          <button className="btn btn-secondary" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>Explore Now</button>
        </div>

      </div>
      <div className="hero-image-wrapper">
        <img src={open} alt="Skating" className="hero-img-element" />
      </div>
    </div>
  </section>
);

const Disciplines = () => {
  const disciplines = [
    { title: 'Roller Hockey', img: feature1 },
    { title: 'Roll Ball', img: feature2 },
    { title: 'Archery', img: feature3 },
    { title: 'Silambattam', img: feature4 }
  ];

  return (
    <section className="section section-dark disciplines-section" id="disciplines">
      <div className="container">
        <h2 className="section-title text-orange-center">Core <span>Disciplines</span></h2>
        <div className="disciplines-grid">
          {disciplines.map((item, index) => (
            <div className="discipline-card-new" key={index}>
              <div className="discipline-img-container-new">
                <img src={item.img} alt={item.title} className="discipline-img-new" />
              </div>
              <h3 className="discipline-title-new">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section className="about-section section-dark" id="about">
    <div className="container">
      <div className="about-header-mobile">
        <p className="section-subtitle-small">Who We are?</p>
        <h2 className="section-title-left">MM Tiger's Skating <br /> <span>Academy</span></h2>
      </div>

      <div className="about-content-wrapper">
        <div className="about-text-content">
          <div className="about-header-desktop">
            <p className="section-subtitle-small">Who We are?</p>
            <h2 className="section-title-left">MM Tiger's Skating <br /> <span className="text-orange">Academy</span></h2>
          </div>

          <p className="about-p">
            MM Tigers Academy is a dedicated sports training academy committed to
            developing young athletes through structured coaching, discipline, and
            passion for sports.
          </p>

          <div className="about-cta">
            <button className="btn btn-primary">Explore More</button>
          </div>
        </div>

        <div className="about-visuals">
          <div className="about-image-frame">
            <img
              src={trophy}
              alt="Trophies"
              className="about-main-img"
            />
            <div className="coaching-info-box">
              <p>Coach for Roller Hockey / Roll Ball / Archery / Silambattam</p>
            </div>
          </div>
          <div className="champion-card">
            <h4>Become a Champion with Playing a Skating Academy</h4>
            <p>"Every great champion starts with practice. Skating is where the journey begins".</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section className="stats-section" id="stats" style={{ position: 'relative', overflow: 'hidden' }}>
    <div className="corner-shape top-left orange"></div>
    <div className="corner-shape top-right orange"></div>
    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
      <h2 className="text-orange-center">Our Strength In <span>Numbers</span></h2>
      <p className="stats-desc">
        Experienced coaches guide every athlete with care and discipline.<br />
        Award-winning training programs support all age groups.<br />
        Building confidence, skill, and champions together.
      </p>

      <div className="stats-visual-container">
        <div className="stats-watermark">
          <img src={statsBg} alt="" />
        </div>
        {/* Background Watermark Image or element would go here via CSS */}

        {/* Staggered Cards */}
        <div className="stat-card blue pos-1">
          <h3>8+</h3>
          <p>Awards</p>
        </div>

        <div className="stat-card purple pos-2">
          <h3>10+</h3>
          <p>Coaches</p>
        </div>

        <div className="stat-card green pos-3">
          <h3>2+</h3>
          <p>Teams</p>
        </div>

        <div className="stat-card maroon pos-4">
          <h3>Age Cut<br />Off</h3>
          <p>4+ & above</p>
        </div>
      </div>

      <div className="section-divider">
        <div className="line"></div>
        <div className="skate-icon">⛸️</div> {/* Use emoji or image if available. Emoji is safer for now. */}
        <div className="line"></div>
      </div>
    </div>
  </section>
);

const Mentors = () => (
  <section className="mentors-section" id="mentors" style={{ position: 'relative', overflow: 'hidden' }}>
    <div className="corner-shape bottom-left orange"></div>
    <div className="corner-shape bottom-right orange"></div>
    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
      <h2 className="section-title text-orange-center">Mentors of <span>Champions</span></h2>
      <p className="stats-desc">
        Driven by dedication and experience, our coaches inspire discipline, <br />
        teamwork, and excellence—guiding skaters from their first stride to competitive success.
      </p>

      <div className="mentors-watermark-container">
        <img src={mentorsBg} alt="" className="mentors-watermark" />
      </div>

      <div className="mentors-grid">
        <div className="mentor-item">
          <div className="mentor-img-circle">
            <img src={co4} alt="Mr. Manikandan" />
          </div>
          <div className="mentor-info-pill">
            <h4>Mr. K. Parthiban</h4>
            <p>chief coach silambam</p>
          </div>
        </div>

        <div className="mentor-item">
          <div className="mentor-img-circle">
            <img src={co2} alt="Mr.Thanigai" />
          </div>
          <div className="mentor-info-pill">
            <h4>Mr. R.THANIGAIVEL</h4>
            <p>Silambattam</p>
          </div>
        </div>

        <div className="mentor-item">
          <div className="mentor-img-circle">
            <img src={co1} alt="Mr.Dilli" />
          </div>
          <div className="mentor-info-pill">
            <h4>Mr.Dilliganesh</h4>
            <p>Roll Ball</p>
          </div>
        </div>

        <div className="mentor-item">
          <div className="mentor-img-circle">
            <img src={co3} alt="Mr.Karthick" />
          </div>
          <div className="mentor-info-pill">
            <h4>Mr E.Karthikeyan</h4>
            <p>Archery</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Achievements = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const achievements = [
    { id: 1, img: ach1, name: "Santhiya", achievement: "ZONAL Winner" },
    { id: 2, img: ach2, name: "Tharun", achievement: "STATE Finalist" },
    { id: 3, img: ach3, name: "Arjun", achievement: "DISTRICT Champ" },
    { id: 4, img: ach4, name: "Meera", achievement: "ZONAL Winner" },
    { id: 5, img: ach1, name: "Rohan", achievement: "STATE Medalist" }
  ];

  // Manual slideshow only - no useEffect

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % achievements.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  const getSlideClass = (index) => {
    if (index === activeIndex) return 'carousel-card slide-active';
    if (index === (activeIndex + 1) % achievements.length) return 'carousel-card slide-next';
    if (index === (activeIndex - 1 + achievements.length) % achievements.length) return 'carousel-card slide-prev';
    return 'carousel-card slide-hidden';
  };

  return (
    <section className="section section-dark" id="achievements">
      <div className="container">
        <h2 className="section-title text-white">Achievements That <span>Inspire</span></h2>
        <p className="section-subtitle">
          Our skaters have brought glory home. Here are some of our proud moments.
        </p>

        <div className="carousel-container">
          <button className="carousel-btn prev" onClick={prevSlide}>&#10094;</button>
          <div className="carousel-track">
            {achievements.map((item, index) => {
              const className = getSlideClass(index);
              return (
                <div key={item.id} className={className}>
                  <img src={item.img} alt="Achievement" />
                  <div className="achievement-info">
                    <p className="ach-name">Name : {item.name}</p>
                    <p className="ach-label">Achievement</p>
                    <p className="ach-detail">{item.achievement}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="carousel-btn next" onClick={nextSlide}>&#10095;</button>
        </div>

        <div className="carousel-dots">
          {achievements.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkatingFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const features = [
    {
      id: 1,
      title: "skating ",
      img: feature1,
      text: "Speed skating federation competition 11 skaters represented India in international Skating competition held at indonesia and secured medal in International 13 Skaters selected for Nationals 39 Skaters selected for State"
    },
    {
      id: 2,
      title: "roll ball",
      img: feature2,
      text: "Our academy has produced over 50+ state level champions in the last 2 years. Dedicated training sessions for advanced speed skating and artistic roller skating."
    },
    {
      id: 3,
      title: "Archery",
      img: feature3,
      text: "Join the most elite skating force in the region. Expert coaching, world-class equipment guidance, and a community that pushes you to greatness."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="skating-features-section" id="features">
      <div className="container">
        <h2 className="skating-main-title">Proud Sporting Achievements of Our Academy</h2>
        <div className="skating-features-slider">
          {features.map((feature, index) => (
            <div key={feature.id} className={`skating-feature-item ${index === activeIndex ? 'active' : ''}`}>
              <div
                className="skating-features-container"
                style={{
                  backgroundImage: `url(${india})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="skating-content-row">
                  <div className="skating-title-side">
                  
                    {feature.img !== india && (
                      <div className="skating-feature-icon">
                        <img src={feature.img} alt={feature.title} />
                      </div>
                     
                    )}
                     <h3>{feature.title}</h3>
                  </div>
                  <div className="skating-info-side">
                    <p>{feature.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-dots-orange">
          {features.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  // Define 3 sets of images for 3 rows
  const row1 = [
    { src: gal1, type: "wide" },
    { src: gal2, type: "small" },
    { src: gal3, type: "wide" },
    { src: gal4, type: "small" },
    { src: gal5, type: "wide" },
  ];

  const row2 = [
    { src: gal, type: "small" },
    { src: ach1, type: "wide" },
    { src: ach2, type: "small" },
    { src: ach3, type: "wide" },
    { src: gal1, type: "small" },
  ];

  const row3 = [
    { src: gal3, type: "wide" },
    { src: gal4, type: "small" },
    { src: gal2, type: "wide" },
    { src: ach4, type: "small" }, // Assuming ach4 exists or reuse ach3
    { src: gal5, type: "wide" },
  ];

  // Triplicate for seamless loop
  const marqueeRow1 = [...row1, ...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2, ...row2];
  const marqueeRow3 = [...row3, ...row3, ...row3];

  return (
    <section className="section gallery-section" id="gallery">
      <div className="corner-shape top-left"></div>
      <div className="corner-shape top-right"></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="section-title text-orange-center">Our Skating <span>Journey</span></h2>
        <p className="stats-desc">
          Explore our skating journey through powerful moments of speed, skill, and teamwork.
        </p>

        {/* Row 1 - Left Scroll */}
        <div className="gallery-marquee">
          <div className="gallery-track scroll-left">
            {marqueeRow1.map((img, index) => (
              <div key={`r1-${index}`} className={`gallery-item ${img.type}`}>
                <img src={img.src} alt="Gallery Moment" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Right Scroll */}
        <div className="gallery-marquee">
          <div className="gallery-track scroll-right">
            {marqueeRow2.map((img, index) => (
              <div key={`r2-${index}`} className={`gallery-item ${img.type}`}>
                <img src={img.src} alt="Gallery Moment" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 - Left Scroll */}
        <div className="gallery-marquee">
          <div className="gallery-track scroll-left">
            {marqueeRow3.map((img, index) => (
              <div key={`r3-${index}`} className={`gallery-item ${img.type}`}>
                <img src={img.src} alt="Gallery Moment" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

const Founder = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const founders = [
    {
      id: 1,
      name: "Mr. Manikandan",
      title: "Founder & Head Coach",
      details: [
        "• Coach for Roller hockey / Roll ball",
        "• Coach for Silambattam",
        "• Coach for Archery"
      ],
      quote: "Driven by dedication and experience, our coaches inspire discipline, teamwork, and excellence—guiding skaters from their first stride to competitive success.",
      img: founder3
    },
    {
      id: 2,
      name: "Mr. Name 2",
      title: "Co-Founder",
      details: [
        "• International Medalist",
        "• Special Training for Speed Skating",
        "• Senior Coach"
      ],
      quote: "Skating is not just a sport; it is a way of life. At MM Tigers, we believe in nurturing talent with the right guidance and discipline.",
      img: founder2
    },

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % founders.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [founders.length]);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % founders.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + founders.length) % founders.length);

  return (
    <section className="section section-dark founder-section" id="founder">
      <div className="founder-watermark"></div>
      <div className="container founder-container" key={founders[activeIndex].id}>
        <button className="carousel-btn prev-light founder-nav-btn" onClick={prevSlide}>&#10094;</button>
        <div className="founder-content fade-in">
          <h2 className="section-title text-left text-orange">Founder of <span className="text-orange">MM Tiger's Skating Academy</span></h2>
          <div className="founder-details" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ color: 'white', fontSize: '2.2rem', fontWeight: '800', marginBottom: '0.4rem' }}>{founders[activeIndex].name}</h3>
            <p style={{ color: 'var(--primary-orange)', fontWeight: '700', fontSize: '1.1rem', marginBottom: '0.8rem' }}>{founders[activeIndex].title}</p>
            <div style={{ color: '#D1D5DB', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              {founders[activeIndex].details.map((detail, idx) => (
                <p key={idx}>{detail}</p>
              ))}
            </div>
          </div>
          <p className="founder-text">
            "{founders[activeIndex].quote}"
          </p>
        </div>
        <div className="founder-image-wrapper fade-in">
          <div className="founder-img-box">
            <img src={founders[activeIndex].img} alt={founders[activeIndex].name} />
          </div>
        </div>
        <button className="carousel-btn next-light founder-nav-btn" onClick={nextSlide}>&#10095;</button>

        <div className="carousel-dots-orange founder-dots">
          {founders.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const testimonials = [
    { id: 1, text: "Professional Coaching done for kids in Skating...Excellent and Skilled Coach Mr.Manikandan sir, with kindness and goal oriented.", author: "Raja mahalingam" },
    { id: 2, text: "Senvina shito - Ryu KARATE training  the kids and adults both Boys and Girls. In our MM Tigers sports Acadmy.", author: "ramya " },
    { id: 3, text: "Great coaches and atmosphere. i had nice experience from this academy ", author: "kumar " },
    { id: 4, text: "My kid loves going here everyday!", author: "divya " },
    { id: 5, text: "Professional and caring staff good experience .i very nice place ", author: "prabhakaran" }
  ];

  // Manual slideshow only

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getSlideClass = (index) => {
    if (index === activeIndex) return 'testimonial-card-carousel slide-active';
    if (index === (activeIndex + 1) % testimonials.length) return 'testimonial-card-carousel slide-next';
    if (index === (activeIndex - 1 + testimonials.length) % testimonials.length) return 'testimonial-card-carousel slide-prev';
    return 'testimonial-card-carousel slide-hidden';
  };

  return (
    <section className="section testimonial-section" id="testimonials">
      <div className="testimonial-section-overlay"></div>
      <div className="container">
        <div className="testimonial-header">
          <h2 className="section-title text-orange-center">Testimonials</h2>
          <h3 className="section-subtitle-bold">What our Players Response</h3>
        </div>

        <div className="testimonials-wrapper">
          <div className="carousel-container testimonials-carousel">
            <button className="carousel-btn prev-light" onClick={prevSlide}>&#10094;</button>
            <div className="carousel-track">
              {testimonials.map((item, index) => {
                const className = getSlideClass(index);
                return (
                  <div key={item.id} className={className}>
                    <div className="testimonial-avatar">
                      <div className="avatar-circle"></div>
                    </div>
                    <h4>{item.author}</h4>
                    <div className="stars">★★★★★</div>
                    <p>"{item.text}"</p>
                  </div>
                );
              })}
            </div>
            <button className="carousel-btn next-light" onClick={nextSlide}>&#10095;</button>
          </div>

          <p className="google-rating">Google rating score: 4.9 of 5, based on 9 reviews</p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="footer" id="footer">
    <div className="container footer-content-wrapper">

      {/* Left Side: Info */}
      <div className="footer-info">
        <h2 className="footer-title">MM TIGERS</h2>
        <p className="footer-subtitle">Master The Wheels, Achieve Greatness</p>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-copyright">
          © {new Date().getFullYear()} MM Tigers. All rights reserved.
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="footer-form">
        <h3>Get In Touch</h3>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" rows="4"></textarea>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>

    </div>
  </footer>
);

// --- Main App Component ---

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Disciplines />
      <About />
      <Stats />
      <Mentors />
      <Achievements />
      <SkatingFeatures />
      <Gallery />
      <Founder />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
