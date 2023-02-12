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
import Images from "../docs/Images";
import Listgroup from "../docs/Listgroup";
import Markers from "../docs/Markers";
import Modals from "../docs/Modals";
import NavTabs from "../docs/NavTabs";
import OffCanvas from "../docs/OffCanvas";
import Paginations from "../docs/Paginations";
import Placeholders from "../docs/Placeholders";
import Popovers from "../docs/Popovers";
import Progress from "../docs/Progress";
import Spinners from "../docs/Spinners";
import Toasts from "../docs/Toasts";
import Tooltips from "../docs/Tooltips";
import Tables from "../docs/Tables";
import FormElements from "../docs/FormElements";
import FormSelects from "../docs/FormSelects";
import FormChecksRadios from "../docs/FormChecksRadios";
import FormRange from "../docs/FormRange";
import FormPickers from "../docs/FormPickers";
import FormLayouts from "../docs/FormLayouts";
import FormEditors from "../docs/FormEditors";
import UtilBackground from "../docs/UtilBackground";
import UtilBorder from "../docs/UtilBorder";
import UtilColors from "../docs/UtilColors";
import UtilDivider from "../docs/UtilDivider";
import UtilFlex from "../docs/UtilFlex";
import UtilSizing from "../docs/UtilSizing";
import UtilSpacing from "../docs/UtilSpacing";
import UtilOpacity from "../docs/UtilOpacity";
import UtilPosition from "../docs/UtilPosition";
import UtilTypography from "../docs/UtilTypography";
import UtilShadows from "../docs/UtilShadows";
import UtilExtras from "../docs/UtilExtras";
import ChartJs from "../docs/ChartJs";
import MapLeaflet from "../docs/MapLeaflet";
import MapVector from "../docs/MapVector";
import IconRemix from "../docs/IconRemix";
import IconFeather from "../docs/IconFeather";

// Pages
import Pricing from "../pages/Pricing";
import Faq from "../pages/Faq";
import Profile from "../pages/Profile";
import People from "../pages/People";
import Activity from "../pages/Activity";
import Events from "../pages/Events";
import Settings from "../pages/Settings";

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
  { path: "docs/com/breadcrumbs", element: <Breadcrumbs /> },
  { path: "docs/com/buttons", element: <Buttons /> },
  { path: "docs/com/cards", element: <Cards /> },
  { path: "docs/com/carousel", element: <Carousels /> },
  { path: "docs/com/dropdown", element: <Dropdowns /> },
  { path: "docs/com/images", element: <Images /> },
  { path: "docs/com/listgroup", element: <Listgroup /> },
  { path: "docs/com/markers", element: <Markers /> },
  { path: "docs/com/modal", element: <Modals /> },
  { path: "docs/com/navtabs", element: <NavTabs /> },
  { path: "docs/com/offcanvas", element: <OffCanvas /> },
  { path: "docs/com/pagination", element: <Paginations /> },
  { path: "docs/com/placeholders", element: <Placeholders /> },
  { path: "docs/com/popovers", element: <Popovers /> },
  { path: "docs/com/progress", element: <Progress /> },
  { path: "docs/com/spinners", element: <Spinners /> },
  { path: "docs/com/toasts", element: <Toasts /> },
  { path: "docs/com/tooltips", element: <Tooltips /> },
  { path: "docs/com/tables", element: <Tables /> },
  { path: "docs/form/elements", element: <FormElements /> },
  { path: "docs/form/selects", element: <FormSelects /> },
  { path: "docs/form/checksradios", element: <FormChecksRadios /> },
  { path: "docs/form/range", element: <FormRange /> },
  { path: "docs/form/pickers", element: <FormPickers /> },
  { path: "docs/form/layouts", element: <FormLayouts /> },
  { path: "docs/form/editors", element: <FormEditors /> },
  { path: "docs/util/background", element: <UtilBackground /> },
  { path: "docs/util/border", element: <UtilBorder /> },
  { path: "docs/util/colors", element: <UtilColors /> },
  { path: "docs/util/divider", element: <UtilDivider /> },
  { path: "docs/util/flex", element: <UtilFlex /> },
  { path: "docs/util/sizing", element: <UtilSizing /> },
  { path: "docs/util/spacing", element: <UtilSpacing /> },
  { path: "docs/util/opacity", element: <UtilOpacity /> },
  { path: "docs/util/position", element: <UtilPosition /> },
  { path: "docs/util/typography", element: <UtilTypography /> },
  { path: "docs/util/shadows", element: <UtilShadows /> },
  { path: "docs/util/extras", element: <UtilExtras /> },
  { path: "docs/chart/chartjs", element: <ChartJs /> },
  { path: "docs/map/leaflet", element: <MapLeaflet /> },
  { path: "docs/map/vector", element: <MapVector /> },
  { path: "docs/icon/remix", element: <IconRemix /> },
  { path: "docs/icon/feather", element: <IconFeather /> },
  { path: "pages/pricing", element: <Pricing /> },
  { path: "pages/faq", element: <Faq /> },
  { path: "pages/profile", element: <Profile /> },
  { path: "pages/people", element: <People /> },
  { path: "pages/activity", element: <Activity /> },
  { path: "pages/events", element: <Events /> },
  { path: "pages/settings", element: <Settings /> }
]

export default protectedRoutes;