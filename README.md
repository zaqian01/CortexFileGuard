🛡️ Cortex FileGuard: Aplikasi Pemindai & Pengunggah Berkas
Cortex FileGuard adalah aplikasi web fullstack modern yang memungkinkan pengguna untuk mengunggah, memindai, dan mengelola berkas dengan aman secara real-time. Proyek ini mendemonstrasikan kemampuan saya dalam membangun sistem terintegrasi menggunakan Flask untuk backend, JavaScript untuk logika frontend, dan HTML/CSS untuk antarmuka pengguna yang responsif.

✨ Fitur Utama
Unggah Berkas: Pengunggahan berkas yang aman melalui antarmuka frontend.

Pemindaian Berkas: Daftar berkas yang diunggah dengan detail jalur.

Filter Berkas: Pemfilteran berkas berdasarkan ekstensi (contoh: .txt, .cpp, .py).

Ekspor CSV: Ekspor hasil pemindaian ke format .csv.

Integrasi API Backend: Penggunaan Flask API untuk operasi berkas.

💻 Teknologi yang Digunakan
HTML5 & CSS3: Tata letak dan UI responsif.

JavaScript (ES6+): Logika sisi klien dan komunikasi API.

Python Flask: Framework server backend.

Flask-CORS: Keamanan permintaan API lintas asal.

Replit Hosting: Hosting cloud untuk backend Flask.

🚀 Demo Langsung
🔧 Backend API (Flask): https://43dfed3e-86a1-4e9b-b160-a113c43a161a-00-3o1n8apeb2lgp.sisko.replit.dev

💻 Frontend (Netlify): https://cortex-file-guard.netlify.app/

⚙️ Cara Menjalankan Secara Lokal
Ikuti langkah-langkah berikut untuk mencoba Cortex FileGuard di mesin Anda sendiri:

Kloning Repositori:

git clone https://github.com/zaqian01/CortexFileGuard.git

Navigasi ke Frontend:

cd CortexFileGuard/web

Jalankan Frontend:

Buka index.html di browser. Pastikan untuk memperbarui BACKEND_URL di script.js.

🔌 API Endpoints
Metode

Endpoint

Deskripsi

GET

/

Pemeriksaan kesehatan backend

POST

/upload

Unggah berkas (form-data)

GET

/files

Daftar nama berkas yang diunggah

GET

/scan

Jalur lengkap berkas yang diunggah

GET

/download/<filename>

Unduh berkas tertentu

🤝 Berkontribusi
Kontribusi sangat diharapkan! Silakan buka issue atau kirimkan pull request.

✉️ Hubungi
GitHub: github.com/zaqian01

Email: zaqianel@gmail.com

© 2025 ZAQIAN. Semua Hak Dilindungi.
