const useGenre = (selectGenre) => {
    if(selectGenre.length<1) return '';

    const genreID = selectGenre.map((g) => g.id);

    return genreID.reduce((acc, current) => acc + ',' + current)

};

export default useGenre;