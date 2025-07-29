import React, { useState } from 'react';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import login from '../../assets/images/Createacc.jpg';

export default function ForgotPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log('Password set to:', password);
    // 🧠 Here you can call your password reset API
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
            <h2 className="text-2xl font-semibold text-ziyablack mb-2">Set new password</h2>
          </div>

          <div className="space-y-6">
            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-m font-semibold text-ziyablack mb-3">
                New Password
              </label>
              <div className="relative">
                <input className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-primaryradius shadow-[0px_1px_2px_rgba(0,0,0,0.18)] focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"

                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-primaryradius focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-m font-semibold text-ziyablack mb-3">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm password"
                  className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-primaryradius focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                 {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-ziyablue text-xl text-white py-3 px-4 rounded-primaryradius font-medium hover:from-cyan-600 hover:to-blue-700 focus:outline-none transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Reset Password
            </button>
          </div>

          {/* Link to Login */}
            <div className="mt-4 flex justify-center items-center">
                        <ArrowLeft className="w-4 h-4 mr-2 text-ziyablack font-semibold" />
                        <a href="/" className="text-ziyablack text-base font-semibold hover:underline">
                          Back to log in
                        </a>
                      </div>
        </div>
      </div>
    </div>
  );
}
