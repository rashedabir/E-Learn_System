import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function CourseDetailsSkeleton() {
  return (
    <Stack spacing={2} style={{ padding: "30px" }}>
      <Skeleton variant="rectangular" width={1300} height={300} />
      <br></br>
      <Skeleton variant="rectangular" width={600} height={35} />
      <Skeleton variant="rectangular" width={200} height={25} />
      <br></br>
      <Skeleton variant="rectangular" width={1300} height={100} />
      <br></br>
      <Skeleton variant="rectangular" width={1300} height={150} />
      <br></br>
      <Skeleton variant="rectangular" width={1300} height={120} />
      <br></br>
      <Skeleton variant="rectangular" width={250} height={70} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Skeleton variant="rectangular" width={1300} height={1300} />
    </Stack>
  );
}
