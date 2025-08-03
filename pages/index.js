import React, { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";

import TaskItem from "./TaskItem";
import TaskModal from "./TaskModal";

function TaskList() {
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const [tasks, setTasks] = useState([
    { id: 1, title: "Tarefa 1", status: "pendente" },
    { id: 2, title: "Tarefa 2", status: "concluída" },
    { id: 3, title: "Tarefa 3", status: "pendente" },
    { id: 4, title: "Tarefa 4", status: "concluída" },
  ]);

  const handleOpen = (task) => {
    setSelectedTask(task);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedTask(null);
    setOpen(false);
  };

  const toggleStatus = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: task.status === "pendente" ? "concluída" : "pendente",
            }
          : task
      )
    );
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
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleStatus}
            onEdit={handleOpen}
          />
        ))}
      </List>

      <TaskModal open={open} handleClose={handleClose} task={selectedTask} />
    </Box>
  );
}

export default TaskList;
