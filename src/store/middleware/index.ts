import { Middleware, Dispatch, Action, AnyAction } from 'redux';

const myMiddleware: Middleware = () =>
    (next: Dispatch<AnyAction>) =>
        <A extends Action>(action: A): A => next(action);

export default myMiddleware;
