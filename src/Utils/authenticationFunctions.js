export const determinePath = (user) => {
  if (user.role === "Technolog") {
    return "technologist";
  } else if (user.role === "Administrator") {
    return "admin";
  } else if (user.role === "Handlowiec") {
    return "salesman";
  } else if (user.role === "Kierownik produkcji") {
    return "production-manager";
  } else if (user.role === "Magazynier") {
    return "warehouseman";
  } else {
    return "not-found";
  }
};
