import "./MainContent.css";
import React, { useState } from 'react';

const MainContent = () => {
  const redirectToInstagram = () => {
    window.location.href = 'https://www.instagram.com';
  };

  const redirectToTwitter = () => {
    // Coloca la URL de tu cuenta de Twitter
    window.location.href = 'https://www.twitter.com/';
  };

  const redirectToFacebook = () => {
    // Coloca la URL de tu página de Facebook
    window.location.href = 'https://www.facebook.com/';
  };

  const [contrasena, setContrasena] = useState('');

  const handleConsultarClick = () => {
    if (contrasena === 'estudio2024') {
      // Redireccionar si la contraseña es correcta
      window.location.href = '../pages/reseñas/Reseña.html';
    } else {
      // Mostrar un mensaje de error o realizar otras acciones en caso de contraseña incorrecta
     alert('Contraseña incorrecta');
    }
  };
  return (
    <section className="main-content" id="contacto">
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
          <b className="get-in-touch3">Contacto</b>
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
              onClick={redirectToInstagram}
              style={{ cursor: 'pointer' }}
            />
            <img
              className="twitter-icon"
              loading="eager"
              alt=""
              src="/twitter.svg"
              onClick={redirectToTwitter}
              style={{ cursor: 'pointer' }}
            />
            <img
              className="facebook-icon"
              loading="eager"
              alt=""
              src="/facebook.svg"
              onClick={redirectToFacebook}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
        <div className="newsletter-frame">
          <b className="join-a-newsletter">Consulta de reseñas</b>
          <div className="email-input-frame">
            <div className="your-email-label">
              <div>
                <div className="your-email4">Ingrese la contraseña</div>
                <div className="form6">
                  <input
                    className="enter-your-email1"
                    placeholder="Contraseña"
                    type="password" // Cambiado a tipo "password" para ocultar la contraseña
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                  />
                </div>
                <button className="button2" onClick={handleConsultarClick}>
                  <b className="subscribe">Consultar</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;