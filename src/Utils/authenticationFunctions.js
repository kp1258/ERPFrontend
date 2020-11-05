export const determinePath = (user) => {
  if (user.role === "technolog") {
    return "technologist";
  } else if (user.role === "administrator") {
    return "admin";
  } else if (user.role === "handlowiec") {
    return "salesman";
  } else if (user.role === "kierownik produkcji") {
    return "production-manager";
  } else if (user.role === "magazynier") {
    return "warehouseman";
  } else {
    return "not-found";
  }
};
