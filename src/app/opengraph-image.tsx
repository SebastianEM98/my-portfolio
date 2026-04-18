import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sebastian Echeverri Mejia — Full Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0d1117 0%, #161b22 50%, #0d1117 100%)",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Decorative accent line */}
        <div
          style={{
            width: 80,
            height: 4,
            background: "#2ea878",
            borderRadius: 2,
            marginBottom: 40,
          }}
        />

        {/* Code-style label */}
        <div
          style={{
            fontSize: 20,
            color: "#2ea878",
            fontFamily: "monospace",
            marginBottom: 24,
            letterSpacing: 2,
          }}
        >
          {"// full stack engineer"}
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#e6edf3",
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Sebastian Echeverri
        </div>

        {/* Tech stack */}
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          {["React", "Next.js", "Node.js", ".NET", "TypeScript"].map((tech) => (
            <div
              key={tech}
              style={{
                background: "rgba(46,168,120,0.15)",
                border: "1px solid rgba(46,168,120,0.4)",
                color: "#2ea878",
                borderRadius: 8,
                padding: "6px 16px",
                fontSize: 20,
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
