import "./MainContent.css";

const MainContent = () => {
  return (
    <section className="main-content">
      <div className="footer6">
        <img className="background-icon" alt="" src="/background.svg" />
        <div className="l-o-g-o">
          <div className="text-description">
            <button className="logo1">
              <div className="bg2" />
              <b className="m3">M</b>
            </button>
            <div className="minima-is-a">
              Mundo Finanzas
            </div>
          </div>
        </div>
        <div className="get-in-touch-frame">
          <b className="get-in-touch3">Contáctenos</b>
          <div className="mail-frame1">
            <img className="mail-icon" loading="eager" alt="" src="/mail.svg" />
            <div className="yourmailhellocom1">marianodaruich0@gmail.com</div>
          </div>
          <div className="mail-frame2">
            <img
              className="phone-icon1"
              loading="eager"
              alt=""
              src="/phone.svg"
            />
            <div className="div">+54 9 381 440-6726</div>
          </div>
        </div>
        <div className="social-media-frame">
          <b className="social-media3">Redes Sociales</b>
          <div className="social-media-links">
            <img
              className="instagram-icon"
              loading="eager"
              alt=""
              src="/instagram.svg"
            />
            <img
              className="twitter-icon"
              loading="eager"
              alt=""
              src="/twitter.svg"
            />
            <img
              className="facebook-icon"
              loading="eager"
              alt=""
              src="/facebook.svg"
            />
          </div>
        </div>
        <div className="newsletter-frame">
          <b className="join-a-newsletter">Suscríbete</b>
          <div className="email-input-frame">
            <div className="your-email-label">
              <div className="your-email4">Email</div>
              <div className="form6">
                <input
                  className="enter-your-email1"
                  placeholder="Ingrese su email"
                  type="text"
                />
              </div>
            </div>
            <button className="button2">
              <b className="subscribe">Subscribirse</b>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
