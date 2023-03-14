import { Box, Tabs, Tab } from '@mui/material';
import React, { useState } from 'react';
import TabPanel from './TabPanel';
import prednaskova from '../../assets/images/detailStavby/prednaskova.webp';
import prizemie from '../../assets/images/detailStavby/prizemie.webp';
import poschodie from '../../assets/images/detailStavby/poschodie.webp';

const farby = {
  prednaskova: '#AE3636',
  ubytovanie: '#79AE36',
  socialne: '#CEAF40',
  technicke: '#3836AE',
};

const details = {
  prednaskova: {
    label: 'Prednášková miestnosť',
    popis: [{
      body: [
        'Pódium',
        'Sedenie pre 240 ľudí',
        'Ozvučenie a osvetlenie',
      ],
      farba: farby.prednaskova,
    }],
  },
  prizemie: {
    label: 'Prízemie',
    popis: [{
      body: [
        '4 lôžka na prízemí s bezbarierovým prístupom',
      ],
      farba: farby.ubytovanie,
    },
    {
      body: [
        'Sociálne zariadenia na prízemí s bezbarierovým prístupom',
      ],
      farba: farby.socialne,
    },
    {
      body: [
        'Recepcia', 'Skladové priestory', 'Technická miestnosť',
      ],
      farba: farby.technicke,
    },
    ],
  },
  poschodie: {
    label: 'Poschodie',
    popis: [{
      body: [
        '20 lôžok',
      ],
      farba: farby.ubytovanie,
    },
    {
      body: [
        'Sociálne zariadenia',
      ],
      farba: farby.socialne,
    },
    {
      body: [
        'Malá kaplnka',
      ],
      farba: farby.prednaskova,
    }],
  },
};

const TabMenu = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          {Object.keys(details).map(text => (
            <Tab
              label={details[text].label}
              key={details[text].label}
            />
          ))}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} details={details.prednaskova} image={prednaskova} />
      <TabPanel value={value} index={1} details={details.prizemie} image={prizemie} />
      <TabPanel value={value} index={2} details={details.poschodie} image={poschodie} />
    </Box>
  );
};

export default TabMenu;
