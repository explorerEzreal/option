import { provinceData } from "./adress";

const getAdress = (list) => {
  const index = provinceData.findIndex((item) => {
    return item.value === list[0];
  });

  const index2 = provinceData[index].children?.findIndex((item) => {
    return item.value === list[1];
  });

  const index3 = provinceData[index].children[index2].children?.findIndex(
    (item) => {
      return item.value === list[2];
    }
  );
  const address =
    provinceData[index].label +
    "-" +
    provinceData[index].children[index2].label +
    "-" +
    provinceData[index].children[index2].children[index3].label;

  return address;
};

/**
 * @description 防抖函数
 */
function useDebounceFn(func, wait, immediate = false) {
  let timeout;
  let context;
  let result;
  /* useDebounceFn 第三个参数为 true 的时候，timeout 一直为假 */

  function resDebounced(...args) {
    // 这个函数里面的this就是要防抖函数要的this
    // args就是事件对象event
    context = this;

    // 一直触发一直清除上一个打开的延时器
    if (timeout) clearTimeout(timeout);

    if (immediate) {
      // 第一次触发，timeout===undefined恰好可以利用timeout的值
      const callNow = !timeout;

      // eslint-disable-next-line
      timeout = setTimeout(function () {
        timeout = null;
      }, wait);
      if (callNow) result = func.apply(context, args);
    } else {
      // 停止触发，只有最后一个延时器被保留
      // eslint-disable-next-line
      timeout = setTimeout(function () {
        timeout = null;
        // func绑定this和事件对象event，还差一个函数返回值
        result = func.apply(context, args);
      }, wait);
    }
    return result;
  }
  // eslint-disable-next-line
  resDebounced.cancal = function () {
    clearTimeout(timeout);
    timeout = null;
  };
  return resDebounced;
}

export { getAdress, useDebounceFn };
