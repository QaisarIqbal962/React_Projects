import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  const [popped, setPopped] = useState(false);

  useEffect(() => {
    if (!user) {
      setPopped(false);
      return;
    }
    const id = window.setTimeout(() => setPopped(true), 20);
    return () => window.clearTimeout(id);
  }, [user]);

  if (!user) {
    return (
      <div
        className={[
          "relative z-10 w-full rounded-xl px-5 py-4 text-center text-[0.95rem]",
          "border border-white/15",
          "bg-[linear-gradient(135deg,rgba(255,255,255,0.10)_0%,rgba(15,23,42,0.20)_100%)]",
          "text-slate-400",
          "shadow-[0_10px_24px_rgba(0,0,0,0.22),0_1px_0_rgba(255,255,255,0.08)_inset]",
          "backdrop-blur-[14px] backdrop-saturate-140",
        ].join(" ")}
      >
        Please log in to continue
      </div>
    );
  }

  return (
    <div
      className={[
        "relative z-10 w-full rounded-xl px-5 py-4 text-center text-[0.95rem]",
        "border border-emerald-200/30",
        "bg-[linear-gradient(135deg,rgba(34,197,94,0.18)_0%,rgba(255,255,255,0.08)_35%,rgba(34,197,94,0.08)_100%)]",
        "text-emerald-200",
        "shadow-[0_20px_40px_-12px_rgba(0,0,0,0.40),0_0_0_1px_rgba(255,255,255,0.08)_inset,0_8px_24px_rgba(34,197,94,0.20)]",
        "backdrop-blur-[14px] backdrop-saturate-140",
        "will-change-transform will-change-opacity",
        "transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
        popped
          ? "transform-[rotateX(-3deg)_translateZ(28px)_scale(1.02)] opacity-100"
          : "transform-[rotateX(-10deg)_translateZ(-24px)_scale(0.88)] opacity-0",
      ].join(" ")}
    >
      Welcome, <strong className="text-emerald-100">{user.userName}</strong>
    </div>
  );
};

export default Profile;
