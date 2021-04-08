import { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './AlertReducer';

const AlertState = (props) => {
  const initialState = null; // Hold the timeout id of the current alert

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (message, type, timeout = 5000) => {
    const timerID = setTimeout(
      () => dispatch({ type: 'REMOVE_ALERT' }),
      timeout,
    );
    dispatch({ type: 'SET_ALERT', payload: { message, type, timerID } });
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
