const result = document.getElementById("result");
const scanBtn = document.getElementById("scanBtn");
const exportBtn = document.getElementById("exportBtn");

scanBtn.addEventListener("click", () => {
  result.innerHTML = "⏳ Scanning folder...";

  fetch("http://127.0.0.1:5000/scan")
    .then(response => response.json())
    .then(data => {
      // Ambil filter ekstensi yang dicentang
      const filters = [...document.querySelectorAll('.filter')]
        .filter(cb => cb.checked)
        .map(cb => cb.value.toLowerCase());

      let filteredFiles = data.files;

      // Filter berdasarkan ekstensi kalau ada yang dipilih
      if (filters.length > 0) {
        filteredFiles = data.files.filter(file =>
          filters.some(ext => file.toLowerCase().endsWith(ext))
        );
      }

      const output = `📂 Total File: ${filteredFiles.length}\n\n` + filteredFiles.join('\n');
      result.innerText = output;
    })
    .catch(error => {
      result.innerText = "❌ Gagal scan: " + error;
    });
});

exportBtn.addEventListener("click", () => {
  const text = result.innerText;
  if (!text || text.startsWith("❌") || text === "⏳ Scanning folder...") {
    alert("⚠️ Tidak ada hasil yang bisa diekspor.");
    return;
  }

  const blob = new Blob([text], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "scan_result.csv";
  a.click();
  URL.revokeObjectURL(url);
});
