import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs/react';
import Modal from './index';
import HxDiv from '../HxDiv';
import Button from '../Button';

const SIZES = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

storiesOf('Modal', module).add('All Knobs', () => {
  let header = text('header in H3', 'Modal Header');
  let footer = text('footer', '');
  let open = boolean('open', true);
  let size = select('size', SIZES, 'medium');
  let scroll = boolean('scroll', false);

  const smallText =
    'This is the body of a demo modal. Interaction with content behind this modal cannot take place until this modal is closed.\n';
  const lorumIpsum = (
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
  const longText = [1, 2, 3, 4, 5].map(() => lorumIpsum);
  const defaultFooter = (
    <>
      <Button variant="primary">Confirm</Button>
      <Button variant="tertiary">Cancel</Button>
    </>
  );

  return (
    <Modal
      {...(open && { open })}
      {...(size && { size })}
      open={open}
      onOpen={action('onOpen')}
      onClose={action('onClose')}
    >
      {header && (
        <header>
          <h3>{header}</h3>
        </header>
      )}
      <HxDiv scroll={scroll && 'vertical'}>
        {smallText}
        {scroll ? longText : null}
      </HxDiv>
      {<footer>{footer || defaultFooter}</footer>}
    </Modal>
  );
});
