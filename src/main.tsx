import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { WebApp } from "@/routes/WebApp";
import { HomePage } from "@/routes/HomePage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <WebApp />,
		children: [
			{ index: true, element: <HomePage /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
