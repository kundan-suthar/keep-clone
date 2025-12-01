import { ArrowLeft, Mail, Lock, User, Sparkles } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate network delay for auth
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 800);
  };
  const onBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 font-sans text-[#202124]">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors flex items-center gap-2"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="text-sm font-medium">Back to Home</span>
      </button>

      <div className="w-full max-w-[400px] sm:bg-white sm:border sm:border-gray-200 sm:rounded-xl sm:p-10 sm:shadow-sm">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="bg-yellow-400 w-10 h-10 rounded-lg flex items-center justify-center shadow-sm mb-4">
            <span className="text-white font-bold text-xl">K</span>
          </div>
          <h1 className="text-2xl font-medium mb-2">
            {isSignUp ? "Create your account" : "Sign in"}
          </h1>
          <p className="text-gray-500 text-sm">to continue to NoteKepper AI</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {isSignUp && (
            <div className="space-y-1">
              <div className="relative group">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="peer w-full px-3 py-3 rounded border border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all placeholder-transparent"
                  id="name"
                  placeholder="Name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-2 -top-2.5 bg-white px-1 text-xs text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-blue-600"
                >
                  Name
                </label>
              </div>
            </div>
          )}

          <div className="space-y-1">
            <div className="relative group">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="peer w-full px-3 py-3 rounded border border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all placeholder-transparent"
                id="email"
                placeholder="Email"
              />
              <label
                htmlFor="email"
                className="absolute left-2 -top-2.5 bg-white px-1 text-xs text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-blue-600"
              >
                Email
              </label>
            </div>
          </div>

          <div className="space-y-1">
            <div className="relative group">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="peer w-full px-3 py-3 rounded border border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all placeholder-transparent"
                id="password"
                placeholder="Password"
              />
              <label
                htmlFor="password"
                className="absolute left-2 -top-2.5 bg-white px-1 text-xs text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-blue-600"
              >
                Password
              </label>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium hover:bg-blue-50 px-2 py-1 rounded transition-colors"
            >
              {isSignUp ? "Sign in instead" : "Create account"}
            </button>

            <button
              type="submit"
              disabled={isLoading}
              className={`bg-blue-600 text-white px-6 py-2 rounded font-medium hover:bg-blue-700 transition-all shadow-sm flex items-center ${
                isLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              ) : null}
              {isSignUp ? "Sign up" : "Next"}
            </button>
          </div>
        </form>
      </div>

      <div className="mt-8 text-xs text-gray-500 flex gap-6">
        <a href="#" className="hover:text-gray-700">
          Help
        </a>
        <a href="#" className="hover:text-gray-700">
          Privacy
        </a>
        <a href="#" className="hover:text-gray-700">
          Terms
        </a>
      </div>
    </div>
  );
};

export default AuthPage;
