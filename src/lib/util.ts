const pairSeparator = /; */;

export function parseCookies(source: string) {
	return Object.assign(
		{},
		...source
			.split(pairSeparator)
			.map((pair) => {
				let [key, value] = pair.split('=').map((e) => e.trim());

				if (value === undefined) {
					return undefined;
				}

				if (value[0] == '"') {
					value = value.slice(1, -1);
				}

				try {
					return { [key]: decodeURIComponent(value) };
				} catch (ex) {
					return { [key]: value };
				}
			})
			.filter((e) => e !== undefined)
	);
}
