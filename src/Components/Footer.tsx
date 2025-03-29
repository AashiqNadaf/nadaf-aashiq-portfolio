const Footer = () => {
  return (
    <footer className="w-full bg-[#4D7CF4] text-white py-4 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Nadaf Aashiq. All Rights Reserved. | Built
        with React & Tailwind
      </p>
    </footer>
  );
};

export default Footer;