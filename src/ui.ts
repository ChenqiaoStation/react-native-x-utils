import { Dimensions, Platform, StatusBar } from "react-native";

/**
 * 判断是否 iPhone 11
 * @returns boolean
 */
const isiPhone11 = () => {
  const screenHeights = [780, 812, 844, 896, 926];
  const screen = Dimensions.get("screen");
  return (
    Platform.OS == "ios" &&
    screenHeights.some((it) => it == screen.height || it == screen.width)
  );
};

/**
 * 使用随机颜色
 * @returns string
 */
const useRandomColor = () => {
  return `#${parseInt(Math.random().toString().replace("0.", ""))
    .toString(16)
    .substring(0, 6)}`;
};

/**
 * 状态栏的高度
 * @param isImmersible Android 平台是否沉浸式
 * @param isSafe iPhone X 刘海高度，如果留白边返回 44，否则返回 34
 * @returns number
 */
const useStatusBarHeight = (isImmersible: boolean, isSafe?: boolean) => {
  return Platform.select({
    android: isImmersible ? StatusBar.currentHeight : 0,
    ios: isiPhone11() ? (isSafe ? 44 : 34) : 0,
  });
};

/**
 * Home Indicator 的高度
 * @returns number
 */
const useHomeIndicatorHeight = () => {
  return isiPhone11() ? 34 : 0;
};

/**
 * 卡片样式
 * @param shadowColor 默认: #000
 * @param shadowOffset 默认: {width: 0, height: 1}
 * @param shadowOpacity 默认: 0.1
 * @param elevation 默认: 4
 * @returns
 */
type Offset = {
  width: number;
  height: number;
};
const useCardStyle = (
  shadowColor?: string,
  shadowOffset?: Offset,
  shadowOpacity?: number,
  elevation?: number
) => {
  return {
    shadowColor: shadowColor ?? "#000",
    shadowOffset: shadowOffset ?? { width: 0, height: 1 },
    shadowOpacity: shadowOpacity ?? 0.1,
    elevation: elevation ?? 4,
  };
};

export default {
  isiPhone11,
  useRandomColor,
  useStatusBarHeight,
  useHomeIndicatorHeight,
  useCardStyle,
};
