import { Request, Response } from 'express';

export interface Controller {
  (req: Request, res: Response, next?: () => any): void;
}

//type ControllerType = (req: Request, res: Response) => void;
