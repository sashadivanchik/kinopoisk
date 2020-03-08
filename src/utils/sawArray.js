export const sawArray = (array, start, end) => {
    if (!array.length) {
        return 'Список фильмов отсутствует';
    }
    return array.slice(start, end);
}