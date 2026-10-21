export function StoreLogo({
  platform,
  size = 24,
}: {
  platform: "ios" | "android";
  size?: number;
}) {
  if (platform === "ios") {
    return (
      <svg
        className="store-brand-logo"
        width={size}
        height={size}
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <rect width="48" height="48" rx="11" fill="#1687F8" />
        <path
          d="M15 34 25.5 14M32.8 34 22.4 14M12 29h24"
          fill="none"
          stroke="white"
          strokeWidth="4.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      className="store-brand-logo"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      aria-hidden="true"
    >
      <path d="M8 6.5 28.5 24 8 41.5Z" fill="#34A853" />
      <path d="m8 6.5 25.5 14-5 3.5Z" fill="#FABB05" />
      <path d="m8 41.5 25.5-14-5-3.5Z" fill="#EA4335" />
      <path d="m33.5 20.5 6 3.5-6 3.5-5-3.5Z" fill="#4285F4" />
    </svg>
  );
}
