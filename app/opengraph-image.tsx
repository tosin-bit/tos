import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nenneh Cheyassin Secka-Kebe";
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
          justifyContent: "flex-end",
          alignItems: "flex-start",
          backgroundColor: "#1C1B3A",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 88,
            color: "#EFE7D6",
            fontFamily: "serif",
            lineHeight: 1,
          }}
        >
          Nenneh Cheyassin
        </div>
        <div
          style={{
            fontSize: 88,
            color: "#EFE7D6",
            fontFamily: "serif",
            lineHeight: 1,
          }}
        >
          Secka-Kebe
        </div>
        <div style={{ fontSize: 26, color: "#A8813F", marginTop: 24 }}>
          She does not wait to be invited into the room.
        </div>
      </div>
    ),
    { ...size },
  );
}
