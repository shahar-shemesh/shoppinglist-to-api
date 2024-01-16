import { useEffect } from 'react';

import ProgressBar from './ProgressBar.jsx';
import Button from './Button.jsx';

const TIMER = 3000;

export default function OrderConfirmation({ onConfirm }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    return () => {
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div className='flex flex-col text-center items-center'>
      <h2 className='text-center text-lg'>ההזמנה נשלחה בהצלחה</h2>
      <div className='m-8'>
        <Button onClick={onConfirm}>
          סגור
        </Button>
      </div>
      <ProgressBar timer={TIMER} />
    </div>
  );
};