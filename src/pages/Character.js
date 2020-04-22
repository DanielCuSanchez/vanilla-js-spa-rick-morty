import getData from '../utils/getData'
import getHash from '../utils/getHash'
const Character = async () => {
    //Trae el id de la lógica de routes
    const hash = await getHash()
    console.log(hash)
    const character = await getData(hash)
    const view = `
        <div class="Characters-inner">
            <article class="Characters-card"> 
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
            </article>
            <article class="Characters-card"> 
                <h3>Episodio:<span>${character.episode.length}</span> </h3>
                <h3>Status: <span>${character.status}</h3>
                <h3>Especies:<span>${character.species}</h3>
                <h3>Genero:<span>${character.gender}</h3>
                <h3>Origen:<span>${character.origin.name}</h3>
            </article>
        </div>
    `
    return view
}
export default Character