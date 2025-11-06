import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Load env variables
const PORT: any = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || "My Node App with CICD | All is well sir";

// Dummy route
app.get("/", (req: Request, res: Response) => {
    res.json({
        message: `🚀 Hello from ${APP_NAME}! Rupam Gupta`,
        port: PORT,
        time: new Date().toISOString(),
    });
});

const HOST = '0.0.0.0';

// Start server
app.listen(PORT, HOST, () => {
    console.log(`✅ My App running at http://${HOST}:${PORT}`);
});
