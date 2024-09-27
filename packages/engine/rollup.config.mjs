import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import dts from "rollup-plugin-dts";
import del from "rollup-plugin-del";

const builderECS = (format, filename) => ({
    exports: "named",
    name: "angry-pixel-engine",
    file: "../../bundles/angry-pixel-engine/lib/" + filename,
    format,
    sourcemap: true,
});

const main = () => {
    return [
        {
            input: "../../bundles/angry-pixel-engine/types/index.d.ts",
            output: [
                {
                    file: "../../bundles/angry-pixel-engine/lib/index.d.ts",
                    format: "es",
                },
            ],
            plugins: [dts(), del({ dest: "../../bundles/angry-pixel-engine/types" })],
        },
        {
            input: "src/index.ts",
            output: [
                builderECS("umd", "index.js"),
                builderECS("esm", "index.esm.js"),
                builderECS("cjs", "index.cjs.js"),
            ],
            plugins: [
                nodeResolve(),
                typescript({
                    compilerOptions: {
                        declaration: false,
                        emitDeclarationOnly: false,
                        declarationDir: undefined,
                    },
                }),
                commonjs({ extensions: [".ts", ".js"] }),
                terser(),
            ],
        },
    ];
};

export default main();
