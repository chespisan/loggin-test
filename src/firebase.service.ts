import crashlytics from '@react-native-firebase/crashlytics';

export class FirebaseService {

  getCrashLog(message: string) {
    return crashlytics().log(message)
  }

  setCrashAttribute(name: string, value: string) {
    return crashlytics().setAttribute(name, value)
  }

  setCrashAttributes(data: any) {
    return crashlytics().setAttributes(data)
  }

  setCrashError(error: Error) {
    return crashlytics().recordError(error)
  }

}