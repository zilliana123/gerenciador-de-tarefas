import { ListItem, ListItemText, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

function TaskItem({ task, onToggle, onEdit }) {
  const getIconStyle = () => {
    switch (task.status) {
      case "em progresso":
        return {
          color: "orange", // destaque laranja
        };
      case "concluída":
        return {
          color: "green",
        };
      default:
        return {
          color: "gray",
        };
    }
  };

  const renderStatusIcon = () => {
    if (task.status === "concluída") {
      return <CheckCircleOutlineIcon sx={getIconStyle()} />;
    }

    return <RadioButtonUncheckedIcon sx={getIconStyle()} />;
  };

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
            {renderStatusIcon()}
          </IconButton>

          <IconButton onClick={() => onEdit(task)} aria-label="Edit">
            <EditIcon />
          </IconButton>
        </>
      }
    >
      <ListItemText
        primary={task.title}
        secondary={`Status: ${task.status}`}
        sx={{
          color:
            task.status === "em progresso"
              ? "orange"
              : task.status === "concluída"
              ? "green"
              : "inherit",
        }}
      />
    </ListItem>
  );
}

export default TaskItem;
