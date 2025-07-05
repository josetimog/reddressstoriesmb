import React, { useState } from "react";
import "./Priorities.css";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function Priorities({ chapter }) {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleOpenModal = (topic) => setSelectedTopic(topic);
  const handleCloseModal = () => setSelectedTopic(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div id="priorities" className="step centered">
      <div style={{ backgroundColor: "#f3ece4", opacity: 0.9 }}>
        {chapter.title && (
          <h3
            style={{
              fontSize: "1.6rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            {chapter.title}
          </h3>
        )}

        {chapter.description && (
          <p
            style={{ fontSize: "1.4rem", textAlign: "center" }}
            dangerouslySetInnerHTML={{ __html: chapter.description }}
          />
        )}

        <div className="grid-container">
          {chapter.topics.map((topic, index) => (
            <div
              className="grid-item"
              key={index}
              onClick={() => handleOpenModal(topic)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleOpenModal(topic);
              }}
            >
              <div className="img-div">
                <img src={topic.image} alt={topic.topic} />
              </div>
              <h5>{topic.topic}</h5>
            </div>
          ))}
        </div>
      </div>

      <Modal open={!!selectedTopic} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: isMobile ? "90%" : 500,
            bgcolor: "#f2ede6",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            maxHeight: "80vh",
            overflowY: "auto",
          }}
        >
          <IconButton
            onClick={handleCloseModal}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
          {selectedTopic && (
            <>
              <Typography variant="h6" sx={{ mb: 2 }}>
                {selectedTopic.topic}
              </Typography>
              <Typography
                variant="body1"
                dangerouslySetInnerHTML={{ __html: selectedTopic.text }}
              />
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default Priorities;
