const isEmpty = obj => {
  if (typeof obj === 'undefined' || obj === null || obj.length === 0) {
    return true;
  }
  return !Object.keys(obj).length;
};

export default isEmpty;
