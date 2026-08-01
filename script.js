async function loadNews() {
  const newsGrid = document.querySelector(".news-grid");

  const { data, error } = await supabase
    .from("news_posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return;
  }

  newsGrid.innerHTML = "";

  data.forEach(news => {
    newsGrid.innerHTML += `
      <div class="card">
        <img src="${news.image_url}" alt="${news.title}">
        <div class="badge">📰 Saudi Bangla Update</div>
        <h2>${news.title}</h2>
        <p>${news.content.substring(0,120)}...</p>
        <a href="news.html?id=${news.id}" class="btn">Read More</a>
      </div>
    `;
  });
}

loadNews();
