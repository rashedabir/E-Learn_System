import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function StudentDashboardSkeleton() {
  return (
    <Stack spacing={2} style={{padding:"30px"}}>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={50} height={50} />
      <Skeleton variant="rectangular" width={1200} height={118} />
    </Stack>
  );
}
