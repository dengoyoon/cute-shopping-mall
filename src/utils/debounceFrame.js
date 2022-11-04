export const debounceFrame = (callback) => {
  let nextFrameCallback = -1;
  return () => {
    cancelAnimationFrame(nextFrameCallback);
    nextFrameCallback = requestAnimationFrame(callback);
  };
};
