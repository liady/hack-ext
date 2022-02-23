import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import replace from "rollup-plugin-replace";

export default {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "cjs",
    sourcemap: true,
  },
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/env", "@babel/preset-react"],
    }),
    commonjs(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],
};
