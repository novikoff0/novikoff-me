type Mods = Record<string, string | boolean>

export function classNames(
	cls: string,
	mods: Mods = {},
	additional: string[] = []
) {
	return [
		cls,
		...Object.entries(mods)
			.filter(([key, value]) => Boolean(value))
			.map(([key]) => key),
		...additional.filter(Boolean)
	].join(' ')
}
