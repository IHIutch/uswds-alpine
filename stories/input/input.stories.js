import InputDefault from './templates/input.twig';
import InputGroup from './templates/input-group.twig';
import InputMask from './templates/input-mask.twig';

export default {
  title: 'Input',
};

export const Default = {
  render: () => InputDefault()
};

export const Group = {
  render: () => InputGroup()
};

export const Mask = {
  render: () => InputMask()
};
