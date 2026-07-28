import { AlertTriangle, Clock } from "lucide-react";

const RateLimitUI = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="w-full max-w-md rounded-2xl border border-red-500/20 bg-slate-900 p-8 text-center shadow-2xl">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10">
          <AlertTriangle className="h-8 w-8 text-red-500" />
        </div>

        <h1 className="mt-6 text-2xl font-bold text-white">
          Rate Limit Reached
        </h1>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          You've made too many requests in a short period of time.
          Please wait a few moments before trying again.
        </p>

        <div className="mt-6 flex items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-800/60 px-4 py-3 text-slate-300">
          <Clock className="h-5 w-5 text-yellow-400" />
          <span className="text-sm">
            Please try again in a minute.
          </span>
        </div>

        <button
          onClick={() => window.location.reload()}
          className="mt-6 w-full rounded-lg bg-red-600 px-4 py-3 font-medium text-white transition hover:bg-red-700 active:scale-[0.98]"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default RateLimitUI;