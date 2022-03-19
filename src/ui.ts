import { Dimensions, Platform, StatusBar } from "react-native";
import struct from "./struct";

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
 * 随机颜色
 * @param isMaterialDesign 是否取 Material Design 颜色
 * @returns
 */
const useRandomColor = (isMaterialDesign?: boolean) => {
  return isMaterialDesign
    ? struct.useRandomProperty(useMaterialDesignColor)
    : `#${parseInt(Math.random().toString().replace("0.", ""))
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
    ios: isiPhone11() ? (isSafe ? 44 : 34) : 20,
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

/**
 * 尺寸缩放
 * @param n
 * @returns
 */
const useScale = (n: number, uiScreenWidth?: number) => {
  const screen = Dimensions.get("screen");
  return (screen.width / uiScreenWidth ?? 375) * n;
};

const useMaterialDesignColor = {
  red: { name: "嫣红", dark: "#e74b44", light: "#fcdcdd" },
  orange: { name: "橘橙", dark: "#f57c1f", light: "#fee7d5" },
  yellow: { name: "明黄", dark: "#fdbc0a", light: "#fff3d1" },
  olive: { name: "橄榄", dark: "#8ec541", light: "#fcf4db" },
  green: { name: "森绿", dark: "#3ab54b", light: "#d9f0df" },
  cyan: { name: "天青", dark: "#1ebcb6", light: "#d4f2f4" },
  blue: { name: "海蓝", dark: "#0282ff", light: "#cfe7ff" },
  purple: { name: "姹紫", dark: "#6938b9", light: "#e2d7f3" },
  mauve: { name: "木槿", dark: "#9e28b2", light: "#edd4f2" },
  pink: { name: "桃粉", dark: "#e2399a", light: "#fcd7ec" },
  brown: { name: "棕褐", dark: "#a86640", light: "#f0e1dc" },
  grey: { name: "玄灰", dark: "#8899a7", light: "#eaebf1" },
};

/** 金银铜颜色 */
enum useWinnerColors {
  "#f57c1f",
  "#8899a7",
  "#987123",
}

export default {
  isiPhone11,
  useRandomColor,
  useStatusBarHeight,
  useHomeIndicatorHeight,
  useCardStyle,
  useScale,
  useMaterialDesignColor,
  useWinnerColors,
};
