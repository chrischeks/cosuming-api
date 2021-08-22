import UniversalService from '@/@universal/service/universal.service';
import config from 'config';
import { IWalletFetch } from '../refund.interface';

const { walletFetchAPI } = config.get('config.APIS');

export class WalletService extends UniversalService {
  public processFetchWallet = async (customerWalletId: string): Promise<IWalletFetch> => {
    const requestBody = { id: customerWalletId };
    const response = await this.centralAPICaller(walletFetchAPI, requestBody, { 'content-type': 'application/json' }, 'post');
    const { status, data, statusText, statusCode, result } = response;
    if (status === 'success') {
      return { status: 'success', walletBefore: data.wallet };
    } else {
      return { status: 'error', statusText, statusCode, message: result.message };
    }
  };
}
