export default {
  name: "Mesh Portal Material React Native",
  slug: "mpmrn",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/favicon.png",
  userInterfaceStyle: "light",
  newArchEnabled: true,
  splash: {
    image: "./assets/favicon.png",
    resizeMode: "contain",
    backgroundColor: "#B2E5CF",
  },
  ios: {
    disableShakeToOpen: true,
    supportsTablet: true,
    infoPlist: {},
    bundleIdentifier: "com.jorgenbuilder.mpmrn",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/favicon.png",
      backgroundColor: "#ffffff",
    },
    edgeToEdgeEnabled: true,
    permissions: [],
    package: "com.jorgenbuilder.mpmrn",
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  plugins: [
    [
      "expo-asset",
      {
        assets: ["./assets/"],
      },
    ],
  ],
  assetBundlePatterns: ["assets/*"],
  extra: {
    eas: {
      projectId: "f2402857-d0dc-4a69-af40-190c6ebcfb24",
    },
  },
  owner: "jorgenbuilder",
  runtimeVersion: {
    policy: "appVersion",
  },
  updates: {
    url: "https://u.expo.dev/f2402857-d0dc-4a69-af40-190c6ebcfb24",
  },
};
