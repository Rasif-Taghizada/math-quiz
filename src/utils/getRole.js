export const getRole = () => {
  const role = localStorage.getItem("role");
  if (role) {
    return role;
  }
  return null;
};
