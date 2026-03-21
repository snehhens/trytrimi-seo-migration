import { useEffect, useState } from "react";

const PaymentBadges = () => {
  const [patientCount, setPatientCount] = useState(14945);

  useEffect(() => {
    const baseDate = new Date('2026-03-11T00:00:00Z');
    const baseCount = 14945;

    const calculateCount = () => {
      const now = new Date();
      const hoursDiff = (now.getTime() - baseDate.getTime()) / (1000 * 60 * 60);
      const increment = Math.floor(hoursDiff) * 5;
      return baseCount + Math.max(0, increment);
    };

    setPatientCount(calculateCount());

    // Update every 2 hours
    const interval = setInterval(() => {
      setPatientCount(calculateCount());
    }, 2 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
      {/* Affirm */}
      <div className="flex items-center bg-muted/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-border/50">
        <svg viewBox="0 0 100 40" className="h-5 sm:h-6 w-auto" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 8C24 8 24 8 24 8C18 8 13 13 13 19C13 25 18 30 24 30C30 30 35 25 35 19C35 13 30 8 24 8ZM24 25C21 25 18 22 18 19C18 16 21 13 24 13C27 13 30 16 30 19C30 22 27 25 24 25Z" fill="#0D59FF"/>
          <text x="38" y="26" fontFamily="system-ui, -apple-system, sans-serif" fontSize="18" fontWeight="700" fill="#0D1F3C">affirm</text>
        </svg>
      </div>

      {/* Klarna */}
      <div className="bg-[#FFB3C7] rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
        <span className="text-[#0D0D0D] font-bold text-xs sm:text-sm tracking-tight">Klarna</span>
      </div>

      {/* Afterpay */}
      <div className="bg-[#B2FCE4] rounded-full px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-0.5">
        <span className="text-[#0D0D0D] font-bold text-xs sm:text-sm tracking-tight">afterpay</span>
        <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#0D0D0D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Divider - hidden on mobile */}
      <div className="hidden sm:block w-px h-5 bg-border/50 mx-1" />

      {/* Patient Count */}
      <div className="bg-muted/50 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-border/50">
        <span className="text-foreground font-medium text-xs sm:text-sm">{patientCount.toLocaleString()}+ patients</span>
      </div>

      {/* Trustpilot Rating */}
      <div className="flex items-center gap-1.5 bg-muted/50 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-border/50">
        <span className="text-foreground font-semibold text-xs sm:text-sm">4.5</span>
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#00B67A" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
        </svg>
      </div>
    </div>
  );
};

export { PaymentBadges };