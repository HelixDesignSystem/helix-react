import React from 'react';

export const getShortText = () => `lorem ipsum dolor sir amet`;

export const getLongText = () => `
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
 `;

export const InputContainer = ({ children }) => (
  <div style={{ width: 500, marginBottom: 30 }}>{children}</div>
);
