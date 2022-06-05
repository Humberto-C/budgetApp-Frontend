function findChildren(dancingBrigade) {
	return [...dancingBrigade].sort((a, b) => a.localeCompare(b, 'en', {caseFirst: 'upper'})).join('');
}

console.log(findChildren("TheMitocccchondri"));


// arr.reduce((acc, el) => {
//     if(el.length > acc[0]) {
//         acc[1] = el;
//         acc[0] = el.length;
//     }
//     return acc;
// }, [0 , ''])