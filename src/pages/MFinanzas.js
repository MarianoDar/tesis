import Navbar from "../components/Navbar/Navbar";
import Text1 from "../components/Main/Text1";
import SectionAbout from "../components/SobreNosotros/SectionAbout";
import SectionService from "../components/ServiciosOfrecemos/SectionService";
import FrameChildren from "../components/TrabajosExitosos/FrameChildren";
import OurAwesomeTeam from "../components/Cards/OurAwesomeTeam";
import YourEmailInput from "../components/Opiniones/YourEmailInput";
import ContactUs from "../components/EnviarReseña/ContactUs";
import MainContent from "../components/Footer/MainContent";
import "./MFinanzas.css";

const MFinanzas = () => {
  return (
    <>
      <Navbar />
      <section className="footer-frame">
        <div className="f-r-a-m-e" />
        <div className="ohio-st-south-gate-c-a" />
        <Text1 />
        <div className="backgorund" />
      </section>
      <SectionAbout />
      <SectionService />
      <FrameChildren />
      <section className="social-media-icons">
        <div className="mail-your-email-address-and-ph">
          <OurAwesomeTeam />
          <YourEmailInput />
          <ContactUs />
        </div>
      </section>
      <MainContent />
    </>
  );
};

export default MFinanzas;
