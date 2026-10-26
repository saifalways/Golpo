import React from "react";
import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Sidebar from "./Sidebar";

const RootLayout = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={1.5}>
          <Sidebar />
        </Grid>
        <Grid size={10.5}>
            <div className="mr-6">
              <Outlet/>
            </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default RootLayout;
