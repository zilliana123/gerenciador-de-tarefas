import { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const style = { width: 400 };

function TaskModal({ open, handleClose, task, handleDelete, handleSave }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("pendente");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title || "");
      setStatus(task.status || "pendente");
      setContent(task.content || "");
    }
  }, [task]);

  const onSave = () => {
    const finalTitle = title.trim() || `Tarefa ${task?.id ?? ""}`;
    handleSave({ ...task, title: finalTitle, status, content });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {title.trim() ? title : task?.id ? `Tarefa ${task.id}` : "Nova tarefa"}
      </DialogTitle>

      {task && (
        <Typography sx={{ px: 3 }} color="text.secondary">
          Status atual: <em>{status}</em>
        </Typography>
      )}

      <DialogContent sx={style}>
        <TextField
          label="Título"
          fullWidth
          margin="dense"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Texto"
          multiline
          rows={4}
          fullWidth
          margin="dense"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </DialogContent>

      <DialogActions>
        {task?.id && (
          <Button
            onClick={() => handleDelete(task.id)}
            variant="outlined"
            color="error"
          >
            Excluir
          </Button>
        )}
        <Button onClick={onSave} variant="contained">
          Salvar
        </Button>
        <Button onClick={handleClose}>Cancelar</Button>
      </DialogActions>
    </Dialog>
  );
}

export default TaskModal;
