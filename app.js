import dotenv from "dotenv";
import app from "./app.js";

// Load environment variables from config.env file
dotenv.config({ path: "./config.env" });

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
