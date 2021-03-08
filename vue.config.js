module.exports = {
	runtimeCompiler: true,
	css: {
		sourceMap: true,
		loaderOptions: {
			scss: {
				prependData: `
          @import "@/assets/scss/index.scss";
        `
			}
		}
	}
};
