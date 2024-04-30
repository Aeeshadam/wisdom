const Confirmation = ({ children }) => {
  return (
    <div className="absolute top-0 right-1/3 bg-white p-6 border-2 border-gray-200">
      {children}
    </div>
  );
};
export default Confirmation;
