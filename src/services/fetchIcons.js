import { extractIconRoute } from "../utils/utils";

// En utils/services.js o similar
export const fetchIcon = async (name) => {
  try {
    const response = await fetch(
      `https://svgl.vercel.app/api/svgs?search=${name}`
    );
    const data = await response.json();
    return extractIconRoute(data);
  } catch (error) {
    console.error("Error fetching icon:", error);
    return "";
  }
};
