import { useEffect, useRef } from "react";

const voidFn = () => {};

const requestTimeout = (fn, delay, registerCancel) => {
  const start = new Date().getTime();

  const timer = () => {
    const timeDiff = new Date().getTime() - start;

    if (timeDiff >= delay) {
      fn();
      registerCancel(voidFn);
      return;
    }

    const reqAnimFrame = requestAnimationFrame(timer);
    registerCancel(() => cancelAnimationFrame(reqAnimFrame));
  };

  const reqAnimFrame = requestAnimationFrame(timer);
  registerCancel(() => cancelAnimationFrame(reqAnimFrame));
};

const useCancelableScheduledWork = () => {
  const cancelCallback = useRef(voidFn);
  const registerCancel = (fn) => (cancelCallback.current = fn);
  const cancelScheduledWork = () => cancelCallback.current();

  useEffect(() => {
    return cancelScheduledWork;
  }, []);

  return [registerCancel, cancelScheduledWork];
};

type onClick = (...args) => unknown;
type onDoubleClick = (...args) => unknown;
type delay = number;

const useClickWithPrevention = (
  onClick: onClick,
  onDoubleClick: onDoubleClick,
  delay: delay = 300
) => {
  const [registerCancel, cancelScheduledRaf] = useCancelableScheduledWork();

  const handleClick = () => {
    cancelScheduledRaf({});
    requestTimeout(onClick, delay, registerCancel);
  };

  const handleDoubleClick = () => {
    cancelScheduledRaf({});
    onDoubleClick();
  };

  return [handleClick, handleDoubleClick];
};

export default useClickWithPrevention;
