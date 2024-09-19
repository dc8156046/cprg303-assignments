## CPRG303 Mobile Application Development

React Native Environment Setup: A Step-by-Step Guide

System Requirements
Operating System: Windows 11 Home
CPU: AMD Ryzen 5 PRO 4650U
RAM: 16GB

## Getting Started

1. Installation Instructions

   1.1 Install Node.js

   • Download: Visit [Node.js](https://nodejs.org/) and download the latest stable version (LTS).

   • Install: Follow the installer’s steps.

   • Verify Installation:

   ```bash
   node -v
   npm -v
   ```

2. Project Creation
   Once the environment is set up, create a new React Native project by following these steps:
3. Open Command Prompt (or Terminal in VSCode).
4. Run the following command:

```bash
  npx create-expo-app@latest – template
```

then follow this link: https://docs.expo.dev/router/installation/#manual-installation
Install dependencies:

```bash
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

install the following dependencies for web:

```bash
npx expo install react-native-web react-dom
```

Running the Project:

```bash
npx expo start -c
```

## 5. Resources

• React Native Official Documentation: https://reactnative.dev/docs/environment-setup

• Node.js Official Website: https://nodejs.org

• Install Expo Router: [Install Expo Router - Expo Documentation](https://docs.expo.dev/router/installation/#manual-installation)
