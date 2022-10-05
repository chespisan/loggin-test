import StackdriverErrorReport from "stackdriver-errors-js";

export class GcpService {
  private static _instance: GcpService;

  public errorHandler: StackdriverErrorReport;

  constructor() {
  	this.errorHandler = new StackdriverErrorReport();
  }
  
  public static getInstance(): GcpService {
  	if (!this._instance) this._instance = new this();
  	return this._instance;
  }
  
  startReporting(key: string, projectId: string, service: string, version: string): void {
    this.errorHandler.start({
      key,
      projectId,
      service,
      version,
    });
  }

  reportCrash(error: string | Error, storeId: string): void {
  	const dataCrash = {
  		storeId,
  		error,
  	};
  	this.errorHandler.report(JSON.stringify(dataCrash));
  }
}