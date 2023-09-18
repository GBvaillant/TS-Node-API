import bodyParser from 'body-parser';
import { Application } from 'express';
import './util/module-alias';
import { Server } from '@overnightjs/core';
import { ForecastController } from './controllers/forecast';

export class SetupServer extends Server {
  constructor(private port = 3800) {
    super();
  }

  public init(): void {
    this.setupExpress();
    this.setupControllers();
  }

  private setupControllers(): void {
    const forecastController = new ForecastController();
    this.addControllers([forecastController]);
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }

  public getApp(): Application {
    return this.app;
  }
}
