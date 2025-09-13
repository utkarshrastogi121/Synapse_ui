import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // 👉 You can add real authentication here
    navigate("/portal"); // redirect to PortalLayout
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-br from-indigo-50 to-pink-50">
      <div className="bg-white shadow-xl rounded-xl p-10 w-[420px] text-center">
        <div className="text-4xl text-blue-600 mb-4">
          <i className="fa-solid fa-notes-medical"></i>
        </div>
        <h1 className="text-2xl font-semibold mb-2">Integrated Health Portal</h1>
        <p className="text-gray-500 mb-6">
          Unified Traditional & Biomedical Records
        </p>

        <form onSubmit={handleLogin} className="text-left">
          <div className="mb-4">
            <label className="block mb-1 font-medium">ABHA ID</label>
            <input
              type="text"
              defaultValue="12-3456-7890-1234"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-1 font-medium">OTP / Password</label>
            <input
              type="password"
              placeholder="Enter your OTP"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition"
          >
            <i className="fa-solid fa-fingerprint"></i> Login
          </button>
        </form>
      </div>
    </div>
  );
}
