import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div className="w-full max-w-[420px] text-center flex flex-col items-center gap-7">
        <h1 className="m-0 text-[1.75rem] font-semibold tracking-[-0.02em] text-slate-50">
          Mini Context
        </h1>
        <div
          className={[
            "relative w-full overflow-hidden rounded-2xl p-8",
            "flex flex-col gap-6",
            "border border-white/20",
            "bg-[linear-gradient(135deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.06)_40%,rgba(15,23,42,0.18)_100%)]",
            "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2),0_10px_25px_-5px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.08)_inset]",
            "backdrop-blur-lg backdrop-saturate-140",
            "perspective-distant transform-3d",
            // Mirror sheen
            "before:content-[''] before:absolute before:inset-[-40%_-20%] before:pointer-events-none before:z-0",
            "before:bg-[linear-gradient(120deg,rgba(255,255,255,0)_20%,rgba(255,255,255,0.10)_35%,rgba(255,255,255,0)_55%)]",
            "before:rotate-[8deg]",
            // Top glass edge highlight
            "after:content-[''] after:absolute after:left-3 after:right-3 after:top-2.5 after:h-px after:pointer-events-none after:z-0",
            "after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.35),rgba(255,255,255,0))]",
          ].join(" ")}
        >
          <Login />
          <Profile />
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
