import express, { Application, Router } from 'express';

export class App {
  private Server: Application;

  private onModules(modules: Router[]): void {
    modules.forEach((router) => {
      this.Server.use(router);
    });
  }

  constructor(modules: Router[]) {
    this.Server = express();
    this.onModules(modules);
  }
  public onServer(port: number): void {
    this.Server.listen(port, () => {
      console.log('Server started on port ' + port);
    });
  }
}
