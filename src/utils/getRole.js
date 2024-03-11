export const getRole = () => {
  const role = localStorage.getItem("role");
  console.log("getRole", role);
  if (role) {
    return role;
  }
  return null;
};
