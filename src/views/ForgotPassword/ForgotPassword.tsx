import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import login from '../../assets/images/forgot.jpg';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Send OTP to:', email);
    // 🧠 Here you can call your OTP API
  };

  

  return (
    <div className="min-h-screen flex p-3">
      {/* Left Image Side */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${login})` }}
        />
      </div>

      {/* Right Form Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="text-left mb-8">
            <h2 className="text-2xl font-semibold text-ziyablack mb-2">Forgot password?</h2>
            <p className="text-ziyablack">Please, enter the email, we’ll send an OTP</p>
          </div>

          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-500 mb-3">
                Your email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-primaryradius focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-ziyablue text-xl text-white py-3 px-4 rounded-primaryradius font-medium hover:from-cyan-600 hover:to-blue-700 focus:outline-none transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Send
            </button>
          </div>

          {/* Link to Login */}
          <div className="text-center mt-6">
            <span className="text-gray-600">Or you can </span>
            <a
              href="#"
              className="text-cyan-600 hover:text-cyan-700 font-medium underline"
            >
              Log In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
