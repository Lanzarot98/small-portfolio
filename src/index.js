const $links = document.getElementById('links');
const $name = document.querySelector('h1');

const data = {
    name: "Luis Miguel Rojas Franco",
    nickname: "lanzarot",
    description: "Biochemical Engineer and Web Developer in training, #JavaScript #React #Web3",
    avatar: "",
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/LuisMig51309270",
        username: "",
      },
      {
        name: "Instagram",
        url: "https://instagram.com/",
        username: "",
      },
    ],
    links: [
      {
        name: "ZoluMovies Project",
        url: "https://lanzarot98.github.io/movieApp/",
        color: "red",
        emoji: "🎥",
      },
      {
        name: "GifExpertApp Project",
        url: "https://lanzarot98.github.io/react-gif-expert-app/",
        color: "yellow",
        emoji: "👾",
      },
      {
        name: "CatsApp Project",
        url: "https://lanzarot98.github.io/CatsApp/",
        color: "blue",
        emoji: "😺",
      },
    ],
    footer: "Made with Love on Colombia",
  };

const main = () => {
    let name = document.createTextNode(data?.name);
    let links = data?.links?.map((link) => {
        return `<div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
        <a class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
          href="${link.url}" target="_blank">
          ${link.name}
        </a>
        <span>${link.emoji}</span>
      </div>`;
    }).join(''); // esto retorna un nuevo array de strings, entonces para que no tenga esas comillas hacemos el .join para que no tenga las comillas
    let newItem = document.createElement("section");
    newItem.innerHTML = links;
    $links.appendChild(newItem);
    $name.appendChild(name);
}

main();


