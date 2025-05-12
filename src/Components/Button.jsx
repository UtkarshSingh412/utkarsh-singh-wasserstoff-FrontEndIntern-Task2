function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition"
    >
      {children}
    </button>
  );
}
export default Button;
