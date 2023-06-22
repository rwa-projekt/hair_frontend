import React, { useContext, createContext, useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { GET_USER, LOGIN, LOGOUT, REGISTER } from "../state/modules/user/actions";

// Permissions
import { PermissionProvider } from './permissions'

// Creating Auth Context
let AuthContext = createContext(null);

// Auth provider => returning children
function AuthProvider({ children }) {

  // Hooks
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation();

  // Current user
  const user = useSelector(state => state.USER.user);
  const isAuthenticated = !!user?.data?.token
  const isAdmin = user?.data?.account?.is_admin
  // Methods

  // Handling initial redirects
  function userRedirect(){
    navigate(location.state.from || '/dashboard')
  }

  function adminRedirect(){
    navigate(location.state.from || '/admin')
  }

  // Getting user
  const getUser = async (userRedirect, adminRedirect) => {
    let token = "";
    try {
      token = localStorage.getItem("token");
    } catch (error) {
      console.log("Error fetching token.")
    }

    dispatch({
      type: GET_USER,
      queryParams: { token },
      userRedirect,
      adminRedirect
    });
  };

  useEffect(() => {
    getUser(userRedirect, adminRedirect)
  }, [])

  // Login
  async function login(user, userCallback, adminCallback, error){
    dispatch({
      type: LOGIN,
      data: user,
      userCallback: userCallback,
      adminCallback: adminCallback,
      errorCallback: error,
    });
  };


  // Register
  async function register(user, callback, error){
    dispatch({
      type: REGISTER,
      data: user,
      successCallback: callback,
      errorCallback: error,
    });
  };

  // Logout
  let logout = () => {
    dispatch({ type: LOGOUT });
  };

  // Getting permissions
  const fetchPermission = (user) => (permission) => {
    return user?.data?.account?.permissions?.includes(permission);
  }

  const hasPermission = (permission) => {
    return user?.data?.account?.permissions?.includes(permission);
  }

  // Informations about user
  let value = { user, isAdmin, isAuthenticated, hasPermission, login, register, logout };

  // Rendering children
  return (
    <AuthContext.Provider value={value}>
      <PermissionProvider fetchPermission={fetchPermission(user)}>
        {children}
      </PermissionProvider>
    </AuthContext.Provider>
  )
}

// useAuth hook
function useAuth() {
  return useContext(AuthContext);
}

// Auth guard => children is accessible only to authorized users
function RequireAuth({ children }) {

  // Hooks  
  let auth = useAuth();
  let location = useLocation();

  if (!auth.isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login.
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }

  return children;
}

// Auth guard => children is accessible only to authorized users
function RequireAdmin({ children }) {

  // Hooks  
  let auth = useAuth();
  let location = useLocation();

  if (!auth.isAuthenticated || !auth.isAdmin) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login.
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }

  return children;
}

// Auth guard => not allowing authorized users to access login/register pages
function RequireUser({ children }) {

  // Hooks  
  let auth = useAuth();
  let location = useLocation();

  // Variables
  const adminRoute = location.state?.from || '/admin'
  const userRoute = 
    location.state?.from.pathname.includes('admin') ? 
      '/dashboard' : 
      location.state?.from || '/dashboard'

  // Redirects based on users authentication and admin status
  if (auth.isAuthenticated) {
    if(auth.isAdmin){
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login.
      return <Navigate to={adminRoute} state={{ from: location }}/>;
    }
    else{
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login.
      return <Navigate to={userRoute} state={{ from: location }}/>;
    }
  }
  

  return children
}

export { AuthProvider, RequireAuth, RequireAdmin, RequireUser, useAuth }