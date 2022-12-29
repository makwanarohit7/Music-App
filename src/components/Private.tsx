import { Navigate } from "react-router-dom";

interface PrivateProps {
  children: JSX.Element;
}

const Private: React.FC<PrivateProps> = ({ children }) => {
  const isAuthenicated = sessionStorage.getItem("isAuthenticated");
  return isAuthenicated ? children : <Navigate to="/login" />;
};
export default Private;
