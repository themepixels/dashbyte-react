import React from "react";

// Dashboard
import SalesMonitoring from "../dashboard/SalesMonitoring";
import WebsiteAnalytics from "../dashboard/WebsiteAnalytics";

// UI Elements
import LayoutColumns from "../docs/LayoutColumns";
import LayoutGrid from "../docs/LayoutGrid";
import LayoutGutters from "../docs/LayoutGutters";
import Accordions from "../docs/Accordions";
import Alerts from "../docs/Alerts";
import Avatars from "../docs/Avatars";
import Badges from "../docs/Badges";
import Breadcrumbs from "../docs/Breadcrumbs";
import Buttons from "../docs/Buttons";
import Cards from "../docs/Cards";
import Carousels from "../docs/Carousels";
import Dropdowns from "../docs/Dropdowns";

const protectedRoutes = [
  { path: "dashboard/sales", element: <SalesMonitoring /> },
  { path: "dashboard/analytics", element: <WebsiteAnalytics /> },
  { path: "docs/layout/grid", element: <LayoutGrid /> },
  { path: "docs/layout/columns", element: <LayoutColumns /> },
  { path: "docs/layout/gutters", element: <LayoutGutters /> },
  { path: "docs/com/accordions", element: <Accordions /> },
  { path: "docs/com/alerts", element: <Alerts /> },
  { path: "docs/com/avatars", element: <Avatars /> },
  { path: "docs/com/badge", element: <Badges /> },
  { path: "docs/com/breadcrumbs", element: <Breadcrumbs/> },
  { path: "docs/com/buttons", element: <Buttons/> },
  { path: "docs/com/cards", element: <Cards/> },
  { path: "docs/com/carousel", element: <Carousels/> },
  { path: "docs/com/dropdown", element: <Dropdowns/> }
]

export default protectedRoutes;