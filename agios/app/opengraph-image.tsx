import { ImageResponse } from "next/og";

export const alt = "Agios — Récupère les frais bancaires prélevés à tort";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", background: "#14342B", color: "#F6F1E7", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 80 }}>
        <div style={{ fontSize: 48, fontWeight: 700 }}>Agios</div>
        <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>Récupère les frais bancaires prélevés à tort.</div>
        <div style={{ fontSize: 36, color: "#E8896A" }}>Jusqu’à 80 € par mois de commissions plafonnées par la loi.</div>
      </div>
    ),
    size
  );
}
