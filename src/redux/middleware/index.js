export function myMiddleware() {
  return function (next) {
    return function (action) {
      return next(action);
    };
  };
}
