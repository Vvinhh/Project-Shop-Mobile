import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { styled } from "@mui/system";
import * as React from "react";

const SelectTextField = styled(Select)({
  color: "darkslategray",
  "& .MuiOutlinedInput-input": {
    color: "white",
    border: "none",
  },
});

export default function Dropdownphone() {
  const [Phone, setPhone] = React.useState("");

  const handleChange = (event) => {
    setPhone(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 100 }}>
        <InputLabel
          id="demo-simple-select-autowidth-label"
          sx={{
            outline: {
              border: "none",
            },
            color: "white",
          }}
        >
          Phone
        </InputLabel>

        <SelectTextField
          labelId="demo-simple-select-autowidth-label"
          value={Phone}
          onChange={handleChange}
          autoWidth
          label="Phone"
          variant="outlined"
          defaultValue={0}
        >
          <MenuItem value={0}>Phone</MenuItem>
          <MenuItem value={10}>Iphone</MenuItem>
          <MenuItem value={20}>Samsung</MenuItem>
          <MenuItem value={30}>Xaomi</MenuItem>
        </SelectTextField>
      </FormControl>{" "}
    </div>
  );
}
