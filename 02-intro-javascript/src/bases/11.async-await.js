//const getImagenPromesa = () => new Promise( resolve => resolve('https:') )
//getImagenPromesa().then( console.log );

const getImagen = async() => {

    try {

        const apiKey = 'mSvnB9084axKoZ9qa8WbcMfj1AB8fGc2';
        const http_code = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await http_code.json();
    
        const { url } = await data.images.original;
        const img = document.createElement('img');
        
        img.src = url;
        document.body.append( img );

    } catch(error) {
        // Manejo del error
        console.error(error)
    }

}

getImagen();



