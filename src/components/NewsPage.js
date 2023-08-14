import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import "./NewsPage.css"
const NewsPage=()=>{
    const [news,setNews] = useState([]);

    useEffect(()=>{
        const apiKey="pub_27640bd7cccaec3759ca22f5b4c594414d715"
        Axios.get(`https://newsdata.io/api/1/news?apikey=${apiKey}&q=crypto`)
        .then((res) => {setNews(res.data.results);})
        .catch(err => {console.error(err);});
    },[]);

    return(
        <div className="news-container">
            <h1>Hot headlines of the Crypto World</h1>
            <ul>
                {news.map((article,index)=> (
                    <li key={index}>
                        <div className="news-card">
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                        <a href={article.link} target="_blank" rel="noopener noreferrer">
                            Read more
                        </a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsPage;
