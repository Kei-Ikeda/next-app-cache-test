export default function getBaseUrl() {
  if (typeof window !== "undefined") return "";
  const vc = process.env.APP_URL;
  console.log("vc", vc);
  if (vc) return vc;
  return "http://localhost:3001";
}
