const apiKey = 'mSvnB9084axKoZ9qa8WbcMfj1AB8fGc2';

const http_code = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

http_code
    .then( resp => resp.json() )
    .then( ({ data }) => {// Desestructuración del campo ({ data })
        const { url } = data.images.original; // url entre {} para desestructurar

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    })
    .catch( console.warn );