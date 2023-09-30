import { selectIsLoggedIn, selectIsRefreshing } from 'Redux/Auth/selector';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
