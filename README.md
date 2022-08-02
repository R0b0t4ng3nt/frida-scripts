# List of useful frida-scripts for android

### 1. Bypass SIM checking on Android
Certain android apps check if a SIM card is installed before giving access to the app. This script attempts to bypass the most commonly used method - `android.telephony.SubscriptionManager.getActiveSubscriptionInfoList()`.

Usage:

Edit 

```
frida -l test.js -D <device-name> -f <package-name> --no-paus
```
