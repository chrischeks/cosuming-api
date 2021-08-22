import UniversalService from '@/@universal/service/universal.service';
import { IPayResponse } from '../refund.interface';
import config from 'config';
const { payAPI } = config.get('config.APIS');

export class AuthService extends UniversalService {
  public processPay = async (companyId, customerId, amount): Promise<IPayResponse> => {
    const requestBody = { to_id: customerId, from_id: companyId, amount };
    const response = await this.centralAPICaller(payAPI, requestBody, { 'content-type': 'application/json' }, 'post');
    const { status, data, statusText, statusCode, result } = response;
    if (status === 'success') {
      return { walletAfter: data.wallets.to, status: 'success' };
    } else {
      return { statusText, statusCode, status: 'error', message: result.message };
    }
  };
}
