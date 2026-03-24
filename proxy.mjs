import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ITIN_WIZARD_PORT = 3000;
const PORT = 8080;

http.createServer((req, res) => {
  if (req.url.startsWith("/itin-wizard")) {
    // Proxy to itin-wizard dev server
    const options = {
      hostname: "localhost",
      port: ITIN_WIZARD_PORT,
      path: req.url,
      method: req.method,
      headers: req.headers,
    };

    const proxy = http.request(options, (proxyRes) => {
      res.writeHead(proxyRes.statusCode, proxyRes.headers);
      proxyRes.pipe(res);
    });

    proxy.on("error", () => {
      res.writeHead(502);
      res.end("itin-wizard dev server not running on port " + ITIN_WIZARD_PORT);
    });

    req.pipe(proxy);
  } else {
    // Serve index.html for everything else
    const filePath = path.join(__dirname, "index.html");
    fs.readFile(filePath, (err, data) => {
      if (err) { res.writeHead(404); res.end("Not found"); return; }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
}).listen(PORT, () => {
  console.log(`Landing page: http://localhost:${PORT}`);
  console.log(`Proxying /itin-wizard -> http://localhost:${ITIN_WIZARD_PORT}`);
});
