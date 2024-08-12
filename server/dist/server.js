"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const similarTracksController_1 = require("./controllers/similarTracksController");
const app = (0, express_1.default)();
const port = 3000;
// app.use(cors());
app.get('/api/similar-tracks', similarTracksController_1.TrackController.fetchSimilarTracks);
app.get('/', (req, res) => {
    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>API Link</title>
        </head>
        <body>
            <h1>API Link</h1>
            <div>
                <a href="/api/similar-tracks?search=believe" target="_blank">http://localhost:3000/api/similar-tracks?search=believe</a>
            </div>
        </body>
        </html>
    `;
    res.send(html);
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
