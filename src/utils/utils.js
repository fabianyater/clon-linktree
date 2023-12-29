
export const handleDeleteLink = (linkIndex, setLinks) => {
  setLinks(links => links.filter((_, index) => index !== linkIndex));
};

export const getNameFromUrl = (url) => {
  const parts = url.split("/");
  const domain = parts[2];
  const domainParts = domain.startsWith("www.")
    ? domain.substring(4).split(".")
    : domain.split(".");
  return domainParts[0];
};

export const extractIconRoute = (data) => {
  if (data[0]?.route) {
    return typeof data[0].route === "object"
      ? Object.values(data[0].route)[0]
      : data[0].route;
  }
  console.error("No valid route available for the icon");
  return "";
};