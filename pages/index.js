import React, { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

import TaskModal from "./taskModal";

function TaskList() {
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleOpen = (task) => {
    setSelectedTask(task);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedTask(null);
    setOpen(false);
  };

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {[1, 2, 3, 4].map((value) => (
          <ListItem
            key={value}
            disableGutters
            secondaryAction={
              <Button onClick={() => handleOpen(value)}>
                <IconButton aria-label="Edit">
                  <EditIcon />
                </IconButton>
              </Button>
            }
          >
            <ListItemText primary={`Tarefa ${value}`} />
          </ListItem>
        ))}
      </List>

      <TaskModal open={open} handleClose={handleClose} task={selectedTask} />
    </Box>
  );
}

export default TaskList;
