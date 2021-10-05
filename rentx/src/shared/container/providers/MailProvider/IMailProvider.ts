export interface IMailProvider {
  sendMail(to: string, subject, options: any, path: string): Promise<void>;
}
