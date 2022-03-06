/**
 * 判断字符串是否 JSON
 * @param s
 * @returns boolean
 */
const isJSON = (s: string) => {
  let result: boolean;
  try {
    JSON.parse(s);
    result = true;
  } catch (e) {
    result = false;
  }
  return result;
};

/**
 * 前端自己生成主键
 * @param length UUID 的长度: 默认 8 位
 * @param radix 进制: 默认 36 进制
 * @returns string
 */
const useUUID = (length?: number, radix?: number) => {
  return parseInt(Math.random().toString().replace("0.", ""))
    .toString(radix ?? 36)
    .substring(0, length ?? 8);
};

export default { isJSON, useUUID };
