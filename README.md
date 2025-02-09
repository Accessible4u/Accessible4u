# Accessible4u
🚀 **An AI-powered tool to analyze website accessibility and detect WCAG violations.**
💻 **[DevFest 2025](https://2025.devfestcu.com/)** (Columbia University Hackathon)

## **🔍 Overview**
This project is a **website accessibility analyzer** that scans any given website URL for accessibility issues. It leverages:
- **axe-core** (by dequelabs) for detecting WCAG violations.
- **LLaMA** (via OpenRouter) for generating potential fixes.

The backend is built with **Node.js** and **Express**, while the frontend is designed in **Figma** and implemented in **React**.

---

## **✨ Features**
✅ **Detects accessibility issues** using axe-core.
✅ **Categorizes issues** by severity (Critical, Serious, Moderate, Minor).
✅ **Ranks issues** and displays affected elements with code snippets.
✅ **Provides explanations & suggestions** for each issue.
✅ **Provides Services** to make your website accessibility friendly.

---

## **🛠️ Tech Stack**
### **Frontend**
- **React.js** (UI framework)
- **Figma** (Design)

### **Backend**
- **Node.js**
- **Express.js**
- **axe-core** (Accessibility analysis)
- **OpenRouter API** (LLaMA 3.3-70B)
- **Puppeteer** (Website content extraction)

---

## **📦 Setup & Installation**
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/Accessible4u/Accessible4u.git
cd Accessible4u/Backend
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a `.env` file in the root directory and add:
```
OPENROUTER_API_KEY=your_openrouter_api_key
```

### **4️⃣ Start the Backend Server**
```sh
npm start
```

The server will run on `http://localhost:3000`.

---

## **🚀 Usage Guide**
### **Analyze a Website**
1. **Enter a website URL** in the input field.
2. Click **"Analyze"** to detect accessibility issues.
3. The system **scans the website** using `axe-core`.
4. **Issues are categorized & ranked** by impact on your dashboard.

### **Example API Request**
```sh
POST /analyze
Content-Type: application/json
{
  "url": "https://example.com"
}
```

### **Example API Response**
```json
{
  "originalURL": "https://example.com",
  "issues": [
    {
      "impact": "critical",
      "description": "Ensure the document has a lang attribute",
      "help": "<html> element must have a lang attribute",
      "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/html-has-lang",
      "nodes": [
        {
          "target": "<html>",
          "html": "<html>",
          "fix": "<html lang='en'>"
        }
      ]
    }
  ]
}
```

---

## **👥 Team**
**Frontend Developer**: Brian De Los Santos | [LinkedIn](https://www.linkedin.com/in/briandelossantoscyber/) | [GitHub](https://github.com/BrianD445)
**Backend Developer**: Ahnaf Ahmed | [LinkedIn](https://www.linkedin.com/in/ahnafahmed13/) | [GitHub](https://github.com/AhnafAhmed13)

---

🚀 **Happy Coding & Make the Web More Accessible!** 🌍🎉