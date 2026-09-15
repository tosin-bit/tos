import { ImageResponse } from "next/og";
import { CIPHER_SOLID_PATH } from "@/lib/cipher";

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
          justifyContent: "space-between",
          backgroundColor: "#1C1B3A",
          padding: "72px 80px",
        }}
      >
        {/* The cipher, uncut: the share card is resized down to a thumbnail
            in half the places it appears, and the voids would go grey. */}
        <svg width="120" height="120" viewBox="0 0 200 200">
          <path fill="#A8813F" fillRule="evenodd" d={CIPHER_SOLID_PATH} />
        </svg>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, color: "#EFE7D6", fontFamily: "serif", lineHeight: 1 }}>
            Nenneh Cheyassin
          </div>
          <div style={{ fontSize: 84, color: "#EFE7D6", fontFamily: "serif", lineHeight: 1 }}>
            Secka-Kebe
          </div>
          <div style={{ fontSize: 24, color: "#A8813F", marginTop: 28, letterSpacing: 3 }}>
            NURSE. BUSINESSWOMAN. PHILANTHROPIST. GAMBIAN.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
