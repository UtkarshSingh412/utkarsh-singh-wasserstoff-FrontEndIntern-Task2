function Input({ placeholder, type = "text", value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-3 rounded-lg border border-gray-300 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
    />
  );
}
export default Input;
