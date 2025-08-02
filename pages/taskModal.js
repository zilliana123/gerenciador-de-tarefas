import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

const style = {
  width: 400,
};

function TaskModal({ open, handleClose, task }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Tarefa {task}</DialogTitle>

      <DialogContent sx={style}>
        {task ? (
          <p>
            Você está editando a <strong>Tarefa {task}</strong>.
          </p>
        ) : (
          <p>Nenhuma tarefa selecionada.</p>
        )}
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button
          onClick={() => alert(`Tarefa ${task} salva!`)}
          variant="contained"
        >
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default TaskModal;
