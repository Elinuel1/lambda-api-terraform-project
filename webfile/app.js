// 👉 Paste your actual API Gateway HTTPS endpoint below, including the route (e.g., /hello)
// Example: const API_URL = "https://abc123.execute-api.us-east-1.amazonaws.com/hello";
const API_URL = "https://xsdwm1kose.execute-api.us-east-1.amazonaws.com/hello";

document.getElementById("yr").textContent = new Date().getFullYear();

document.getElementById("callBtn").addEventListener("click", async () => {
  const name = document.getElementById("nameInput").value.trim();
  const url = name ? `${API_URL}?name=${encodeURIComponent(name)}` : API_URL;

  const resultEl = document.getElementById("result");
  resultEl.textContent = "Fetching…";

  try {
    const res = await fetch(url, { method: "GET" });
    const contentType = res.headers.get("content-type") || "";
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    // Try JSON first, fallback to text
    if (contentType.includes("application/json")) {
      const data = await res.json();
      resultEl.textContent = JSON.stringify(data, null, 2);
    } else {
      const text = await res.text();
      resultEl.textContent = text;
    }
  } catch (err) {
    resultEl.textContent = `Request failed: ${err.message}`;
  }
});
