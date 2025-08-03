import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";

import StatusFilter from "./StatusFilter";
import TaskItem from "./TaskItem";
import TaskModal from "./TaskModal";

function TaskList() {
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [statusFilter, setStatusFilter] = useState("");

  const [tasks, setTasks] = useState([
    { id: 1, title: "Tarefa 1", status: "pendente" },
    { id: 2, title: "Tarefa 2", status: "concluída" },
    { id: 3, title: "Tarefa 3", status: "em progresso" },
    { id: 4, title: "Tarefa 4", status: "pendente" },
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
        task.id !== taskId
          ? task
          : {
              ...task,
              status:
                task.status === "pendente"
                  ? "em progresso"
                  : task.status === "em progresso"
                  ? "concluída"
                  : "pendente",
            }
      )
    );
  };

  const handleDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    handleClose();
  };

  const filteredTasks = tasks.filter((task) =>
    statusFilter ? task.status === statusFilter : true
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "#666",
      }}
    >
      <Typography variant="h5" component="h1" gutterBottom>
        Gerenciador de Tarefas
      </Typography>

      <Box
        sx={{
          width: 360,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          mt: 2,
        }}
      >
        <Button>Nova tarefa</Button>
        <FormControl fullWidth sx={{ maxWidth: 150 }}>
          <StatusFilter value={statusFilter} onChange={setStatusFilter} />
        </FormControl>
      </Box>

      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleStatus}
            onEdit={handleOpen}
          />
        ))}
      </List>

      <TaskModal
        open={open}
        handleClose={handleClose}
        task={selectedTask}
        handleDelete={handleDelete}
      />
    </Box>
  );
}

export default TaskList;
