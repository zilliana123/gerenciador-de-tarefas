import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function StatusFilter({ value, onChange }) {
  return (
    <FormControl fullWidth sx={{ maxWidth: 360, mb: 2 }}>
      <InputLabel id="status-filter-label">Filtrar por status</InputLabel>
      <Select
        labelId="status-filter-label"
        value={value}
        label="Filtrar por status"
        onChange={(e) => onChange(e.target.value)}
      >
        <MenuItem value="">Todos</MenuItem>
        <MenuItem value="pendente">Pendente</MenuItem>
        <MenuItem value="em progresso">Em progresso</MenuItem>
        <MenuItem value="concluída">Concluída</MenuItem>
      </Select>
    </FormControl>
  );
}

export default StatusFilter;
