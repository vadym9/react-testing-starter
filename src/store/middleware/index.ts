import { MiddlewareAPI, Middleware, Dispatch, Action, AnyAction } from 'redux';
import { ApplicationState } from '../reducers'

const myMiddleware: Middleware = () =>
    (next: Dispatch<AnyAction>) =>
        <A extends Action>(action: A): A => next(action);

export default myMiddleware;
