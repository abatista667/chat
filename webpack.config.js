const path = require("path")
module.exports = {
	entry: ["babel-polyfill", "./app/index.jsx"],
	output: {
		filename: "main.js",
		path: __dirname + "/dist"
	},
	plugins: [
	],
	// Enable sourcemaps for debugging webpack's output.
	devtool: "source-map",

	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".jsx", ".js", ".json"]
	},

	module: {
		rules: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{
				test: /\.jsx?$/, loader: "babel-loader"


			},

			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			// { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
			{
				"enforce": "pre",
				"test": /\.js$/,
				"loader": "source-map-loader",
				"exclude": [
					// instead of /\/node_modules\//
					path.join(process.cwd(), 'node_modules')
				]
			},
			{
				test: /\.css$/i,
				use: ['css-loader'],
			},
		]
	},

	// When importing a module whose path matches one of the following, just
	// assume a corresponding global variable exists and use that instead.
	// This is important because it allows us to avoid bundling all of our
	// dependencies, which allows browsers to cache those libraries between builds.
	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	},
};