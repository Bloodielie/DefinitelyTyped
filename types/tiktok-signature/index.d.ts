import { LaunchOptions, Browser, BrowserContext, Page } from "./playwright-webkit";

export default class Signer {
    public userAgent: string;
    public args: string[];
    public options: LaunchOptions;
    public browser?: Browser;
    public isExternalBrowser?: boolean;
    public tac?: any;
    public context?: BrowserContext;
    public page?: Page;
    
    constructor(userAgent?: string, tac?: any, browser?: Browser);
    init(): Promise<this>;
    close(): Promise<void>;
    sign(str: string): Promise<string>;
    getVerifyFp(): Promise<string | null>;
}