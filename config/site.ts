const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://focus-train.fr";
const supportEmail =
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@focus-train.fr";
const appStoreUrl =
  process.env.NEXT_PUBLIC_APP_STORE_URL ||
  "https://apps.apple.com/fr/app/focus-train-pomodoro-%C3%A9tude/id6789511554";
const configuredReviewUrl = process.env.NEXT_PUBLIC_APP_STORE_REVIEW_URL || "";

export const siteConfig = {
  name: "Focus Train",
  tagline: "Turn your focus into a journey.",
  description:
    "Focus Train is a Pomodoro timer for iPhone and iPad that turns study and work sessions into a journey across Japan.",
  locale: "en_US",
  language: "en",
  lastUpdated: "2026-10-01",
  siteUrl,
  appStoreUrl,
  appStoreReviewUrl:
    configuredReviewUrl ||
    (appStoreUrl
      ? `${appStoreUrl}${appStoreUrl.includes("?") ? "&" : "?"}action=write-review`
      : ""),
  googlePlayUrl: process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL || "",
  youtubeUrl: "https://www.youtube.com/@FocusTrain",
  youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLbIjjBFGjZEc",
  youtubePlaylistEmbedUrl:
    "https://www.youtube-nocookie.com/embed/videoseries?list=PLbIjjBFGjZEc",
  youtubePlaylistVideos: [
    {
      id: "IPFmCIibfk0",
      title:
        "2 x 25 Min Chill Fantasy Music ✨ | Study With Me on a Focus-Train | Pomodoro 25/5",
      duration: "55 min",
    },
    {
      id: "9-UqjzdvPms",
      title:
        "2 Hours of Late Night Lo-Fi 🚂🌙 | Chill Study Playlist + 25/5 Pomodoro",
      duration: "1 h 55",
    },
    {
      id: "HOckCRvG4zo",
      title:
        "Study With Me 🚂 2 Hours Across Japan | Sapporo → Date | 25/5 Pomodoro + City Pop",
      duration: "1 h 55",
    },
  ],
  waitlistEndpoint: process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT || "",
  supportEmail,
  editorLegalName: process.env.NEXT_PUBLIC_EDITOR_LEGAL_NAME || "",
  editorAddress: process.env.NEXT_PUBLIC_EDITOR_ADDRESS || "",
  privacyUpdatedAt: process.env.NEXT_PUBLIC_PRIVACY_UPDATED_AT || "2026-09-15",
  privacyUrl: `${siteUrl}/privacy`,
  social: {},
} as const;

export const absoluteUrl = (path: string) =>
  new URL(path, siteConfig.siteUrl).toString();
