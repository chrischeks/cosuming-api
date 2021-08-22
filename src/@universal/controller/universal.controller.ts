import { Request, Response } from 'express';
import { logger } from '../logger/logger';

class UniversalController {
  protected controllerErrorHandler = async (req: Request, res: Response, error) => {
    const { originalUrl, method, ip } = req;

    logger.log('error', `URL:${originalUrl} - METHOD:${method} - IP:${ip} - ERROR:${error}`);
    return res.status(500).json({ status: 'failed', message: 'Operation was not successful, please contact support.', data: null });
  };

  public controllerResponseHandler = async (response, req: Request, res: Response) => {
    const { statusCode, status, message, data } = response;
    const { originalUrl, method, ip } = req;
    logger.log(
      `${status === 'success' ? 'info' : 'warn'}`,
      `URL:${originalUrl} - METHOD:${method} - IP:${ip}- StatusCode : ${statusCode} - Message : ${message}}`,
    );
    return res.status(statusCode).json({ status, message, data });
  };
}

export default UniversalController;
