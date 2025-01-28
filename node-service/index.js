const express = require('express');
const { DaprServer, DaprClient, HttpMethod } = require("@dapr/dapr");

const daprHost = "http://localhost";
const daprPort = "3500";

const client = new DaprClient(daprHost, daprPort);

const app = express();
app.use(express.json());

app.get('/orchestrate', async (req, res) => {
    try {

        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ error: "Name is required in the request body" });
        }

        // Call PHP service
        const phpResponse = await client.invoker.invoke(
            "phpservice", // Dapr App ID of the PHP service
            "greet", // Endpoint of the PHP service
            HttpMethod.GET
        );
        
        // Call Python service
        const pythonResponse = await client.invoker.invoke(
            "pythonservice", // Dapr App ID of the Python service
            "process", // Endpoint of the Python service
            HttpMethod.POST,
            { name } // JSON payload
        );

        res.json({
            phpResponse: phpResponse,
            pythonResponse: pythonResponse
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error communicating with services");
    }
});

app.listen(8083, () => console.log("Node.js service running on port 8083"));
