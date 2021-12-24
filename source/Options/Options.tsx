import * as React from 'react';
import { Box } from 'rebass';
import { Label, Slider } from '@rebass/forms'

import './styles.scss';

const Options: React.FC = () => {
  return (
    <div>
      <Box>
        <Label htmlFor='percent'>Percent</Label>
        <Slider
          id='percent'
          name='percent'
          defaultValue={25}
        />
      </Box>
    </div>
  );
};

export default Options;
