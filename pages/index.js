import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";

import StatusFilter from "../components/StatusFilter";
import TaskItem from "../components/TaskItem";
import TaskModal from "../components/TaskModal";

function TaskList() {
  // Controla se o modal está aberto
  const [open, setOpen] = useState(false);
  // Guarda a tarefa selecionada para edição
  const [selectedTask, setSelectedTask] = useState(null);
  // Filtro aplicado às tarefas com base no status
  const [statusFilter, setStatusFilter] = useState("");

  // Lista inicial de tarefas
  const [tasks, setTasks] = useState([
    { id: 1, title: "Tarefa 1", status: "pendente" },
    { id: 2, title: "Tarefa 2", status: "concluída" },
    { id: 3, title: "Tarefa 3", status: "em progresso" },
    { id: 4, title: "Tarefa 4", status: "pendente" },
  ]);

  // Salva nova tarefa ou atualiza uma existente
  const handleSave = (newTask) => {
    setTasks((prev) => {
      const exists = prev.find((t) => t.id === newTask.id);
      if (exists) {
        // Atualiza tarefa existente
        return prev.map((t) => (t.id === newTask.id ? newTask : t));
      }
      // Adiciona nova tarefa
      return [...prev, newTask];
    });
    handleClose();
  };

  // Abre o modal da tarefa a ser editada
  const handleOpen = (task) => {
    setSelectedTask(task);
    setOpen(true);
  };

  // Fecha o modal
  const handleClose = () => {
    setSelectedTask(null);
    setOpen(false);
  };

  // Altera o status da tarefa
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

  // Remove uma tarefa da lista
  const handleDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    handleClose();
  };

  // Aplica o filtro de status
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
        <Button
          color="primary"
          variant="contained"
          onClick={() =>
            handleOpen({
              id: tasks.length + 1,
              title: "",
              status: "pendente",
              content: "",
            })
          }
        >
          Nova tarefa
        </Button>
        <FormControl fullWidth sx={{ maxWidth: 150 }}>
          <StatusFilter value={statusFilter} onChange={setStatusFilter} />
        </FormControl>
      </Box>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleStatus} // alterna status
            onEdit={handleOpen} // abre o modal para edição
          />
        ))}
      </List>

      <TaskModal
        open={open}
        handleClose={handleClose}
        task={selectedTask}
        handleDelete={handleDelete}
        handleSave={handleSave}
      />
    </Box>
  );
}

export default TaskList;
