import UniversalController from '@/@universal/controller/universal.controller';
import { NextFunction, Request, Response } from 'express';
import { RefundService } from './service/refund.service';

class RefundController extends UniversalController {
  public creatingLogicService = new RefundService();

  public refund = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
      const response = await this.creatingLogicService.processRefund();
      const { status } = response;
      if (status === 'error') return this.controllerResponseHandler(response, req, res);
      return this.controllerResponseHandler(response, req, res);
    } catch (error) {
      return this.controllerErrorHandler(req, res, error);
    }
  };
}

export default RefundController;
