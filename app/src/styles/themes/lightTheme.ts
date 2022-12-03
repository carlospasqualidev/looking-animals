// https://icons.expo.fyi/

import { MD3LightTheme } from 'react-native-paper';

export const lightTheme = {
  ...MD3LightTheme, // or MD3DarkTheme
  roundness: 2,
  colors: {
    ...MD3LightTheme.colors,

    primary: 'rgb(0, 110, 7)',
    onPrimary: 'rgb(255, 255, 255)',
    primaryContainer: 'rgb(123, 254, 106)',
    onPrimaryContainer: 'rgb(0, 34, 1)',
    secondary: 'rgb(83, 99, 78)',
    onSecondary: 'rgb(255, 255, 255)',
    secondaryContainer: 'rgb(215, 232, 205)',
    onSecondaryContainer: 'rgb(18, 31, 14)',
    tertiary: 'rgb(56, 101, 105)',
    onTertiary: 'rgb(255, 255, 255)',
    tertiaryContainer: 'rgb(188, 235, 239)',
    onTertiaryContainer: 'rgb(0, 32, 34)',
    error: 'rgb(186, 26, 26)',
    onError: 'rgb(255, 255, 255)',
    errorContainer: 'rgb(255, 218, 214)',
    onErrorContainer: 'rgb(65, 0, 2)',
    background: 'rgb(252, 253, 246)',
    onBackground: 'rgb(26, 28, 24)',
    surface: 'rgb(252, 253, 246)',
    onSurface: 'rgb(26, 28, 24)',
    surfaceVariant: 'rgb(223, 228, 216)',
    onSurfaceVariant: 'rgb(67, 72, 63)',
    outline: 'rgb(115, 121, 110)',
    outlineVariant: 'rgb(195, 200, 188)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(47, 49, 45)',
    inverseOnSurface: 'rgb(241, 241, 235)',
    inversePrimary: 'rgb(94, 225, 81)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(239, 246, 234)',
      level2: 'rgb(232, 242, 227)',
      level3: 'rgb(224, 237, 220)',
      level4: 'rgb(222, 236, 217)',
      level5: 'rgb(217, 233, 213)',
    },
    surfaceDisabled: 'rgba(26, 28, 24, 0.12)',
    onSurfaceDisabled: 'rgba(26, 28, 24, 0.38)',
    backdrop: 'rgba(44, 50, 41, 0.4)',
  },
};
