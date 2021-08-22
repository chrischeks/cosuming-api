interface IBase {
  status: string;
  statusCode?: number;
  statusText?: string;
  message?: string;
}

export interface IPayResponse extends IBase {
  walletAfter?: { amount: string; currency: string };
}

export interface IOutput extends IPayResponse, IWalletFetch {
  data?: {
    walletAfter: { amount: string; currency: string };
    walletBefore: { amount: string; currency: string };
  };
}

export interface IWalletFetch extends IBase {
  walletBefore?: { amount: string; currency: string };
}

export interface ILogout extends IBase {}
