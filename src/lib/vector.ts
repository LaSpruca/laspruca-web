const G = 0.001;

export type Vector = [number, number];

export function magnitude([x, y]: Vector): number {
	return Math.sqrt(x * x + y * y);
}

export function gravity(s1: Vector, m1: number, s2: Vector, m2: number): Vector {
	const r = sum(s2, mul(s1, -1));

	const rMag = magnitude(r);
	const rDir = mul(r, 1 / rMag);

	if (rMag == 0) {
		return [0, 0];
	}

	const f = G * ((m1 * m2) / rMag);
	const gVec = mul(rDir, f);

	return gVec;
}

export function clampVector(
	[x1, y1]: Vector,
	min: Vector | number = -1,
	max: Vector | number = 1
): Vector {
	const [minX, minY] = Array.isArray(min) ? min : [min, min];
	const [maxX, maxY] = Array.isArray(max) ? max : [max, max];

	return [minX < x1 ? (x1 < maxX ? x1 : maxX) : minX, minY < y1 ? (y1 < maxY ? y1 : maxY) : minY];
}

export function randomVector(start: Vector | number = -1, end: Vector | number = 1): Vector {
	const [startX, startY] = Array.isArray(start) ? start : [start, start];
	const [endX, endY] = Array.isArray(end) ? end : [end, end];

	return [Math.random() * (endX - startX) + startX, Math.random() * (endY - startY) + startY];
}

export function sum([x1, y1]: Vector, b: Vector | number): Vector {
	if (Array.isArray(b)) {
		return [x1 + b[0], y1 + b[1]];
	}

	return [x1 + b, y1 + b];
}

export function mul([x1, y1]: Vector, b: Vector | number): Vector {
	if (Array.isArray(b)) {
		return [x1 * b[0], y1 * b[1]];
	}
	return [x1 * b, y1 * b];
}
