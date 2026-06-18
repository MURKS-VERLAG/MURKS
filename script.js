const data={romane:[{image:"assets/books/sketch-good-bad-junkie.png",alt:"Skizze The Good, The Bad and The Junkie",title:"THE GOOD,<br>THE BAD AND<br>THE JUNKIE",titleClass:"red multiline",text:"Ein Klinikroman über Angst, Schuld, Kontrollverlust und die Menschen, die bleiben, wenn eigentlich nichts mehr geht. Düster, ehrlich und trotzdem nicht ohne Hoffnung.",link:"the-good-the-bad-and-the-junkie.html"},{image:"assets/books/sketch-ruinen.png",alt:"Skizze Von Ruinen und Dingen, die kaputtgehen",title:"VON RUINEN<br>UND DINGEN,<br>DIE KAPUTTGEHEN",titleClass:"purple multiline",text:"Prequel und Sequel zugleich: Gastro, Krise, Beziehungen und der Versuch, aus den Trümmern eine Geschichte zu bauen, die nicht nur kaputtgeht.",link:"ruinen-und-dinge.html"}],comics:[{image:"assets/books/sketch-die-saecke.png",alt:"Skizze Die Säcke",title:"Die Säcke",titleClass:"white",text:"Willkommen in Sackingen: einer Stadt voller Säcke, Abgründe, Wortspiele und Figuren, die sehr überzeugt davon sind, normal zu sein. Funktioniert eigenständig, belohnt aber alle, die tiefer graben.",link:"die-saecke-buch.html"}]};const state={romane:0,comics:0};function renderSlider(name){const slider=document.querySelector(`[data-slider="${name}"]`);if(!slider)return;const slide=slider.querySelector(".book-slide");const item=data[name][state[name]];slide.classList.add("fade");window.setTimeout(()=>{slide.querySelector(".book-sketch").src=item.image;slide.querySelector(".book-sketch").alt=item.alt;const title=slide.querySelector(".book-title");title.innerHTML=item.title;title.className=`book-title ${item.titleClass}`;slide.querySelector(".book-copy p").textContent=item.text;slide.querySelector(".book-copy .button").href=item.link;slide.classList.remove("fade")},180)}document.querySelectorAll(".book-slider").forEach(slider=>{const name=slider.dataset.slider;slider.querySelectorAll(".arrow").forEach(button=>{button.addEventListener("click",()=>{const direction=Number(button.dataset.direction);const total=data[name].length;state[name]=(state[name]+direction+total)%total;renderSlider(name)})})});const menuToggle=document.querySelector(".menu-toggle");const navLinks=document.querySelector(".nav-links");if(menuToggle&&navLinks){menuToggle.addEventListener("click",()=>{navLinks.classList.toggle("open")})}

const wikiSearch = document.querySelector("#wikiSearch");
if (wikiSearch) {
  wikiSearch.addEventListener("input", () => {
    const q = wikiSearch.value.toLowerCase().trim();
    document.querySelectorAll(".wiki-article").forEach(article => {
      const hay = (article.textContent || "").toLowerCase();
      article.style.display = hay.includes(q) ? "" : "none";
    });
  });
}


// SACKIPEDIA SINGLE ARTICLE FIX
(function(){
  const buttons = document.querySelectorAll(".wiki-entry-link");
  const articles = document.querySelectorAll(".wiki-article");
  const search = document.querySelector("#wikiSearch");
  if (!buttons.length || !articles.length) return;

  function showArticle(id) {
    articles.forEach(a => a.classList.toggle("active", a.id === id));
    buttons.forEach(b => b.classList.toggle("active", b.dataset.target === id));
    if (history.replaceState) history.replaceState(null, "", "#" + id);
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => showArticle(btn.dataset.target));
  });

  document.querySelectorAll(".wiki-link[data-wiki-target]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      showArticle(link.dataset.wikiTarget);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  if (location.hash && document.querySelector(location.hash + ".wiki-article")) {
    showArticle(location.hash.slice(1));
  } else if (buttons[0]) {
    showArticle(buttons[0].dataset.target);
  }

  if (search) {
    search.addEventListener("input", () => {
      const q = search.value.toLowerCase().trim();
      buttons.forEach(btn => {
        const match = btn.textContent.toLowerCase().includes(q);
        btn.style.display = match ? "" : "none";
      });
    });
  }
})();
