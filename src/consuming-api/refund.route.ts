import { Router } from 'express';
import Route from '@/@universal/interfaces/route.interface';
import RefundController from './refund.controller';

class RefundRoute implements Route {
  public path = '/refund';

  public router = Router();
  public refundController = new RefundController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.refundController.refund);
  }
}

export default RefundRoute;
