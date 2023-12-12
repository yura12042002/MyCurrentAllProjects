import { useEffect, useState } from "react";

const steps = [
  ["name", "age"],
  ["city", "street"],
  ["company", "grade"],
  ["email", "phone"],
];

export const useNewDataAboutUser = () => {
  const stepsToObject = steps.flat(Infinity).reduce((acc, el) => {
    acc[el] = "";
    return acc;
  }, {});

  const [info, setInfo] = useState(stepsToObject);
  const [currentPage, setCurrentPage] = useState(0);

  const handleChangeInput = (e, param) => {
    setInfo({ ...info, [param]: e.target.value });
  };

  const handleClickChangePage = (operation) => {
    if (operation === "+") {
      if (currentPage < steps.length && currentPage >= 0) {
        setCurrentPage(currentPage + 1);
      }
    } else {
      if (currentPage < steps.length && currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    }
  };
  
  const isDisabledButton =
    currentPage !== steps.length &&
    !steps[currentPage].every((el) => info[el] && info[el].trim().length > 0);

  return {
    steps,
    info,
    currentPage,
    isDisabledButton,
    handleChangeInput,
    handleClickChangePage,
  };
};
