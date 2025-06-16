import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Modal, Fade } from "@mui/material";

function ContentWarningModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasSeenWarning = localStorage.getItem("contentWarningDismissed");
    if (!hasSeenWarning) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("contentWarningDismissed", "true");
  };

  return (
    <Modal
      open={open}
      onClose={(event, reason) => {
        // only allow close from the button
        if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
          handleClose();
        }
      }}
      closeAfterTransition
      disableEscapeKeyDown
      aria-labelledby="content-warning-title"
      aria-describedby="content-warning-description"
      sx={{ zIndex: 2000 }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "#fffbeb",
            boxShadow: 24,
            borderRadius: 2,
            p: 4,
            width: { xs: "90%", sm: 400 },
            textAlign: "center",
          }}
        >
          <Typography
            id="content-warning-title"
            variant="h5"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "#78350f", mb: 3 }}
          >
            CONTENT WARNING
          </Typography>
          <Typography
            id="content-warning-description"
            variant="body1"
            mb={3}
            sx={{ color: "#78350f" }}
          >
            This site deals with heavy subject matter that may negatively affect
            the reader. <br />
            <br />
            If you are affected by the issue of missing and murdered Indigenous
            women, girls, and 2SLGBTQIA+ individuals, or by gender-based
            violence, and need immediate emotional assistance, contact the
            National Inquiry into Missing and Murdered Indigenous Women and
            Girls Toll-Free Support Phone Line at 1-844-413-6649. <br />
            <br />
            This service is available 24/7 in English, French, Cree, Ojibwe, and
            Inuktitut.
          </Typography>
          <Button variant="contained" color="primary" onClick={handleClose}>
            Continue
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
}

export default ContentWarningModal;
