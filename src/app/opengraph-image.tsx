import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f1b2d",
          backgroundImage: "radial-gradient(circle at 50% 0%, rgba(34,211,238,0.25), transparent 60%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 10,
            textTransform: "uppercase",
            color: "#22d3ee",
            fontWeight: 700,
          }}
        >
          Duelo de concentração com EEG
        </div>
        <div style={{ display: "flex", fontSize: 104, fontWeight: 800, marginTop: 24, textTransform: "uppercase", color: "#ffffff" }}>
          NEURO<span style={{ color: "#facc15" }}>RACE</span>
        </div>
        <div style={{ fontSize: 32, marginTop: 20, color: "#cbd5e1" }}>Até onde sua mente pode ir?</div>
        <div
          style={{
            display: "flex",
            marginTop: 44,
            fontSize: 24,
            color: "#0f1b2d",
            backgroundColor: "#22d3ee",
            padding: "12px 28px",
            borderRadius: 999,
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          FIAP NEXT · 2025 / 2026
        </div>
      </div>
    ),
    { ...size }
  );
}
