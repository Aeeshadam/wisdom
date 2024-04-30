const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <p className="text-gray-500 text-center p-6 mt-auto">
      Copyright &copy; {year}. All rights reserved.
    </p>
  );
};

export default Footer;
