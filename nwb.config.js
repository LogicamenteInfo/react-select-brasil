module.exports = {
  type: 'react-component',
  npm: {
    cjs: false,
    esModules: true,
    umd: false,
  },
  webpack: {
    extra: {
      entry: "./src/index.ts",
      resolve: {
        extensions: [".js", ".ts", ".tsx"],
      },
      module: {
        rules: [
          { test: /\.tsx?$/, loader: "ts-loader" },
        ],
      },
    }
  },
}
