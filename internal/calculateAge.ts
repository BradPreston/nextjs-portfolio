/**
 * Calculates the age argument against today's date
 * @param dateString The date to compare today's date against
 * @param includeHalf Add .5 to return value if within 6 months
 * @returns A whole number or a float containing .5 as the decimal value
 */
export default function calculateAge(dateString: string, includeHalf = false): number {
	const today = new Date();
	const compareDate = new Date(dateString);
	let age = today.getFullYear() - compareDate.getFullYear();
	const month = today.getMonth() - compareDate.getMonth();

	// if today is before my compare date, subtract one from age (ex: birthday hasn't happened yet)
	if (month < 0 || (month === 0 && today.getDate() < compareDate.getDate())) {
		age--;
	}

	if (!includeHalf) return age;

	// if today is within 6 months of compare date, add .5 to age
	if (month >= -6 && month <= 0) {
		age += 0.5;
	}

	return age;
}
