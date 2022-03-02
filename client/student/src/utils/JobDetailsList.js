import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import CategoryIcon from "@mui/icons-material/Category";

export const JobDetailsList = [
  {
    id: 1,
    title: "Date",
    icon:   <CalendarTodayIcon />,
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
    path: "/courseList",
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
  {
    id: 6,
    title: "Create Blog",
    icon: <CategoryIcon />,
    path: "/add_blogs",
  },
  {
    id: 6,
    title: "Blogs",
    icon: <CategoryIcon />,
    path: "/blogs",
  },
];
