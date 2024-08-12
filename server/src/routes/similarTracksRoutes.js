"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const similarTracksController_1 = require("../controllers/similarTracksController");
const router = (0, express_1.Router)();
router.get('/similar-tracks', similarTracksController_1.TrackController.fetchSimilarTracks);
exports.default = router;
