import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from "@/redux/store/root-reducer"
import rootSaga from './root-saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
 rootReducer,
 applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)


export type RootState = ReturnType<typeof store.getState>;
export default store;