// components/TaskItem.js
import { ListItem, ListItemText, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

function TaskItem({ task, onToggle, onEdit }) {
  return (
    <ListItem
      disableGutters
      key={task.id}
      secondaryAction={
        <>
          <IconButton
            onClick={() => onToggle(task.id)}
            aria-label="Toggle status"
          >
            {task.status === "concluída" ? (
              <CheckCircleOutlineIcon color="success" />
            ) : (
              <RadioButtonUncheckedIcon color="action" />
            )}
          </IconButton>

          <IconButton onClick={() => onEdit(task)} aria-label="Edit">
            <EditIcon />
          </IconButton>
        </>
      }
    >
      <ListItemText primary={task.title} secondary={`Status: ${task.status}`} />
    </ListItem>
  );
}

export default TaskItem;
