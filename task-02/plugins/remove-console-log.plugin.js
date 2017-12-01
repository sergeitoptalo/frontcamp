export default function ({ types: t }) {
    return {
        visitor: {
            CallExpression (path, {opts: options}) {
                console.log(types);
                console.log(path);
                console.log(opts);
            }
        }
    };
}
