import { BASE_URL } from "../config";

/**
 * The options used to configure the API.
 */
export interface ApiConfig {
  /**
   * The URL of the api.
   */
  url: string;

  getTopTracks: string;
  getTopArtists: string;
  searchTracks: string;
  searchArtists: string;

  /**
   * Milliseconds before we timeout the request.
   */
  timeout: number;
}

/**
 * The default configuration for the app.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: BASE_URL,

  getTopTracks: "chart.gettoptracks",
  getTopArtists: "chart.gettopartists",
  searchTracks: "track.search",
  searchArtists: "artist.search",

  timeout: 60000,
};
