import 'reflect-metadata';

import modules from './modules';
import { App } from './app';
import { resolve } from 'path';

const app = new App(modules, resolve('src', 'db', 'index.sqlite'));

app.onServer(3000);
