Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (babel) {
    const { types: t } = babel;

    return {
        name: "remove-console",
        visitor: {
            CallExpression(path) {
                const calleePath = path.get("callee")

                if (calleePath.matchesPattern("console", true)) {
                    path.remove();
                }
            }
        }
    };
}
