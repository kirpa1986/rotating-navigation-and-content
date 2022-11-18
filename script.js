const unsplashApiKey = "W4Ve29x57Bt3IJ6C7M8k1ywiPEueoYlfZVjQnEHeAb4";
const circle = document.querySelector('.circle');

function getUrl(endpoint, args) {
  endpoint += `?client_id=${unsplashApiKey}`;
  args.forEach((arg) => (endpoint += "&" + arg));
  return endpoint;
}

const picturesUrl = getUrl("https://api.unsplash.com/photos/random/", [
  "orientation=portrait",
  "topics=6sMVjTLSkeQ",
]);

fetch(picturesUrl)
  .then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    } else {
      return res;
    }
  })
  .then((resp) => resp.json())
  .then((picture) => {
    document.querySelector("head").innerHTML += `
        <style>
        .content::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: 0.4;
            background: url("${picture["urls"]["regular"]}") no-repeat center center/cover;
        }
        </style>
        `;
    console.log(document.querySelector("head"));
  });


document.querySelector('.open').addEventListener('click', (e) => {

    document.querySelector('.container').classList.add('rotated');
    document.querySelector('nav').classList.add('show-nav');
})

document.querySelector('.close').addEventListener('click', (e) => {

    document.querySelector('.container').classList.remove('rotated');
    document.querySelector('nav').classList.remove('show-nav');
})