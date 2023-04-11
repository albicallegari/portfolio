export interface DialogState {
  open: boolean;
  title: string | undefined;
  logo: string | undefined;
  currentPrice: number | undefined;
  percentage24: string | undefined;
}

export interface ShowPayload {
  title?: string;
  logo?: string;
  currentPrice?: number;
  percentage24?: string;
}
