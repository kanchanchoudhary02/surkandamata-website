import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Menu, X, ArrowUpRight, ArrowRight, Mountain, CableCar, ShieldCheck, Clock3,
  MapPin, Compass, Heart, Camera, CalendarDays, Phone, Mail, Instagram, Facebook,
  Youtube, ChevronDown, Navigation, Sparkles, Footprints, CircleHelp
} from "lucide-react";
import "./styles.css";

const photos = {
  // Direct image-file URLs (not article pages), so browsers can render them correctly.
  hero: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=90",
  temple: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1400&q=88",
  mountain: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=88",
  forest: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=88",
  ropeway: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=88",
  sunset: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=88"
};

const navLinks = [
  ["About", "#about"], ["Ropeway", "#ropeway"], ["Experience", "#experience"],
  ["Gallery", "#gallery"], ["How to Reach", "#reach"], ["Contact", "#contact"]
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const submitContact = (e) => {
    e.preventDefault();
    // Front-end demo only: connect this handler to the site's verified backend before launch.
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-cream text-ink">
      <div className="topline">
        <span><MapPin size={13}/> Kaddukhal, Tehri Garhwal, Uttarakhand</span>
        <span className="topline-right"><Clock3 size={13}/> Ropeway timings may vary with weather</span>
      </div>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Surkanda Devi home">
          <img className="brand-logo" src="/images/surkanda-ropeway-logo.jpeg" alt="Maa Surkanda Devi Ropeway logo"/>
          <span className="brand-wordmark"><strong>Maa Surkanda Devi</strong><small>ROPEWAY · FAITH · NATURE · ADVENTURE</small></span>
        </a>
        <nav className={`desktop-nav ${menuOpen ? "mobile-open" : ""}`} aria-label="Main navigation">
          {navLinks.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-cta" href="#visit">Plan your visit <ArrowUpRight size={15}/></a>
        </nav>
        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X/> : <Menu/>}
        </button>
      </header>

      <main>
        <section className="hero" id="home" style={{ backgroundImage: `linear-gradient(90deg, rgba(5,31,26,.88) 0%, rgba(5,31,26,.62) 48%, rgba(5,31,26,.12) 100%), url("${photos.hero}")` }}>
          <div className="hero-content">
            <div className="eyebrow light"><span className="eyebrow-line"/> A SACRED JOURNEY IN THE HIMALAYAS</div>
            <h1>Where faith meets<br/><em>divine peace.</em></h1>
            <p className="hero-copy">Find a moment of stillness above the clouds. Discover the sacred home of Maa Surkanda Devi, surrounded by the timeless beauty of Uttarakhand.</p>
            <div className="hero-actions">
              <a className="btn btn-gold" href="#visit">Plan your visit <ArrowRight size={17}/></a>
              <a className="btn btn-glass" href="#about"><span className="play-dot">↗</span> Explore the temple</a>
            </div>
            <div className="hero-note"><span className="note-icon"><Mountain size={19}/></span><span><b>2,756 m above sea level</b><small>A divine view of the Himalayan ranges</small></span></div>
          </div>
          <div className="hero-stamp"><span>OM</span><small>SHRI MAA<br/>SURKANDA DEVI</small></div>
          <a className="scroll-cue" href="#highlights"><span/> SCROLL TO DISCOVER</a>
        </section>

        <section className="stats-strip" id="highlights">
          <div className="stat"><span className="stat-icon"><CableCar/></span><div><strong>~5 min</strong><small>Scenic ropeway ride*</small></div></div>
          <div className="stat"><span className="stat-icon"><Mountain/></span><div><strong>2,756 m</strong><small>Mountain altitude</small></div></div>
          <div className="stat"><span className="stat-icon"><Heart/></span><div><strong>One sacred place</strong><small>Peace for every pilgrim</small></div></div>
          <div className="stat"><span className="stat-icon"><Compass/></span><div><strong>Kaddukhal</strong><small>Gateway to the temple</small></div></div>
        </section>
        {/* <p className="fineprint">*Ropeway journey time and operating hours are indicative. Confirm locally before travelling.</p> */}

        <section className="section about-section" id="about">
          <div className="about-image-wrap">
            <img className="about-image" src={photos.temple} alt="Temple architecture in the Himalayan region" loading="lazy"/>
            <div className="image-caption"><span className="caption-symbol">✳</span><span><b>A place to pause</b><small>Let the mountains quiet your mind.</small></span></div>
            <div className="vertical-label">UTTARAKHAND · INDIA</div>
          </div>
          <div className="about-copy">
            <div className="eyebrow"><span className="eyebrow-line"/> THE STORY OF SURKANDA</div>
            <h2>A sacred abode<br/>in the heart of <em>the Himalayas.</em></h2>
            <p>Perched among forested hills near Dhanaulti, Surkanda Devi Temple is a revered shrine dedicated to Goddess Parvati. Pilgrims come here seeking blessings, while the surrounding mountain landscape offers a rare sense of calm.</p>
            <p>The journey is as meaningful as the destination: winding mountain roads, fresh alpine air and sweeping views make every visit memorable.</p>
            <a className="text-link" href="#experience">Discover the temple <ArrowRight size={17}/></a>
            <div className="quote-mark">“</div>
            <blockquote>Come with a prayer. Leave with peace.</blockquote>
          </div>
        </section>

        <section className="ropeway-section" id="ropeway">
          <div className="ropeway-photo" style={{backgroundImage:`url("${photos.ropeway}")`}}/>
          <div className="ropeway-copy">
            <div className="eyebrow light"><span className="eyebrow-line"/> THE JOURNEY UP</div>
            <h2>Rise above the<br/><em>ordinary.</em></h2>
            <p>The ropeway from Kaddukhal offers a convenient way to approach the temple while taking in the mountain scenery. Prefer the trail? Check local conditions and choose the route that suits you.</p>
            <div className="ropeway-points">
              <div><CableCar/><span><b>Scenic ride</b><small>Approx. 5 minutes*</small></span></div>
              <div><ShieldCheck/><span><b>Travel thoughtfully</b><small>Follow operator guidance</small></span></div>
            </div>
            <a className="btn btn-gold" href="#visit">Ropeway & travel info <ArrowRight size={17}/></a>
            <small className="dark-fineprint">*Confirm current operations, fares and availability with the local operator.</small>
          </div>
        </section>

        <section className="section experiences" id="experience">
          <div className="section-heading">
            <div className="eyebrow centered"><span className="eyebrow-line"/> MAKE YOUR VISIT MEANINGFUL <span className="eyebrow-line"/></div>
            <h2>More than a destination.</h2>
            <p>A journey for the soul, the senses and the stories you take home.</p>
          </div>
          <div className="experience-grid">
            <article className="experience-card"><div className="card-image"><img src={photos.mountain} alt="Majestic Himalayan mountain scenery" loading="lazy"/><span className="card-number">01</span></div><div className="card-body"><Mountain/><h3>Himalayan vistas</h3><p>Pause for panoramic mountain views and the quiet grandeur of nature.</p><a href="#gallery" aria-label="Explore Himalayan vistas"><ArrowUpRight/></a></div></article>
            <article className="experience-card"><div className="card-image"><img src={photos.forest} alt="Peaceful green forest" loading="lazy"/><span className="card-number">02</span></div><div className="card-body"><Heart/><h3>Spiritual stillness</h3><p>Take a breath, offer a prayer and reconnect with what matters most.</p><a href="#about" aria-label="Learn about spiritual stillness"><ArrowUpRight/></a></div></article>
            <article className="experience-card"><div className="card-image"><img src={photos.temple} alt="Temple architecture" loading="lazy"/><span className="card-number">03</span></div><div className="card-body"><Camera/><h3>Culture & heritage</h3><p>Discover local traditions, sacred stories and the living faith of devotees.</p><a href="#gallery" aria-label="View culture and heritage"><ArrowUpRight/></a></div></article>
          </div>
        </section>

        <section className="visit-banner" id="visit" style={{backgroundImage:`linear-gradient(90deg, rgba(5,31,26,.90), rgba(5,31,26,.48)), url("${photos.sunset}")`}}>
          <div className="visit-inner">
            <div><div className="eyebrow light"><span className="eyebrow-line"/> YOUR NEXT CHAPTER STARTS HERE</div><h2>Let the mountains<br/><em>call you home.</em></h2><p>Plan ahead for a peaceful and memorable visit to Maa Surkanda Devi.</p></div>
            <div className="visit-actions"><a className="btn btn-gold" href="#reach">Plan your journey <ArrowRight size={17}/></a><a className="visit-secondary" href="#contact">Have a question? Contact us <ArrowUpRight size={15}/></a></div>
          </div>
        </section>

        <section className="section gallery-section" id="gallery">
          <div className="section-heading">
            <div className="eyebrow centered"><span className="eyebrow-line"/> MOMENTS IN THE MOUNTAINS <span className="eyebrow-line"/></div>
            <h2>A glimpse of the divine.</h2>
            <p>Nature, devotion and the beauty of the journey.</p>
          </div>
          <div className="gallery-grid">
            <img className="gallery-tall" src={photos.temple} alt="Sacred temple setting" loading="lazy"/>
            <img src={photos.mountain} alt="Mountain peaks" loading="lazy"/>
            <img src={photos.forest} alt="Mountain forest" loading="lazy"/>
            <img className="gallery-wide" src={photos.sunset} alt="Sunset over the mountains" loading="lazy"/>
          </div>
          <p className="gallery-note"><Camera size={15}/> A glimpse of the Himalayan landscape. For official promotions, use approved temple and ropeway photographs.</p>
        </section>

        <section className="section reach-section" id="reach">
          <div className="reach-copy">
            <div className="eyebrow"><span className="eyebrow-line"/> FIND YOUR WAY</div>
            <h2>The path to<br/><em>peace begins here.</em></h2>
            <p>Surkanda Devi Temple is near Kaddukhal, on the Dhanaulti–Chamba route in Tehri Garhwal, Uttarakhand.</p>
            <div className="reach-list">
              <div><span><Navigation/></span><p><b>By road</b><small>Reach Kaddukhal via Dhanaulti or Chamba. Local taxis may be available.</small></p></div>
              <div><span><Compass/></span><p><b>By train</b><small>Dehradun is a key rail connection; arrange onward road travel.</small></p></div>
              <div><span><Footprints/></span><p><b>On foot</b><small>A steep walking route may be possible. Check local conditions before starting.</small></p></div>
            </div>
            <a className="btn btn-maroon" href="https://www.google.com/maps/search/?api=1&query=Surkanda+Devi+Temple+Uttarakhand" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={17}/></a>
          </div>
          <div className="map-card">
            <div className="map-art"><div className="map-contour contour-one"/><div className="map-contour contour-two"/><div className="map-contour contour-three"/><div className="map-pin"><MapPin size={27}/></div><div className="map-label"><small>YOUR DESTINATION</small><b>Surkanda Devi Temple</b><span>Kaddukhal, Uttarakhand</span></div></div>
            <div className="map-bottom"><span><MapPin size={16}/> Tehri Garhwal, Uttarakhand</span><a href="https://www.google.com/maps/search/?api=1&query=Surkanda+Devi+Temple+Uttarakhand" target="_blank" rel="noreferrer">Open map <ArrowUpRight size={15}/></a></div>
          </div>
        </section>

        <section className="faq-section">
          <div className="section-heading">
            <div className="eyebrow centered"><span className="eyebrow-line"/> GOOD TO KNOW <span className="eyebrow-line"/></div>
            <h2>Before you set out.</h2>
            <p>A few helpful notes for a smoother visit.</p>
          </div>
          <div className="faq-list">
            {[
              ["When should I visit?", "Weather and visibility change with the seasons. Check a current local forecast and any temple or ropeway notices before you travel."],
              ["Is the ropeway always operational?", "Operations may change due to weather, maintenance or local conditions. Please confirm the latest status and timings with the local operator before departure."],
              ["What should I bring?", "Wear comfortable shoes and layered clothing, carry drinking water, and keep some cash for local purchases. Respect temple customs and keep the area clean."],
              ["Can I travel with children or older family members?", "Plan according to each traveller's mobility and health needs. Confirm accessibility and safety arrangements with the local operator before travelling."]
            ].map(([q, a], i) => <div className={`faq-item ${faqOpen === i ? "faq-active" : ""}`} key={q}><button onClick={() => setFaqOpen(faqOpen === i ? -1 : i)} aria-expanded={faqOpen === i}><span>{q}</span><ChevronDown size={19}/></button>{faqOpen === i && <p>{a}</p>}</div>)}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy"><div className="eyebrow light"><span className="eyebrow-line"/> WE'RE HERE TO HELP</div><h2>Every journey<br/>starts with a <em>question.</em></h2><p>Need help planning your visit? Send a message and the team can guide you to the right local information.</p><div className="contact-detail"><span><Mail/></span><div><small>EMAIL</small><a href="mailto:info@surkandadevi.com">info@surkandadevi.com</a></div></div><div className="contact-detail"><span><Phone/></span><div><small>PHONE</small><a href="tel:+919871004053">+91 98710 04053</a></div></div><p className="contact-disclaimer">Contact details are taken from the current public website and should be verified before launch.</p></div>
          <form className="contact-form" onSubmit={submitContact}>
            <h3>Send us a message</h3><p>Fill in your details and we'll be in touch.</p>
            {submitted ? <div className="success-message"><ShieldCheck size={24}/><b>Thank you for reaching out.</b><span>This is a front-end demo. Connect the form to the verified backend to send messages.</span><button type="button" onClick={() => setSubmitted(false)}>Send another message</button></div> : <>
              <label>Full name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name"/></label>
              <div className="form-row"><label>Email address<input type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com"/></label><label>Phone number<input type="tel" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="+91"/></label></div>
              <label>Your message<textarea required rows="4" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="How can we help you plan your visit?"/></label>
              <button className="btn btn-gold form-submit" type="submit">Send enquiry <ArrowRight size={17}/></button>
              <small className="form-note">Demo form only — no message is sent until a backend endpoint is connected.</small>
            </>}
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main">
          <a className="brand footer-brand" href="#home"><img className="brand-logo" src="/images/surkanda-ropeway-logo.jpeg" alt="Maa Surkanda Devi Ropeway logo"/><span className="brand-wordmark"><strong>Maa Surkanda Devi</strong><small>ROPEWAY · FAITH · NATURE · ADVENTURE</small></span></a>
          <p>A sacred journey in the heart of Uttarakhand.<br/>May your path be filled with peace and blessings.</p>
          <div className="footer-social"><a href="#contact" aria-label="Facebook"><Facebook/></a><a href="#contact" aria-label="Instagram"><Instagram/></a><a href="#contact" aria-label="YouTube"><Youtube/></a></div>
        </div>
        <div className="footer-links">{navLinks.map(([label, href])=><a href={href} key={label}>{label}</a>)}<a href="#contact">Privacy policy</a></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Surkanda Devi Ropeway Project Pvt. Ltd. All rights reserved.</span><span>Made with reverence in Uttarakhand <Heart size={13}/></span></div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App/>);