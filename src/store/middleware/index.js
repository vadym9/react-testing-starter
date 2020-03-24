const myMiddleware = () => next => action => next(action);

export default myMiddleware;
