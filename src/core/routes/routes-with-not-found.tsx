
import { ReactNode } from "react";
import { Navigate, Route, Routes } from "react-router";

interface RoutesWithNotFoundProps {
	children: ReactNode;
}

const RoutesWithNotFound = ({ children }: RoutesWithNotFoundProps) => {
	return (
		<Routes>
			{children}
			<Route path="*" element={<Navigate to="/404" />} />
			<Route path="/404" element={<div>Not Found</div>} />
		</Routes>
	);
};

export default RoutesWithNotFound;