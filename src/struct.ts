/**
 * 随机取 Object 的属性
 * @param clazz
 * @returns
 */
const useRandomProperty = (clazz: any) => {
  var keys = Object.keys(clazz);
  return clazz[keys[(keys.length * Math.random()) << 0]];
};

export default {
  useRandomProperty,
};