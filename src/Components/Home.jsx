/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Navbar'
import data from './data'
import BlogCard from './BlogCard'
import "./Home.css"

const Home = () => {
    return (
        <div className="Home">


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

                {data.map(items => {
                    return (
                        <div key={items.id} >
                            <BlogCard pic={items.image} id={items.id} date={items.date} title={items.desc} />
                        </div>
                    )
                })}



            </section>

        </div>
    )
}

export default Home