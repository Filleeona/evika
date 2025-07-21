import React, { useState, useEffect } from "react";
import "../styles/Secondary.css";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("src/data/news.json")
      .then((response) => {
        if (!response.ok) throw new Error("Ошибка загрузки новостей");
        return response.json();
      })
      .then((data) => setNews(data))
      .catch((error) => {
        console.error("Не удалось загрузить новости:", error);
        setNews([]);
      });
  }, []);

  return (
    <div id="main">
      <div className="newsMain">
        <div className="newsContainer">
          <div className="newsLabel">
            <h1>Новости</h1>
          </div>
          <article className="post">
            {news.length > 0 ? (
              news.map((item) => (
                <article key={item.id} className="post">
                  <div className="newsItem">
                    <span className="newsDate">{item.date}</span>
                    <h3 className="newsText">
                      <a className="newsLink" href={item.url} target="_blank">
                        {item.title}
                      </a>
                    </h3>
                  </div>
                </article>
              ))
            ) : (
              <p>Загрузка новостей...</p>
            )}
          </article>
        </div>
      </div>
    </div>
  );
};

export default News;
