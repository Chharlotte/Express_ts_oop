import express, { Application, Router } from 'express';
import { DataSource } from 'typeorm';

export class App {
  private DB: DataSource;

  private Server: Application;

  private onModules(modules: Router[]): void {
    modules.forEach((router) => {
      this.Server.use(router);
    });
  }

  constructor(modules: Router[], database: string) {
    this.Server = express();
    this.onModules(modules);
    this.DB = new DataSource({
      type: 'sqlite',
      database,
      synchronize: true,
      entities: ['src/modules/**/entity/*.entity.ts'],
    });
  }
  public async onServer(port: number): Promise<void> {
    await this.DB.initialize();
    this.Server.listen(port, () => {
      console.log('Server started on port ' + port);
    });
  }
}
