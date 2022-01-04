import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import CategoryIcon from "@mui/icons-material/Category";

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
    title: "Course Category",
    icon: <CategoryIcon />,
    path: "/courseCategory",
  },
  {
    id: 5,
    title: "Blog category",
    icon: <CategoryIcon />,
    path: "/blogCategory",
  },
];
