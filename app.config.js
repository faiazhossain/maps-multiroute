export const MAP_API_ACCESS_TOKEN =
  process.env.NEXT_PUBLIC_MAP_API_ACCESS_TOKEN || "";

export const LOCAL_BASE_URL = "https://maps.barikoi.com" || "";

export const API = {
  BBOX: "https://pocketbase.bmapsbd.com/api/collections/routing_demo_country_unfo/records",
  ROUTING_API: "https://pocketbase.bmapsbd.com/api/collections/routing_demo_api/records",
  AUTOCOMPLETE_SPECIFIC_COUNTRY: `https://test.barikoimaps.dev/v1/search?text=`,
};
