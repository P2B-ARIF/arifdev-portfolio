declare module "color-thief-browser" {
	class ColorThief {
		getColor(
			img: HTMLImageElement | string,
			quality?: number,
		): [number, number, number];

		getPalette(
			img: HTMLImageElement | string,
			colorCount?: number,
			quality?: number,
		): Array<[number, number, number]>;
	}

	const colorThief: ColorThief;
	export default colorThief;
}
