import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_HAIRSTYLES } from "../../../../../state/modules/hairstyles/actions";
import { useIsLaptop } from "../../../../../hooks/useDevice";
import { useNavigate } from "react-router";

// MUI
import { CircularProgress, Stack, Box, Chip, Avatar, Typography } from "@mui/material";

// Components
import ScrollView from "../../../../../components/ScrollView";

export default function Services() {
  // Variables
  const navigate = useNavigate();
  const smallScreen = useIsLaptop();
  const dispatch = useDispatch();
  const hairstyles = useSelector((state) => state.HAIRSTYLES.hairstyles);

  // Methods
  useEffect(() => {
    dispatch({ type: GET_HAIRSTYLES });
  }, []);

  if (hairstyles.status === "loading") {
    return <CircularProgress />;
  }

  // Methods
  function handleNavigate() {
    navigate("/hairstyles");
  }

  return (
    <Stack style={{ width: "100%" }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ height: 20 }}>
        <Typography variant="h6" sx={{ fontWeight: 500 }}>
          Usluge
        </Typography>
        <Typography onClick={handleNavigate} variant="body1" sx={{ color: "primary.main", cursor: "pointer" }}>
          Vidi sve
        </Typography>
      </Stack>
      <Box sx={{ width: "100%", maxWidth: 1200, mt: 3 }}>
        <ScrollView>
          {hairstyles.data.map((item, index) => {
            return (
              <Stack
                id={index}
                itemId={index}
                key={index}
                direction="column"
                sx={{ width: 280, maxWidth: "100%", px: smallScreen ? 0 : 2, mr: smallScreen && 4 }}
              >
                <img
                  src={item.avatar}
                  style={{ width: "100%", aspectRatio: "7/4", objectFit: "cover", borderRadius: 16 }}
                />
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: 2, width: "100%" }}>
                  <Stack direction="column" sx={{ width: "100%" }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, maxWidth: "100%" }}>
                      {item.name}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 300 }}>
                      {item.price} KM
                    </Typography>
                  </Stack>
                  <Chip
                    size="small"
                    sx={{ width: "max-content" }}
                    label={`${item.time_needed} min.`}
                    variant="outlined"
                    color="secondary"
                  />
                </Stack>
              </Stack>
            );
          })}
        </ScrollView>
      </Box>
    </Stack>
  );
}
