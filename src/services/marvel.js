import api from './api'


class MarvelService {
    static searchCharaters(name,page) {
        return api.get('/marvel/character', {
            query: {
                name,
                page
            }
        })
    }

     static getCharacter(id) {
         return api.get(`/marvel/character/${id}`)
     }

     static getUserFavoritesCharacters(){
         return api.get('/users/current/character/favorites')
     }

     static favoriteCharacter(id,favorited) {
         return api.post(`users/current/character/${id}/favorite`, {favorited})
     }
     

     static searchComics(name,page) {
        return api.get('/marvel/comic', {
            query: {
                name,
                page
            }
        })
    }

     static getComic(id) {
         return api.get(`/marvel/comic/${id}`)
     }

     static getUserFavoritesComics(){
         return api.get('/users/current/comic/favorites')
     }

     static favoriteComic(id,favorited) {
         return api.post(`users/current/comic/${id}/favorite`, {favorited})
     }

}



export default MarvelService