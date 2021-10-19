const contentText = document.querySelector(".content-text");
const btns = document.querySelectorAll(".button");
const content = document.querySelector(".content");
const btn = document.querySelector(".btn");

content.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
  }
});

function getData() {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => {
      let author = data.results;
      author.forEach((lists) => {
        btns.forEach((btn) => {
          btn.addEventListener("click", (e) => {
            const text = e.currentTarget.innerText;
            if (text === "Name") {
              contentText.innerHTML = `<img src="${lists.picture.large}" alt="${lists.img}" class="img">
              <div class="content-text">
                <span class="title">Name</span>
                <p class="text">${lists.name.first} ${lists.name.last}</p>
              </div>
              `;
            }
            if (text === "Mail") {
              contentText.innerHTML = `<img src="${lists.picture.large}" alt="${lists.img}" class="img">
              <div class="content-text">
                <span class="title">Mail</span>
                <p class="text">${lists.email}</p>
              </div>
              `;
            }
            if (text === "Age") {
              contentText.innerHTML = `<img src="${lists.picture.large}" alt="${lists.img}" class="img">
              <div class="content-text">
                <span class="title">Age</span>
                <p class="text">${lists.registered.age}</p>
              </div>
              `;
            }
            if (text === "Country") {
              contentText.innerHTML = `<img src="${lists.picture.large}" alt="${lists.img}" class="img">
              <div class="content-text">
                <span class="title">Country</span>
                <p class="text">${lists.location.country}</p>
              </div>
              `;
            }
            if (text === "Number") {
              contentText.innerHTML = `<img src="${lists.picture.large}" alt="${lists.img}" class="img">
              <div class="content-text">
                <span class="title">Number</span>
                <p class="text">${lists.phone}</p>
              </div>
              `;
            }
            if (text === "Password") {
              contentText.innerHTML = `<img src="${lists.picture.large}" alt="${lists.img}" class="img">
              <div class="content-text">
                <span class="title">Password</span>
                <p class="text">${lists.login.password}</p>
              </div>
              `;
            }
          });
        });
        contentText.innerHTML = `<img src="${lists.picture.large}" alt="${lists.img}" class="img">
        <div class="content-text">
          <span class="title">Name</span>
          <p class="text">${lists.name.first} ${lists.name.last}</p>
        </div>
        `;
      });
    });
}

getData();
