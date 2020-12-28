//Aquí es para traer nuestros gifs. Nos regresará esa categoría.
export const getGifs = async(category) => {
    // Aquí se hace la petición HTTP, trae los gifs, los procesa y los retorna.
            const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=TlXYXyulB1TS5MmHQsrWvZQvEif7Nl9Z`;
            const resp = await fetch( url );
            const { data } = await resp.json(); //Se obtiene datos en formato Json.
    
            const gifs = data.map( img => { //Con el map, hace que se recorra la data (En la data hay 10 propiedades)
                return {
                    id: img.id,
                    title: img.title,
                    url: img.images?.downsized_medium.url //La ? es por el operador ternario.
                }
            })
    
            //console.log( "Data en general: ", data );
            //console.log( "Gifs ordenados: ", gifs );
    
            return gifs;
    
        }