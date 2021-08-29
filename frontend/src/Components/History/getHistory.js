export const getHistoryData = () => {
  return fetch("/api/bowling/get")
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};
