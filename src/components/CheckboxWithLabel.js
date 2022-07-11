import * as React from 'react';
import MuiCheckbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export function CheckboxWithLabel({ Label, ...props }) {
  return (
    <FormControlLabel
      control={<MuiCheckbox {...props} />}
      {...Label}
    />
  );
}

CheckboxWithLabel.displayName = 'FormikMaterialUICheckboxWithLabel';