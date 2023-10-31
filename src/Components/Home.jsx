/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import data from './data'
import BlogCard from './BlogCard'
import "./Home.css"
import axios from 'axios'
// import safeBuffer from 'safe-buffer';


const Home = () => {
    // const [buffer, setBuffer] = useState(safeBuffer.Buffer.alloc(10));


    const [openMenu, setOpenMenu] = useState(false);
    const [articles, setArticles] = useState([]);


    const API_KEY = "a5186a30896b4341a7b4b5bc6fdfa0fb";


    // useEffect(() => {
    //     const fetchArticles = async () => {
    //         const response = await axios.get(
    //             `https://newsapi.org/v2/everything?q=ai&apiKey=${API_KEY}`
    //         );

    //         const articles = response.data.articles;

    //         setArticles(articles);
    //     };

    //     fetchArticles();
    // }, []);


    return (
        <div className={`Home ${openMenu ? 'overlay-open' : ''}`}>


            <div className="home-background">



                <div className="overlay">

                    <Navbar />

                    <div className="home-main-section">

                        <div className="body-headers">

                            <div className="long-rectangle"></div>

                            <h1 className="big-heading">

                                Art pieces made easy accessible for everyone
                            </h1>

                            <h3 className="home-sub-heading">
                                Learn, buy and trade art pieces of your favorite artist around the world by using crypto currencies.
                            </h3>

                            <button className="learn-more-button">
                                Learn more

                            </button>

                        </div>



                    </div>



                </div>
            </div>



            <section className="second-section">

                <h6 className="newest-reads">
                    Newest reads
                </h6>

                <div className="blogs-cards">

                    {data.map(items => {
                        return (
                            <div className='blog-inner' key={items.id} >
                                <BlogCard pic={items.image} id={items.id} date={items.date} title={items.desc} text={items.text} />
                            </div>
                        )
                    })}
                </div>




            </section>

        </div>
    )
}

export default Home