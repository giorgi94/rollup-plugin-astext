
function astext({ extensions = [".json"] }) {


    return {
        name: "astext",
        transform(code, id) {

            const key = extensions.find(ext => id.endsWith(ext));

            if (key) {
                return {
                    code: `export default ${JSON.stringify(code)};`,
                    map: { mappings: "" }
                };
            }

        },
    };
}

module.exports = astext;