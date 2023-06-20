export interface DialogState {
  open: boolean;
  title: string | undefined;
  logo: string | undefined;
  info1: number | undefined;
  info2: string | undefined;
}

export interface ShowPayload {
  title?: string;
  logo?: string;
  info1?: number;
  info2?: string;
}
