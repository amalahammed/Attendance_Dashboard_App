import React, { useState, useRef } from 'react';
import login from '../../assets/images/passwordReset.jpg';
import OTPInput from '../../components/OtpInput/OutInput';
import { ArrowLeft } from 'lucide-react'; // Make sure you have lucide-react installed

export default function PasswordReset() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const inputRefs = useRef([]);

  const handleSubmit = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length < 4 || otp.includes("")) return alert(" fill all 4 digits!");
    console.log('Entered OTP:', enteredOtp);
    setIsSubmitted(true);
  };

  const isOtpFilled = otp.every((digit) => digit !== "");

  return (
    <div className="min-h-screen flex p-3">
      {/* Left Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${login})` }}
        />
      </div>

      {/* Right Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="text-left mb-8">
            <h2 className="text-2xl font-semibold text-ziyablack mb-9">Password Reset</h2>
           
          </div>

          {/* 👉 OTP Component */}
          <OTPInput otp={otp} setOtp={setOtp} inputRefs={inputRefs} />

          <button
            type="button"
            onClick={handleSubmit}
            disabled={!isOtpFilled}
            className={`w-full mt-9 text-xl py-3 px-4 rounded-[3px] font-semibold focus:outline-none transition-all transform  active:scale-[0.98]
              ${isOtpFilled ? 'bg-ziyablue text-white hover:from-cyan-600 hover:to-blue-700' : 'bg-gray-300 text-black cursor-not-allowed'}
            `}
          >
            Submit OTP
          </button>

          <div className="text-center mt-20 text-base font-normal text-gray-700">
          Didn’t receive the email?{" "}
          <a href="#" className="text-ziyablack font-semibold ml-1">
          Click to resend
           </a>
           


            <div className="mt-4 flex justify-center items-center">
              <ArrowLeft className="w-4 h-4 mr-2 text-ziyablack font-semibold" />
              <a href="/" className="text-ziyablack text-base font-semibold hover:underline">
                Back to log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
