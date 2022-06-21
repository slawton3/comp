import { List, ListItem, ListItemButton, ListItemIcon, Checkbox, ListItemText } from '@mui/material';
import React, { useState } from 'react'

interface IListDetailProps {
    details: string[];
    measures?: string[];
  }

const ListDetail = ({ details, measures }: IListDetailProps): JSX.Element => {

  return (
    <div>
      <List sx={{ width: '100%', maxWidth: 360 }}>
        {details.map((detail, idx) => {
          const labelId = `checkbox-list-label-${detail}`;

          return (
            <ListItem
              key={idx}
              disablePadding
            >
                <ListItemText id={labelId} primary={detail} />
            </ListItem>
          );
        })}
      </List>
    </div>
  )
}

export default ListDetail