import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CategoryIcon from "@mui/icons-material/Category";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";

export const adminDrawerItemList = [
  {
    id: 1,
    title: "Dashboard",
    icon: <HomeIcon />,
    path: "/",
  },
  {
    id: 2,
    title: "Instructor List",
    icon: <ListIcon />,
    path: "/instructor",
  },
  {
    id: 3,
    title: "Course List",
    icon: <ListIcon />,
    path: "/course",
  },
  {
    id: 4,
    title: "Add Blog",
    icon: <AddBoxIcon />,
    path: "/blog",
  },
  {
    id: 5,
    title: "Add Category",
    icon: <CategoryIcon />,
    path: "/category",
  },
];
