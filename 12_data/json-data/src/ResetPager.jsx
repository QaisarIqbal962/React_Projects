import React, { useState } from "react";
import RyveLogo from "./assets/ryvelogo2.png";

export default function ResetPager({
  title = "Claims Console",
  subtitle = "Password Updated Successfully",
  description = "You can now sign in with your new password.",
  buttonLabel = "Back to Sign In",
  onSend,
  // optional callback when user clicks the Back button
  onBack,
  // optional date string to display (e.g. a timestamp or human readable date)
  date = null,
  email: initialEmail = "",
}) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (typeof onSend === "function") {
        await onSend(initialEmail);
      } else {
        await fakeApiSendReset(initialEmail);
      }
    } catch (err) {
      console.log("Reset Error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Back handler: prefer onBack prop, otherwise try history.back(), otherwise redirect to /signin
  const handleBack = (e) => {
    if (typeof onBack === "function") {
      onBack();
      return;
    }

    // Try to go back in history if possible
    try {
      if (window && window.history && window.history.length > 1) {
        window.history.back();
        return;
      }
    } catch (err) {
      // ignore
    }

    // Fallback -- navigate to a common sign-in route
    window.location.href = "/signin";
  };

  async function fakeApiSendReset() {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ ok: true }), 1000);
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div
        className="bg-white shadow-md rounded-xl p-6 sm:p-8 max-w-md w-full"
        aria-label="Reset password form"
      >
        <div className="flex items-center justify-center mb-4">
          <img
            src={RyveLogo}
            alt="Ryve Logo"
            className="h-12 w-auto object-contain"
          />
        </div>

        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
          {title}
        </h2>

        <p className=" font-semibold text-center text-gray-600 mb-8">
          {subtitle}
        </p>

        <p className="text-sm text-center text-[#1D3557] mb-6">{description}</p>

        {date && (
          <p className="text-xs text-center text-gray-500 mb-4">{date}</p>
        )}

        <button
          type="button"
          onClick={handleBack}
          className="mt-4 mb-16 w-full py-3 px-4 bg-[#1D3557] text-white rounded-lg cursor-pointer"
          disabled={loading}
        >
          {loading ? "Sending..." : buttonLabel}
        </button>
      </div>
    </div>
  );
}
