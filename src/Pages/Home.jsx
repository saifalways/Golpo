import React, { useEffect } from "react";
import Sidebar from "../Componenet/Sidebar";
import Grid from "@mui/material/Grid";
import GroupList from "../Layout/GroupList";
import Friends from "../Layout/Friends";
import UserList from "../Layout/UserList";
import FriendRequest from "../Layout/Friends";
import MyGroups from "../Layout/MyGroups";
import BlockedUsers from "../Layout/BlockedUsers";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  
  let data = useSelector((state) => state.counter.value);
  let navigate = useNavigate();
  useEffect(() => {
    if (data == null) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={4}>
          <GroupList />
        </Grid>
        <Grid size={4}>
          <Friends />
        </Grid>
        <Grid size={4}>
          <UserList />
        </Grid>
        <Grid size={4}>
          <FriendRequest />
        </Grid>
        <Grid size={4}>
          <MyGroups />
        </Grid>
        <Grid size={4}>
          <BlockedUsers />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
