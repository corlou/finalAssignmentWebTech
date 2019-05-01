class spinner {
	constructor(canvas, options) {
		const defaultOptions = {
			size: 40,
			weight: 7,
			length: 100,
			spinspeed: 50,
			pause: false,
			colors: { first: "#03A9F4", second: "#E0F7FA" }
		};
		this.options = Object.assign({}, defaultOptions, options);
		this.canvas = canvas;
		this.context = this.canvas.getContext("2d");
		this.render();
	}

	radianAngle(angle) {
		return Math.PI / 180 * angle;
	}

	frame(angle) {
		let c = this.canvas,
			o = this.options,
			ctx = this.context;

		c.width = o.size + o.weight;
		c.height = o.size + o.weight;

		ctx.lineWidth = o.weight;
		ctx.lineCap = "round";

		// shadow
		ctx.strokeStyle = o.colors.second;
		ctx.beginPath();
		ctx.arc(
			o.size / 2 + ctx.lineWidth / 2,
			o.size / 2 + ctx.lineWidth / 2,
			o.size / 2,
			0,
			360,
			false
		);
		ctx.stroke();
		// loading-bar
		ctx.strokeStyle = o.colors.first;
		ctx.beginPath();
		ctx.arc(
			o.size / 2 + ctx.lineWidth / 2,
			o.size / 2 + ctx.lineWidth / 2,
			o.size / 2,
			this.radianAngle(angle - o.length),
			this.radianAngle(angle),
			false
		);
		ctx.stroke();
	}

	clear() {
		let c = this.canvas,
			o = this.options,
			ctx = this.context;

		ctx.clearRect(0, 0, c.width, c.height);
	}

	render() {
		let spinner = this,
			angle = 0;

		setInterval(() => {
			if (!spinner.options.pause) {
				this.clear();
				this.frame(angle);
				angle += spinner.options.spinspeed / 10;
				angle >= 360 && 0; // jshint ignore:line
			}
		}, 10);
	}
}




let loading = new spinner(document.querySelector("#loading"), {
	/* options of spinner */
});

// You can easily change some options
loading.options.spinspeed = 60;
loading.options.length = 50;
loading.options.weight = 4;
loading.options.colors = {
	first: "orange",
	second: "black"
};
