import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Focus Train — Transforme ton focus en voyage";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#FFF9F4",
        color: "#3F343D",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "72px 86px",
        fontFamily: "sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: 650 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            fontWeight: 700,
          }}
        >
          <span
            style={{
              background: "#F76598",
              color: "white",
              borderRadius: 18,
              padding: "13px 18px",
            }}
          >
            🚆
          </span>
          Focus Train
        </div>
        <div
          style={{
            fontSize: 76,
            lineHeight: 1.05,
            fontWeight: 800,
            marginTop: 52,
          }}
        >
          Transforme ton focus en{" "}
          <span style={{ color: "#F76598" }}>voyage.</span>
        </div>
        <p style={{ fontSize: 26, color: "#796A72", lineHeight: 1.4 }}>
          L’application de concentration qui fait avancer ton train.
        </p>
      </div>
      <div
        style={{
          width: 350,
          height: 500,
          border: "12px solid #493543",
          borderRadius: 64,
          background: "#FFD9E5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 115,
          boxShadow: "0 28px 70px rgba(73,53,67,.18)",
          transform: "rotate(4deg)",
        }}
      >
        🌸
        <span
          style={{
            position: "absolute",
            bottom: 130,
            right: 127,
            fontSize: 80,
          }}
        >
          🚆
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 68,
          left: 0,
          right: 0,
          height: 8,
          background: "#79519A",
          opacity: 0.25,
        }}
      />
    </div>,
    size,
  );
}
