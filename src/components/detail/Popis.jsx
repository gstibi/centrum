import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';
import CircleIcon from '@mui/icons-material/Circle';

const Popis = ({ body, farba }) => (
  <List>
    {body.map(bod => (
      <ListItem key={bod}>
        <ListItemIcon>
          <CircleIcon fontSize="small" sx={{ color: farba }} />
        </ListItemIcon>
        <ListItemText primary={bod} />
      </ListItem>
    ))}
  </List>
);

Popis.propTypes = {
  body: PropTypes.arrayOf(PropTypes.string).isRequired,
  farba: PropTypes.string.isRequired,
};

export default Popis;
