import { clsx } from "clsx";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: number;
}

export default function Logo({
  className,
  showText = true,
  size = 40,
}: LogoProps) {
  return (
    <div className={clsx("flex items-center gap-2.5", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="TAMS Dental logo"
      >
        <defs>
          <linearGradient id="toothGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0d9488" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="shineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {/* Background circle */}
        <circle cx="32" cy="32" r="30" fill="url(#toothGrad)" />
        {/* Tooth shape */}
        <path
          d="M32 14c-5 0-9 1.5-12 3.5-2.6 1.7-3.5 4.1-3 7.2.6 3.6 2 7.5 3.6 11.6 1.5 4 2.6 8.5 3.6 12.6.6 2.4 2.5 3.6 4.4 3 1.4-.5 2.2-1.7 2.5-3.4l1.2-7.8c.2-1.2 1.4-2 2.7-2 1.3 0 2.5.8 2.7 2l1.2 7.8c.3 1.7 1.1 2.9 2.5 3.4 1.9.6 3.8-.6 4.4-3 1-4.1 2.1-8.6 3.6-12.6 1.6-4.1 3-8 3.6-11.6.5-3.1-.4-5.5-3-7.2-3-2-7-3.5-12-3.5z"
          fill="white"
        />
        {/* Tooth shine */}
        <path
          d="M24 22c-1 0-1.8.5-2.4 1.4-.6 1-.7 2.2-.4 3.4.4 1.5 1 2.5 1.8 3 .4.3.9.4 1.3.2.4-.2.7-.6.7-1.2v-5c0-1-.4-1.8-1-1.8z"
          fill="url(#shineGrad)"
        />
      </svg>
      {showText && (
        <div className="leading-none">
          <div className="font-display text-lg font-bold tracking-tight text-slate-900">
            TAMS <span className="text-brand-600">Dental</span>
          </div>
          <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
            Dr. Tabarak Hussain
          </div>
        </div>
      )}
    </div>
  );
}
