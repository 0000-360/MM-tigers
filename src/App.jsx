import { useEffect, useState } from 'react';
import ach1 from './image/ach1.jpeg';
import gal13 from './image/ach13.jpeg';
import gal14 from './image/ach14.jpeg';
import gal15 from './image/ach15.jpeg';
import ach2 from './image/ach2.jpeg';
import ach3 from './image/ach3.jpeg';
import ach4 from './image/ach4.jpg';
import ach5 from './image/ach5.jpeg';
import ach6 from './image/ach6.jpeg';
import feature3 from './image/Archery1.png';
import av1 from './image/av1.jpeg';
import av2 from './image/av2.jpeg';
import av3 from './image/av3.jpg';
import av4 from './image/av4.png';
import av5 from './image/av5.jpeg';
import statsBg from './image/bg1.png';
import co1 from './image/co1.jpeg';
import co2 from './image/co2.jpeg';
import co3 from './image/co3.jpeg';
import co4 from './image/co4.jpeg';
import coachMani from './image/coach_manikandan.jpg';
import des from './image/des.jpeg';
import founder2 from './image/founder2.jpeg';
import founder3 from './image/founder3.jpeg';
import gal10 from './image/gal10.jpg';
import gal11 from './image/gal11.jpg';
import gal12 from './image/gal12.jpg';
import gal16 from './image/gal16.jpg';
import gal3 from './image/gal3.jpg';
import gal4 from './image/gal4.jpg';
import gal5 from './image/gal5.jpg';
import gal6 from './image/gal6.jpg';
import gal7 from './image/gal7.jpg';
import gal8 from './image/gal8.jpg';
import gal9 from './image/gal9.jpg';
import gal from './image/gallary.jpg';
import india from './image/india flag.png';
import logo from './image/logo.png';
import mentorsBg from './image/logo2.png';
import open from './image/opening.jpg';
import feature2 from './image/Roll_Ball1.png';
import feature1 from './image/Roller_hockey1.png';
import feature4 from './image/silam.png';
import feature5 from './image/skating_new.png';
import trophy from './image/trophy2.png';






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
          <div className="logo-circle"><img src={logo} alt="" /></div>
          <span className="logo-text">MM Tigers Skating Academy</span>
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
          {/* <button className="btn btn-primary" onClick={() => document.getElementById('footer').scrollIntoView({ behavior: 'smooth' })}>Let's Play</button> */}
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
    { title: 'Skating', img: feature5 },
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
          </div>
        </div>


        <div className="about-visuals">
          <div className="about-image-container">
            <div className="border-accent top-right"></div>
            <div className="border-accent bottom-left"></div>
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
            <img src={coachMani} alt="Mr. R.Manikandan" />
          </div>
          <div className="mentor-info-pill">
            <h4>Mr. R.Manikandan</h4>
            <p>Skating Chief Coach</p>
            <p style={{ fontSize: '0.7rem', lineHeight: '1.2' }}>Technical Committee speed skating federation of India</p>
          </div>
        </div>
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
    { id: 1, img: ach1, },
    { id: 2, img: ach2 },
    { id: 3, img: ach3 },
    { id: 4, img: ach4 },
    { id: 5, img: ach5 },
    { id: 6, img: ach6 },

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
        <div className="section-subtitle-main">
          <center> <p className="section-subtitle">
            Our athletes have earned recognition at district and state levels.</p></center>
          <center> <p className="section-subtitle">
            Every award reflects consistent training and discipline.</p></center>
          <center> <p className="section-subtitle">
            We celebrate progress, performance, and pride
          </p></center>
        </div>
        <div className="carousel-container">
          <button className="carousel-btn prev" onClick={prevSlide}>&#10094;</button>
          <div className="carousel-track">
            {achievements.map((item, index) => {
              const className = getSlideClass(index);
              return (
                <div key={item.id} className={className}>
                  <img src={item.img} alt="Achievement" />
                  <div className="achievement-info">

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
      title: "Roll ball",
      img: feature2,
      text: "Our academy has produced over 10+ state level champions in the last 2 years. Dedicated training sessions for advanced speed skating and artistic roller skating."
    },
    {
      id: 3,
      title: "Archery",
      img: feature3,
      text: "We started in the year 2025 with dedicated and experienced coach who produced National medalist  Mr.Karthi"
    },
    {
      id: 4,
      title: "Silambam",
      img: feature4,
      text: "We have state and National medalist in silambam. We have chief coach Mr.parthiban Who is Technical director in Tamilnadu silambam Association"
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
                className="skating-features-container">
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
    { src: gal11, type: "wide" },
    { src: gal13, type: "small" },
    { src: gal3, type: "wide" },
    { src: gal4, type: "small" },
    { src: gal5, type: "wide" },
    { src: gal16, type: "wide" },
  ];

  const row2 = [
    { src: gal, type: "small" },
    { src: gal6, type: "wide" },
    { src: gal7, type: "small" },
    { src: gal8, type: "wide" },
    { src: gal9, type: "small" },
  ];

  const row3 = [
    { src: gal10, type: "wide" },
    { src: gal11, type: "small" },
    { src: gal12, type: "wide" },
    { src: gal14, type: "small" }, // Assuming ach4 exists or reuse ach3
    { src: gal15, type: "wide" },
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
      name: "Mr.R.Manikandan",
      title: "Founder of MM Tiger's Skating Academy",
      details: [
        "BSC, M.P.ED, PG Diploma in Yoga",
        "Technical Director",
        "Tamilnadu Speed skating association",
        "Resource person Tamilnadu coaches clinic class."
      ],
      img: founder3
    },
    {
      id: 2,
      name: "Mrs.M.Meenambigai",
      title: "Founder of MM Tiger's Skating Academy",
      details: [
        "BA,M.P.ED,PG Diploma in Yoga",
        "Technical Committee in Speed skating federation of India",
        "Treasurer Tiruvallur district Speed skating association",
      ],
      img: founder2
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % founders.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [founders.length]);

  return (
    <section className="section section-dark founder-section" id="founder">
      <div className="decoration-dots">
        {founders.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>

      <div className="container founder-container">
        <div className="founder-content-wrapper" key={founders[activeIndex].id}>
          <div className="founder-text-side fade-in">
            <h2 className="founder-main-heading">Founder of MM Tiger's Skating Academy</h2>
            <div className="founder-info-content">
              <h3 className="founder-display-name">{founders[activeIndex].name}</h3>
              <div className="founder-bio-list">
                {founders[activeIndex].details.map((detail, idx) => (
                  <p key={idx}>{detail}</p>
                ))}
              </div>
            </div>
            <div className="founder-watermark-logo">
              <img src={mentorsBg} alt="Watermark" />
            </div>
          </div>

          <div className="founder-image-side fade-in">
            <div className="founder-image-frame-refined">
              <img src={founders[activeIndex].img} alt={founders[activeIndex].name} />
            </div>
          </div>
        </div>
      </div>

      <div className="decoration-shape-bottom"></div>
    </section>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const testimonials = [
    { id: 1, text: "Professional Coaching done for grand son in Skating...Excellent and Skilled Coach Mr.Manikandan sir, with kindness and goal oriented.", author: "Raja mahalingam", image: av1 },
    { id: 2, text: "Senvina shito - Ryu KARATE training  the kids and adults both Boys and Girls. In our MM Tigers sports Acadmy.", author: "ramya ", image: av4 },
    { id: 3, text: "Great coaches and atmosphere. i had nice experience from this academy ", author: "kumar ", image: av2 },
    { id: 4, text: "My kid loves going here everyday!", author: "divya ", image: av3 },
    { id: 5, text: "Professional and caring staff good experience .i very nice place ", author: "prabhakaran", image: av5 }
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
                      <div className="avatar-circle">
                        <img src={item.image} alt={item.author} />
                      </div>
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

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSend = () => {
    const { name, email, message } = formData;
    // Construct mailto link
    // Replace 'mmtigers.skating@gmail.com' with the actual academy email if known
    const recipient = "mmtigerssportacademy@gmail.com";
    const subject = encodeURIComponent(`Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  return (
    <footer className="footer" id="footer">
      <div className="container footer-content-wrapper">

        <div className="footer-top">
          <div className="footer-col footer-contact">
            <h3 className="contact-title">Contact Us</h3>
            <input
              className="footer-input"
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="footer-input"
              type="email"
              placeholder="Gmail"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              className="footer-input"
              placeholder="Message"
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button
              className="btn btn-primary"
              onClick={handleSend}
              style={{ marginTop: '1rem', width: '100%' }}
            >
              Send Message
            </button>
          </div>

          <div className="footer-col footer-map">
            <div className="map-wrap">
              <iframe
                title="MM Tigers map"
                src="https://www.google.com/maps?q=MM+Tigers+Skating+Academy+Chennai&output=embed"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <p className="footer-address">No 256, Ambathur puzhal main road, 66, Sivaprakasham Nagar, Surapet, Chennai, Tamil Nadu 600066  </p>
            <p> Contact Us : 98947 12224</p>
          </div>

          <div className="footer-col footer-links-grid">
            <div className="links-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#home">Home</a></li>

                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#footer">Contact us</a></li>
              </ul>
            </div>

            <div className="links-col">
              <h4>Services</h4>
              <ul>
                <li>Roller Hockey</li>
                <li>Roller Handball</li>
                <li>Archery</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-brand">
            <img src={logo} alt="MM Tigers" className="footer-brand-logo" />
            <span className="footer-brand-text">MM TIGER'S SKATING ACADEMY</span>
          </div>

          <div className="footer-bottom-right">
            <div className="madeby">
              <span>Website made by</span>
              <img src={des} alt="Designhub" className="madeby-logo" />
              <span className="madeby-name">Designhub</span>
            </div>

            <div className="socials">
              <a href="#" className="social-btn">in</a>
              <a href="#" className="social-btn">f</a>
            </div>
          </div>
        </div>

        <div className="footer-copyright-row">
          <div>© {new Date().getFullYear()} MM Tigers Skating. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919894712224"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        viewBox="0 0 24 24"
        width="35"
        height="35"
        fill="white"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </a>
  );
};

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
      <WhatsAppButton />
    </div>
  );
}

export default App;
