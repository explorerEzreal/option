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

export { getAdress };
