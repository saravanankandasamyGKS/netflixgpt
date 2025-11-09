export const LOGO =
  "https://images.seeklogo.com/logo-png/25/1/netflix-logo-png_seeklogo-256429.png";

export const USER_AVATAR =
  "https://occ-0-7275-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
  },
};
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w300/";
export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_small.jpg";
export const SUPPORTED_LANGUAGES = [
  { identifier: "tamil", name: "Tamil" },
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];
export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
