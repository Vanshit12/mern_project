import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Route, Navigate } from "react-router-dom";

// const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
//   const { loading, isAuthenticated, user } = useSelector((state) => state.user);
//     const navigate = useNavigate();
//   return (
//     <Fragment>
//       {loading === false && (
//         <Route
//           {...rest}
//           render={(props) => {
//             if (isAuthenticated === false) {
//                 navigate("/login")
//             }

//             if (isAdmin === true && user.role !== "admin") {
//               navigate("/login")
//             }

//             return <Component {...props} />;
//           }}
//         />
//       )}
//     </Fragment>
//   );
// };

// export default ProtectedRoute;

const ProtectedRoute = ({
    redirectPath = '/login',
    children,
  }) => {

    
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

    if (!isAuthenticated) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children;
  };

export default ProtectedRoute;
