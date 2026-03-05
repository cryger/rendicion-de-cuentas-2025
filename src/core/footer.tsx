import footerImg from "@/assets/footer-logo.png";

const Footer = () => {
  return (
    <footer className="w-full">
      <img
        src={footerImg}
        alt="Footer Hospital San José del Guaviare"
        className="w-full h-auto"
      />
    </footer>
  );
};

export default Footer;