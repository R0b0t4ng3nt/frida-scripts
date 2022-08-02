# List of useful frida-scripts for android

### 1. Bypass SIM checking on Android
Certain android apps check if a SIM card is installed before giving access to the app. This script attempts to bypass this by hooking most commonly used method - `android.telephony.SubscriptionManager.getActiveSubscriptionInfoList()`.

#### Usage:

1. Edit line #30-35 to provide values for `iccid`,`carrier name`,`phone-number`,`country iso`,`card string` to mimic a sim or use default values. These values can be random unless application checks for specific values. 

2. Command - `frida -l test.js -D <device-name> -f <package-name> --no-paus`

## TO Do
Add more scripts :)
