"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackController = void 0;
const similarTracksService_1 = require("../services/similarTracksService");
class TrackController {
    static fetchSimilarTracks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const searchTerm = req.query.search || 'default';
            try {
                const tracks = yield similarTracksService_1.TrackService.getSimilarTracks(searchTerm);
                res.json(tracks);
            }
            catch (error) {
                console.error('Error in TrackController:', error);
                res.status(500).json({ error: 'Failed to fetch similar tracks' });
            }
        });
    }
}
exports.TrackController = TrackController;
