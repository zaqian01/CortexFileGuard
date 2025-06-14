🛡️ Cortex FileGuard: File Scanner & Uploader App
Cortex FileGuard is a modern full-stack web application that allows users to upload, scan, and manage files securely in real-time. This project demonstrates my ability to build integrated systems using Flask for the backend, JavaScript for frontend logic, and HTML/CSS for a responsive UI.

✨ Features
File Upload: Upload any file type securely through the frontend interface.

File Scanning: List all uploaded files stored on the server with path details.

File Filtering: Easily filter files by extensions (.txt, .cpp, .py, etc.).

CSV Export: Export scanned file results to .csv for local download.

Backend API Integration: All file operations are handled via a Flask API hosted on Replit.

💻 Technologies Used
HTML5 & CSS3: For layout and responsive UI

JavaScript (ES6+): For client-side logic and API communication

Python Flask: As the backend server framework

Flask-CORS: For secure cross-origin API requests

Replit Hosting: Lightweight cloud hosting for Flask backend

🚀 Live Demo
Backend API (Flask): https://43dfed3e-86a1-4e9b-b160-a113c43a161a-00-3o1n8apeb2lgp.sisko.replit.dev

Frontend (Netlify): https://cortex-file-guard.netlify.app/

⚙️ How to Run Locally
Follow these steps to try Cortex FileGuard on your own machine:

🔹 Clone the Repository
git clone https://github.com/zaqian01/CortexFileGuard.git

🔹 Navigate to Frontend
cd CortexFileGuard/web

🔹 Run Frontend
Open index.html in your browser.

Important: Don't forget to update the BACKEND_URL in script.js to your actual Replit backend URL!

🔌 API Endpoints
Method

Endpoint

Description

GET

/

Health check for backend

POST

/upload

Upload a file (form-data)

GET

/files

List uploaded filenames

GET

/scan

Return full paths of uploaded files

GET

/download/<filename>

Download a specific file

🤝 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request for improvements or new features.

✉️ Contact Me
GitHub: github.com/zaqian01

Email: zaqianel@gmail.com

© 2025 ZAQIAN. All Rights Reserved.
