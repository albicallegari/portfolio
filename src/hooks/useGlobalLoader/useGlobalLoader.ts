import { useAppDispatch } from '../../store';
import {
  hideLoader as hideLoaderActionCreator,
  showLoader as showLoaderActionCreator,
} from '../../store/loaderSlice/loaderSlice';
import { useCallback, useMemo } from 'react';

const useGlobalLoader = () => {
  const dispatch = useAppDispatch();
  const showLoader = useCallback(() => {
    dispatch(showLoaderActionCreator());
  }, [dispatch]);
  const hideLoader = useCallback(() => {
    dispatch(hideLoaderActionCreator());
  }, [dispatch]);
  return useMemo(
    () => ({
      showLoader,
      hideLoader,
    }),
    [showLoader, hideLoader]
  );
};

export default useGlobalLoader;
