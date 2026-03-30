interface SDXLogoProps {
  size?: 'lg' | 'default' | 'sm' | 'xs';
  variant?: 'primary' | 'inverted';
  className?: string;
}

const sizeConfig = {
  lg:      { height: 62, radius: 12, px: 24, fontSize: 30, iconW: 22, iconH: 24, sepMx: 17 },
  default: { height: 44, radius: 9,  px: 18, fontSize: 22, iconW: 16, iconH: 17, sepMx: 13 },
  sm:      { height: 28, radius: 6,  px: 10, fontSize: 13, iconW: 11, iconH: 12, sepMx: 8  },
  xs:      { height: 20, radius: 4,  px: 7,  fontSize: 10, iconW: 8,  iconH: 9,  sepMx: 6  },
};

export function SDXLogo({ size = 'default', variant = 'primary', className }: SDXLogoProps) {
  const s = sizeConfig[size];
  const isPrimary = variant === 'primary';
  const strokeColor = isPrimary ? 'white' : '#f49522';
  const textColor = isPrimary ? '#fff' : '#f49522';
  const sepColor = isPrimary ? 'rgba(255,255,255,0.25)' : 'rgba(244,149,34,0.3)';

  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: s.height,
        borderRadius: s.radius,
        padding: `0 ${s.px}px`,
        background: isPrimary ? '#f49522' : '#131008',
        border: isPrimary ? 'none' : '1.5px solid #f49522',
      }}
    >
      <svg width={s.iconW} height={s.iconH} viewBox="0 0 22 24" fill="none">
        <line x1="2" y1="6" x2="18" y2="6" stroke={strokeColor} strokeWidth="2.4" strokeLinecap="round"/>
        <path d="M 14,2 L 18.5,6 L 14,10" fill="none" stroke={strokeColor} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="20" y1="18" x2="4" y2="18" stroke={strokeColor} strokeWidth="2.4" strokeLinecap="round"/>
        <path d="M 8,14 L 3.5,18 L 8,22" fill="none" stroke={strokeColor} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <div style={{
        width: 1,
        height: '58%',
        background: sepColor,
        margin: `0 ${s.sepMx}px`,
        flexShrink: 0,
      }} />
      <span style={{
        fontWeight: 700,
        letterSpacing: '0.06em',
        color: textColor,
        fontSize: s.fontSize,
        lineHeight: 1,
        fontFamily: "-apple-system, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif",
      }}>
        SDX
      </span>
    </div>
  );
}
