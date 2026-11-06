import React from 'react';

interface VeyloraLogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'original'; // 'dark' for dark navy/black bg (white text), 'light' for light/white bg (navy text)
  size?: 'sm' | 'md' | 'lg' | 'xl';
  symbolOnly?: boolean;
}

export const VeyloraLogo: React.FC<VeyloraLogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
  symbolOnly = false,
}) => {
  // Height sizing to keep original exact aspect ratio (1420:340 ~ 4.18:1)
  const heightClasses = {
    sm: 'h-9 sm:h-10',
    md: 'h-11 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-16 sm:h-20',
  };

  const symbolSizes = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
    xl: 'w-16 h-16',
  };

  if (symbolOnly) {
    return (
      <div className={`relative inline-flex items-center shrink-0 ${symbolSizes[size]} ${className}`}>
        <img
          src="/assets/logo/veylora-symbol.png"
          alt="Veylora Data Services VDS Emblem"
          className="w-full h-full object-contain select-none"
          loading="eager"
          decoding="async"
        />
      </div>
    );
  }

  // Choose the optimal transparent version according to background context:
  // - 'dark': For navy, dark slate, or black sections (header, hero, footer) where VEYLORA is clear white & high-contrast
  // - 'light': For clean white or light gray sections (where original dark navy VEYLORA has sharp contrast)
  // - 'original': Direct transparent cut of the original asset
  const logoSrc =
    variant === 'light'
      ? '/assets/logo/veylora-logo-light.png'
      : variant === 'original'
      ? '/assets/logo/veylora-logo-original.png'
      : '/assets/logo/veylora-logo-dark.png';

  return (
    <div className={`relative inline-flex items-center shrink-0 ${className}`}>
      <img
        src={logoSrc}
        alt="Veylora Data Services Logo"
        className={`${heightClasses[size]} w-auto max-w-[280px] sm:max-w-[340px] md:max-w-none object-contain select-none drop-shadow-sm`}
        loading="eager"
        decoding="async"
      />
    </div>
  );
};
