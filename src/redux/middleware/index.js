export function myMiddleware() {
  return function (next) {
    return function (action) {
      console.log('middleware');

      return next(action);
    };
  };
}
