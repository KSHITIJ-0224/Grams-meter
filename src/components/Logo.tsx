const Logo = ({ className = "", size = "default", dark = false }: { className?: string; size?: "small" | "default" | "large"; dark?: boolean }) => {
  const sizes = {
    small: { wrapper: "h-10", text: "text-lg", sub: "text-[8px]" },
    default: { wrapper: "h-14", text: "text-2xl", sub: "text-[10px]" },
    large: { wrapper: "h-24", text: "text-4xl", sub: "text-sm" },
  };
  const s = sizes[size];
  const color = dark ? "hsl(38 60% 20%)" : "hsl(38 60% 58%)";
  const textColor = dark ? "text-gray-900" : "text-gold";
  const textColorLight = dark ? "text-gray-700" : "text-gold-light";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* GM Monogram */}
      <div className={`${s.wrapper} aspect-square relative flex items-center justify-center`}>
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ornate circle */}
          <circle cx="50" cy="50" r="38" stroke={color} strokeWidth="1.5" fill="none" />
          <circle cx="50" cy="50" r="35" stroke={color} strokeWidth="0.5" strokeDasharray="3 3" fill="none" />
          
          {/* Top flourish */}
          <path d="M50 8 C45 12, 35 14, 30 12 C35 16, 42 18, 50 12 C58 18, 65 16, 70 12 C65 14, 55 12, 50 8Z" 
                fill={color} opacity="0.9" />
          <path d="M30 12 C25 10, 20 12, 18 16 C22 14, 26 12, 30 12Z" fill={color} opacity="0.7" />
          <path d="M70 12 C75 10, 80 12, 82 16 C78 14, 74 12, 70 12Z" fill={color} opacity="0.7" />
          
          {/* Bottom flourish */}
          <path d="M50 92 C45 88, 35 86, 30 88 C35 84, 42 82, 50 88 C58 82, 65 84, 70 88 C65 86, 55 88, 50 92Z" 
                fill={color} opacity="0.9" />
          <path d="M30 88 C25 90, 20 88, 18 84 C22 86, 26 88, 30 88Z" fill={color} opacity="0.7" />
          <path d="M70 88 C75 90, 80 88, 82 84 C78 86, 74 88, 70 88Z" fill={color} opacity="0.7" />

          {/* Side scrolls */}
          <path d="M8 50 C12 45, 14 35, 12 30 C16 35, 18 42, 12 50 C18 58, 16 65, 12 70 C14 65, 12 55, 8 50Z" 
                fill={color} opacity="0.7" />
          <path d="M92 50 C88 45, 86 35, 88 30 C84 35, 82 42, 88 50 C82 58, 84 65, 88 70 C86 65, 88 55, 92 50Z" 
                fill={color} opacity="0.7" />

          {/* GM Letters */}
          <text x="50" y="56" textAnchor="middle" fontFamily="'Playfair Display', serif" 
                fontSize="26" fontWeight="600" fill={color} letterSpacing="2">
            GM
          </text>
        </svg>
      </div>

      {/* Brand name */}
      <div className="flex flex-col">
        <span className={`font-display ${s.text} font-bold tracking-wider ${textColor} leading-tight`}>
          Grams & Meters
        </span>
        <span className={`font-accent ${s.sub} tracking-[0.3em] uppercase ${textColorLight}`}>
          Exclusive Shirting & Suiting
        </span>
      </div>
    </div>
  );
};

export default Logo;
