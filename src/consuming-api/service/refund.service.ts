import UniversalService from '@/@universal/service/universal.service';
import { AuthService } from './payment.service';
import { IPayResponse, IOutput, IWalletFetch } from '../refund.interface';
import { WalletService } from './wallet.service';

export class RefundService extends UniversalService {
  private authService = new AuthService();
  private walletService = new WalletService();
  public processRefund = async (): Promise<IOutput> => {
    const fetchWallet: IWalletFetch = await this.walletService.processFetchWallet('573839293');
    const { status: fecthWalletStatus, statusCode: refreshWalletCode, walletBefore, message, statusText } = fetchWallet;
    if (fecthWalletStatus === 'error')
      return { status: fecthWalletStatus, message: message || statusText || 'Wallet fetch error', statusCode: refreshWalletCode };

    const pay: IPayResponse = await this.authService.processPay('484929849', '573839293', 2003.0);
    const { status, statusCode, walletAfter, statusText: statusTextPay, message: payMessage } = pay;
    if (status === 'error') return { status, message: payMessage || statusTextPay || 'Login error', statusCode };

    return {
      status: 'success',
      message: 'Okra-refund-bingo',
      statusCode: 200,
      data: { walletBefore, walletAfter },
    };
  };
}
