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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackService = void 0;
const axios_1 = __importDefault(require("axios"));
const similarTracksMapper_1 = require("../mappers/similarTracksMapper");
class TrackService {
    static getSimilarTracks(searchTerm) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get(`${this.BASE_URL}?client_id=${this.CLIENT_ID}&search=${encodeURIComponent(searchTerm)}`);
                const rawData = response.data.results;
                return rawData.map(similarTracksMapper_1.mapSimilarTracks);
            }
            catch (error) {
                console.error('Error fetching similar tracks:', error);
                throw new Error('Failed to fetch similar tracks');
            }
        });
    }
}
exports.TrackService = TrackService;
TrackService.BASE_URL = 'https://api.jamendo.com/v3.0/tracks/';
TrackService.CLIENT_ID = 'fc642ce2';
