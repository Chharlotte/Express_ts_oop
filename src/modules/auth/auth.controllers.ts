import { Controller } from '../../interfaces';

export const base: Controller = (_req, res) => {
  res.status(200).send('I love you much ');
};
