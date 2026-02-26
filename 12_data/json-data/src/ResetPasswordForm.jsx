import { useState } from "react";  
import logo from "/assets/ryvelogo2.png";  
import ResetPager from "./ResetPager"; // adjust path if needed  
import Modal from "./Modal"; // ensure Modal.jsx exists in the same folder or adjust path  

export default function ResetPassword() {  
  const [email, setEmail] = useState("");  
  const [openPager, setOpenPager] = useState(false);  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    // Open the modal with the pager  
    setOpenPager(true);  
  };  

  const handleClosePager = () => {  
    setOpenPager(false);  
  };  

  return (  
    <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA] p-4 sm:p-6 md:p-8 lg:p-10">  
      <form  
        onSubmit={handleSubmit}  
        className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-[420px] flex flex-col gap-8"  
        autoComplete="on"  
      >  
        {/* Logo and Heading Section */}  
        <div className="flex flex-col items-center gap-6">  
          <div className="flex justify-center">  
            <img  
              src={logo}  
              alt="Ryve Logo"  
              className="h-12 sm:h-16 w-auto object-contain"  
            />  
          </div>  

          <div className="text-center flex flex-col gap-7">  
            <h2 className="text-[34px] sm:text-3xl text-[#1D3557] font-bold">  
              Claims Console  
            </h2>  
            <p className="text-[#1D3557] text-sm font-semibold sm:text-base">  
              Reset Your Password  
            </p>  
          </div>  

          <p className="text-center text-[#1D3557] text-xs sm:text-sm md:text-base mb-6 sm:mb-8 px-2 sm:px-4 md:px-6 mt-3 sm:mt-6">  
            Enter your email and we'll send you instructions to reset your  
            password  
          </p>  
        </div>  

        {/* Input Field */}  
        <div className="space-y-6">  
          <div className="flex flex-col">  
            <label className="text-[#474545] font-medium text-sm md:text-base">  
              Email Address  
            </label>  
            <input  
              type="email"  
              placeholder="Email Address"  
              required  
              value={email}  
              onChange={(e) => setEmail(e.target.value)}  
              className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1D3557] text-sm md:text-base border-gray-300"  
            />  
          </div>  
        </div>  

        {/* Submit Button */}  
        <button  
          type="submit"  
          className="w-full bg-[#1D3557] text-white py-3 rounded-lg font-semibold transition-colors cursor-pointer"  
        >  
          Send Reset Link  
        </button>  

        {/* Horizontal line */}  
        <hr className="mt-28 mb-1 border-[#585858]" />  

        {/* Support */}  
        <p className="text-center text-[#1D3557] text-sm sm:text-base font-medium">  
          Need help?{" "}  
          <a href="#" className="font-semibold hover:underline">  
            Contact Ryve Support  
          </a>  
        </p>  
      </form>  

      {/* Modal with ResetPager */}  
      <Modal open={openPager} onClose={handleClosePager} title="Password Reset">  
        <ResetPager  
          title="Claims Console"  
          subtitle="Check Your Email"  
          description="If an account exists with email, we send a password reset link. Please follow the instructions to reset your password."  
          buttonLabel="Send Reset Link"  
          email={email}  
          onSend={async (em) => {  
            // Replace with real API call if needed  
            console.log("API call with email:", em);  
            await new Promise((r) => setTimeout(r, 800));  
            // Optionally close the modal after success  
            // setOpenPager(false);  
          }}  
        />  
        <div style={{ padding: 16, textAlign: "right" }}>  
          <button  
            onClick={handleClosePager}  
            className="px-4 py-2 bg-gray-200 rounded"  
          >  
            Close  
          </button>  
        </div>  
      </Modal>  
    </div>
  )
}