import { Button, Stack, Typography } from "@mui/material";
import React from "react";

// Illustrations
import Illustration from "../../../assets/illustrations/landing-page-illustration.png";
import { useNavigate } from "react-router";

export default function LandingPage() {

    // Hooks
    const navigate = useNavigate()

    // Methods
    function handleOnLoginClick() {
        navigate("/auth/login")
    }

  return (
    <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" pt={4}>
      <Stack spacing={4}>
        <Typography variant="h2">Barber Booking</Typography>
        <Typography variant="h6" fontWeight={400} sx={{ opacity: 0.75, fontSize: 18, maxWidth: "75%" }}>
          Barber Booking je jednostavna web aplikacija koja će vam omogućiti da se brzo i jednostavno naručite za termin
          šišanja ili oblikovanja brade.
        </Typography>
        <Button
          sx={{ textTransform: "none", borderRadius: 40, width: 200 }}
          disableElevation
          onClick={handleOnLoginClick}
          color="primary"
          variant="contained"
        >
          Prijavite se
        </Button>
      </Stack>

      {/* Illustration */}
      <img style={{ width: 480 }} src={Illustration} />
    </Stack>
  );
}
