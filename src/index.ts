import * as React from "react";

type onClick = (...args) => unknown;
type onDoubleClick = (...args) => unknown;
type options = { delay: number };

const useClickWithPrevention = (
  _onClick: onClick,
  _onDoubleClick: onDoubleClick,
  { delay = 300 }: options
) => {
  const [_timer, setTimer] = React.useState<null | NodeJS.Timeout>(null);
  const [_delay] = React.useState<number>(delay);
  const [_prevent, setPrevent] = React.useState<boolean>(false);

  const onClick = () => {
    const timerID = setTimeout(() => {
      if (!_prevent) {
        _onClick();
      }
      setPrevent(false);
    }, _delay);
    setTimer(timerID);
  };

  const onDoubleClick = () => {
    clearTimeout(_timer);
    setPrevent(true);
    _onDoubleClick();
  };

  return [onClick, onDoubleClick];
};

export default useClickWithPrevention;
