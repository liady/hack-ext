/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import LinearDeterminate from "./LinearDeterminate.jsx";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5px;
`;

const Image = styled.img``;

export default function CreationPopup({ open }) {
  return (
    <Dialog
      open={open}
      maxWidth={false}
      sx={{
        "& .MuiDialog-container": {
          alignItems: "flex-start",
        },
      }}
      PaperProps={{
        sx: {
          m: 0,
          top: 140,
        },
        style: { borderRadius: 0 },
      }}
    >
      <DialogTitle
        style={{
          paddingTop: "20px",
          fontFamily: "Source Sans Pro",
          fontWeight: "bold",
          borderBottom: "1px solid lightgray",
        }}
      >
        Creating Your Stunning Site...
      </DialogTitle>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
      </style>
      <Wrapper>
        <Image src="//dd-cdn.multiscreensite.com/templates_page/loader_v2.gif" />
        <LinearDeterminate />
      </Wrapper>
    </Dialog>
  );
}
