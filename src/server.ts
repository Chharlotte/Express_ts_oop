import modules from './modules';
import { App } from './app';

const app = new App(modules);

app.onServer(3000);
