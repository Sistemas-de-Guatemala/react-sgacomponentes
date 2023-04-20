import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

const packageJson = require("./package.json");

export default {
    input: "src/index.ts",
    output: [
        {
            file: packageJson.main,
            format: "cjs",
            sourcemap: false
        },
        {
            file: packageJson.module,
            format: "esm",
            sourcemap: false
        }
    ],
    plugins: [
        terser(),
        peerDepsExternal(),
        resolve({
            preferBuiltins: true
        }),
        commonjs({
            transformMixedEsModules: true,
            'react-icons': ['__assign']
        }),
        typescript({
            useTsconfigDeclarationDir: false,
            tsconfigOverride: {
                exclude: [
                    "**/*.test.ts",
                    "**/*.test.tsx",
                    "**/*.spec.ts",
                    "**/*.spec.tsx",
                    "**/*.d.ts",
                    "**/*.d.tsx",
                    "**/*.stories.tsx",
                    "**/*.stories.ts"
                ]
            }
        }),
        postcss({
            extensions: ['.css']
        })
    ]
};