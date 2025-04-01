import {  Outlet } from "react-router";

type Roles = "admin" | "user";

interface PrivateGuardProps {
  allowedRoles: Roles;
}

const PrivateGuard = ({ allowedRoles }: PrivateGuardProps) => {
  return (    
    <Outlet />
  );
};

export default PrivateGuard;
