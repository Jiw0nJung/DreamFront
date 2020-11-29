import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ServerError } from '../apiHandler';
import { RootState } from '../reducer';
import { appAction } from '../action';

/**
 * @description App Redux에 대한 Custom Hook
 */
export default function useAppState() {
  const app = useSelector((state: RootState) => state.appReducer);
  const dispatch = useDispatch();

  /**
   * @description Loading 상태 설정
   */
  const setLoading = useCallback(() => dispatch(appAction.setLoading()), [dispatch]);

  /**
   * @description Loading 상태 헤제
   */
  const releaseLoading = useCallback(() => dispatch(appAction.releaseLoading()), [
    dispatch,
  ]);

  /**
   * @description Error 상태 설정
   */
  const setError = useCallback(
    (error: string) => dispatch(appAction.setError(error)),
    [dispatch],
  );

  /**
   * @description Error 상태 헤제
   */
  const releaseError = useCallback(() => dispatch(appAction.releaseError()), [
    dispatch,
  ]);

  /**
   * @description Api Handler에서 발생하는 Error를 핸들링합니다.
   */
  const setServerError = useCallback(
    (error: ServerError) => dispatch(appAction.setServerError(error)),
    [dispatch],
  );

  /* --------------- */
  /* App Redux Utils */
  /* --------------- */

  /**
   * @description Error Message를 보여줍니다.
   */
  const showErrorMessage = useCallback(() => {
    if (app.error.code) window.alert(app.error.message);
    releaseError();
  }, [app.error, releaseError]);

  return {
    state: app,
    setLoading,
    releaseLoading,
    setError,
    releaseError,
    setServerError,
    showErrorMessage,
  };
}
