import string from "./src/string";
import io from "./src/io";
import ui from "./src/ui";
import struct from "./src/struct";
import os from "./src/os";
import { Dimensions } from "react-native";

/** 常用的直接导出 */
/**
 * Device Independent Pixels
 * @param n
 * @param uiScreenWidth
 * @returns
 */
const useDip = (n: number, uiScreenWidth?: number) => {
  return ui.useScale(n, uiScreenWidth ?? 375);
};

/**
 * 默认导出屏幕宽度，宽度比较常用，高度不太常用
 * @param param
 * @returns
 */
const useScreenSize = (param?: "height" | "width") => {
  let dimensions = Dimensions.get("screen");
  return dimensions[param ?? "width"];
};

/**
 * 阿里云 OSS
 * @param path net.cctv3.?
 * @param file 不用以 "/" 开头
 */
const useOSS = (path: "next" | "open" | "temporary" | "ynby", file: string) => {
  return `https://net-cctv3.oss-cn-qingdao.aliyuncs.com/net.cctv3.${path}/${file}`;
};

const x = { string, io, ui, struct, os };

export { x, useDip, useScreenSize, useOSS };