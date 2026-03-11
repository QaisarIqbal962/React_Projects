import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };

  return (
    <div className="relative z-10 flex w-full flex-col items-stretch gap-5">
      <h2 className="m-0 text-left text-xl font-semibold text-slate-100">
        Login
      </h2>

      <div className="flex flex-col gap-3">
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="username"
          className={[
            "w-full rounded-[10px] px-4 py-2.5 text-[0.95rem] text-slate-200",
            "border border-white/20 bg-slate-950/20",
            "shadow-[0_1px_0_rgba(255,255,255,0.08)_inset]",
            "backdrop-blur-[10px] backdrop-saturate-140",
            "placeholder:text-slate-400",
            "transition focus:outline-none focus:border-blue-400/70 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.20)]",
          ].join(" ")}
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          className={[
            "w-full rounded-[10px] px-4 py-2.5 text-[0.95rem] text-slate-200",
            "border border-white/20 bg-slate-950/20",
            "shadow-[0_1px_0_rgba(255,255,255,0.08)_inset]",
            "backdrop-blur-[10px] backdrop-saturate-140",
            "placeholder:text-slate-400",
            "transition focus:outline-none focus:border-blue-400/70 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.20)]",
          ].join(" ")}
        />

        <button
          onClick={handleSubmit}
          className={[
            "mt-1 inline-flex w-full items-center justify-center rounded-[10px] px-5 py-2.5",
            "border border-blue-400/40",
            "bg-linear-to-b from-blue-500 to-blue-600 text-white",
            "font-medium shadow-[0_2px_8px_rgba(37,99,235,0.35)]",
            "transition active:translate-y-0 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(37,99,235,0.45)]",
            "focus:outline-none focus:shadow-[0_0_0_3px_rgba(59,130,246,0.25),0_4px_12px_rgba(37,99,235,0.45)]",
          ].join(" ")}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
