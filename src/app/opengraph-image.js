import { ImageResponse } from "next/og";

export const alt = "Farhana Ayesha — Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F6F1E8",
          color: "#191918",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#6E6A61",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              backgroundColor: "#E0682F",
            }}
          />
          Frontend Developer — Bangladesh
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 108,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            Farhana Ayesha
          </div>
          <div style={{ fontSize: 30, color: "#6E6A61" }}>
            React · Next.js · TypeScript · Tailwind CSS
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid #1E3FD8",
            paddingTop: 24,
            fontSize: 22,
            color: "#6E6A61",
          }}
        >
          <div>Portfolio</div>
          <div>Open to frontend roles & freelance work</div>
        </div>
      </div>
    ),
    size,
  );
}
