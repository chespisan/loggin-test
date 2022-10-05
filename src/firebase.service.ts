import crashlytics from '@react-native-firebase/crashlytics';

export class FirebaseService {
  private static _instance: FirebaseService

  public static getInstance(): FirebaseService {
    if (!this._instance) this._instance = new this()
    return this._instance
  }

  log(message: string) {
    return crashlytics().log(message);
  }

  setAttribute(name: string, value: string) {
    return crashlytics().setAttribute(name, value);
  }

  setAttributes(data: any) {
    return crashlytics().setAttributes(data);
  }

  recordError(error: Error) {
    return crashlytics().recordError(error);
  }
}
