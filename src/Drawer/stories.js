import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs/react';

import Drawer from './index';
import Button from '../Button';
import HxDiv from '../HxDiv';

const SIZES = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

storiesOf('Drawer', module).add('All Knobs', () => {
  let header = text('header', '');
  let body = text('body', '');
  let footer = text('footer', '');
  let open = boolean('open', true);
  let size = select('size', SIZES, 'medium');

  const loremIpsum = (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Gravida rutrum quisque non tellus. Sagittis vitae et leo duis
      ut diam quam nulla. Diam vel quam elementum pulvinar etiam non. Pulvinar sapien et ligula
      ullamcorper malesuada proin libero nunc. Ultricies integer quis auctor elit sed vulputate mi
      sit amet. Egestas dui id ornare arcu odio ut. In iaculis nunc sed augue. Pellentesque
      adipiscing commodo elit at imperdiet dui accumsan sit amet. Erat velit scelerisque in dictum
      non. Auctor augue mauris augue neque gravida in fermentum et. Posuere sollicitudin aliquam
      ultrices sagittis orci a scelerisque purus. Ullamcorper dignissim cras tincidunt lobortis
      feugiat vivamus at augue. Tincidunt vitae semper quis lectus nulla. Purus ut faucibus pulvinar
      elementum integer enim neque volutpat. Etiam sit amet nisl purus in mollis nunc. Diam sit amet
      nisl suscipit. Nulla pharetra diam sit amet nisl. Arcu odio ut sem nulla.
    </p>
  );
  const defaultBody = loremIpsum;
  const defaultHeader = 'Drawer Header';
  const defaultFooter = (
    <>
      <Button variant="primary">Confirm</Button>
      <Button variant="tertiary">Cancel</Button>
    </>
  );

  return (
    <Drawer {...(open && { open })} {...(size && { size })}>
      {<header>{header || defaultHeader}</header>}
      {<HxDiv>{body || defaultBody}</HxDiv>}
      {<footer>{footer || defaultFooter}</footer>}
    </Drawer>
  );
});
