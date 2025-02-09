require("dotenv").config();
const express = require("express");
const puppeteer = require("puppeteer");
const axe = require("axe-core");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

/**
 * Route to analyze accessibility using axe-core
 */
app.post("/analyze", async (req, res) => {
    console.log("🟢 Received request for accessibility analysis...");

    const { url } = req.body;
    if (!url) {
        console.error("🔴 ERROR: No URL provided!");
        return res.status(400).json({ error: "URL is required" });
    }

    console.log(`🔍 Analyzing URL: ${url}`);

    try {
        console.log("🚀 Launching Puppeteer...");
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: "networkidle2" });

        console.log("🛠️ Injecting axe-core...");
        await page.addScriptTag({ content: axe.source });

        console.log("🧐 Running axe-core analysis...");
        const results = await page.evaluate(async () => {
            return await axe.run();
        });

        console.log(`✅ Analysis complete. Found ${results.violations.length} issues.`);
        console.log("🔍 Issues detected:", results.violations);

        await browser.close();
        console.log("🛑 Closed Puppeteer instance.");

        if (results.violations.length === 0) {
            console.log("✅ No accessibility issues found.");
            return res.json({ message: "No accessibility issues found!" });
        }

        // Prepare response with issues
        const issues = results.violations.map(issue => ({
            id: issue.id,
            impact: issue.impact,
            description: issue.description,
            help: issue.help,
            helpUrl: issue.helpUrl,
            nodes: issue.nodes.map(node => ({
                target: node.target[0] || "Unknown element",
                html: node.html || "No code snippet available"
            })),
        }));

        res.json({
            originalURL: url,
            issues
        });

    } catch (error) {
        console.error("🔴 ERROR running axe-core:", error.message);
        res.status(500).json({ error: error.message });
    }
});

/**
 * Route to fix individual issues using LLaMA 3.3-70B (via OpenRouter)
 */
app.post("/fix", async (req, res) => {
    const { selector, codeSnippet } = req.body;

    if (!selector || !codeSnippet) {
        return res.status(400).json({ error: "Missing selector or code snippet." });
    }

    try {
        console.log(`📡 Requesting fix for selector: ${selector}`);

        const prompt = `
            You are an expert in web accessibility and WCAG compliance.
            Your task is to fix accessibility issues in the provided HTML code.

            **Problematic HTML Code:**
            ${codeSnippet}

            **Instructions:**
            - Fix all accessibility violations in this snippet.
            - Ensure all WCAG 2.1 AA guidelines are met.
            - Maintain the structure and content of the original snippet.
            - Return only the **fixed HTML code**, nothing else.
        `;

        console.log("🚀 Sending request to OpenRouter API...");
        const response = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                model: "meta-llama/llama-3.3-70b-instruct:free",
                messages: [{ role: "system", content: prompt }],
                max_tokens: 500,
            },
            {
                headers: {
                    "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );

        const fixedCode = response.data.choices?.[0]?.message?.content?.trim() || "Error generating fix.";
        console.log("✅ Fix received:", fixedCode);

        res.json({ fixedCode });

    } catch (error) {
        console.error("🔴 ERROR calling OpenRouter API:", error.response?.data || error.message);
        res.status(500).json({ error: "Error generating fix." });
    }
});

/**
 * Start the Express Server
 */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
