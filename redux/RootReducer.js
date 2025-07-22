// RootReducer.js
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { themeReducer } from './ThemeReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['themeReducer'],
};

const rootReducer = combineReducers({
  themeReducer,
});

export default persistReducer(persistConfig, rootReducer);
