function toggleAdvanced() {
  const panel = document.getElementById("advancedSettings");
  panel.style.display = panel.style.display === "none" ? "block" : "none";
}

function generateLink() {
  const original = document.getElementById("originalLink").value.trim();
  const slug =
    document.getElementById("slug").value.trim() ||
    Math.random().toString(36).substring(2, 7);
  const domain = document.getElementById("domain").value;
  const utmSource = document.getElementById("utmSource").value.trim();
  const utmCampaign = document.getElementById("utmCampaign").value.trim();

  let previewUrl = original;
  const utmParams = [];
  if (utmSource) utmParams.push(`utm_source=${utmSource}`);
  if (utmCampaign) utmParams.push(`utm_campaign=${utmCampaign}`);
  if (utmParams.length) {
    previewUrl += (original.includes("?") ? "&" : "?") + utmParams.join("&");
  }

  const shortLink = `https://${domain}/${slug}`;
  document.getElementById("result").innerHTML = `
    <strong>Short Link:</strong><br>
    <a href="${previewUrl}" target="_blank">${shortLink}</a><br><br>
    <button onclick="copyToClipboard('${shortLink}')">Copy</button>
    <button onclick="window.open('${previewUrl}', '_blank')">Preview</button>
  `;
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("Short link copied: " + text);
  });
}
