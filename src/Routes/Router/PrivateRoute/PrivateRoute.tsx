// @ts-nocheck
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../../components/Spinner/Spinner';
import { useAuth } from '../../../contexts/AuthProvider';


const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();

  if (loading) {
    return <Spinner/>
  };

  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;