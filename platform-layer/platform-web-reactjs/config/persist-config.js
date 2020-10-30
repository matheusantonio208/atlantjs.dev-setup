import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'application.name',
      storage,
      whitelist: ['valueFieldA', 'valueFieldB'],
    },
    reducers,
  );

  return persistedReducer;
};
