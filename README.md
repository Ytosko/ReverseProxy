# 🌐 CORS Proxy Server over HTTPS at `/proxy`

A lightweight and production-ready CORS proxy built with Node.js and Express, reverse-proxied through Apache at:

https://tools.togethercfo.com/proxy/fetch?url=https://example.com


This allows frontend applications to safely bypass CORS restrictions by routing requests through your secure proxy.

---

## 🔧 Features

- ✅ CORS enabled for all origins
- ✅ Deployed with HTTPS via Let's Encrypt
- ✅ Works behind Apache reverse proxy at `/proxy`
- ✅ Simple `?url=` interface for compatibility
- ✅ Lightweight and fast
- ✅ Easily deployed with PM2

---

## 🚀 Live Endpoint

```bash
GET https://tools.togethercfo.com/proxy/fetch?url=https://example.com
```

## Installation

```
Clone the project
mkdir cors-proxy && cd cors-proxy
npm init -y
npm install express cors node-fetch
node app.mjs
```




