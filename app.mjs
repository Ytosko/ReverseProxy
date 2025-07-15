import express from 'express';
import https from 'https';
import fs from 'fs';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = 7303;

// SSL certificate and key paths (adjust if needed)
const sslOptions = {
    key: fs.readFileSync('---'),
    cert: fs.readFileSync('---')
};
 
app.use(cors());

// Status check
app.get('/', (req, res) => {
    res.send('✅ Proxy is running on tools.togethercfo.com/proxy');
});

// Proxy endpoint: /fetch/<url>
app.get('/fetch', async (req, res) => {
    const encodedUrl = req.query.url;
    const targetUrl = decodeURIComponent(encodedUrl);

    if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
        return res.status(400).json({ error: 'Invalid URL. Must start with http:// or https://' });
    }

    try {
        const response = await fetch(targetUrl);
        const contentType = response.headers.get('content-type') || 'text/plain';
        const body = await response.text();

        res.setHeader('Content-Type', contentType);
        res.send('✅ Proxy is running on tools.togethercfo.com/proxy');
    } catch (err) {
        res.status(500).json({
            error: 'Failed to fetch target URL',
            details: err.message
        });
    }
});


// Start HTTPS server
https.createServer(sslOptions, app).listen(PORT, () => {
    console.log(`🔐 HTTPS Proxy server running at https://tools.togethercfo.com:${PORT}`);
});
