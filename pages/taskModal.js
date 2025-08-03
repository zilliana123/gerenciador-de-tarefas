import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  width: 400,
};

function TaskModal({ open, handleClose, task, handleDelete }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Tarefa {task?.id}</DialogTitle>

      <DialogContent sx={style}>
        {task ? (
          <Typography>
            Você está editando a <strong>{task.title}</strong>. Status atual:{" "}
            <em>{task.status}</em>.
          </Typography>
        ) : (
          <Typography>Nenhuma tarefa selecionada.</Typography>
        )}
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button
          onClick={() => alert(`Tarefa ${task?.id} (${task?.title}) salva!`)}
          variant="contained"
        >
          Salvar
        </Button>
        <Button
          onClick={() => handleDelete(task?.id)}
          variant="outlined"
          color="error"
        >
          Excluir
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default TaskModal;
