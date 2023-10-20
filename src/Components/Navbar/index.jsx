// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-scroll";
import "./index.css";

export function Navbar() {
    const content = < >
        <div className="">
            <ul>
                <Link to="home">
                    <li>Home</li>
                </Link>

                <Link to="projects">
                    <li>Projetos</li>
                </Link>

                <Link to="about">
                    <li>Quem Somos?</li>
                </Link>

                <Link to="blog">
                    <li>Blog</li>
                </Link>
               
            </ul>
        </div>
    </>
    return(
        <nav>
            <div className="h-100vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1">
                <div className="flex items-center flex-1">
                    <span className="logo">Percept</span>
                </div>
                <div>
                    <div>
                        <ul>
                            <Link to="home">
                                <li>Home</li>
                            </Link>

                            <Link to="projects">
                                <li>Projetos</li>
                            </Link>

                            <Link to="about">
                                <li>Quem Somos?</li>
                            </Link>

                            <Link to="blog">
                                <li>Blog</li>
                            </Link>
                
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};