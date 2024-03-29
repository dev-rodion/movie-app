import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./detail.scss";

import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import CastList from "./CastList";
import VideoList from "./VideoList";
import Loader from "../../components/loader/Loader";

const Detail = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const { category, id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      setItem(response);
      window.scrollTo(0, 0);
    };
    getDetail();

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [category, id]);

  return (
    <>
      <Loader isLoaded={isLoaded} />

      {item && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item.backdrop_path || item.poster_path
              )})`,
            }}
          ></div>
          <div className="movie-content container mb-3">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    item.poster_path || item.backdrop_path
                  )})`,
                }}
              ></div>
            </div>

            <div className="movie-content__info">
              <div className="title">{item.title || item.name}</div>
              <div className="genres">
                {item.genres &&
                  item.genres.slice(0, 5).map((genre, i) => (
                    <span className="genres__item" key={i}>
                      {genre.name}
                    </span>
                  ))}
              </div>
              <p className="overview">{item.overview}</p>
              <div className="cast">
                <div className="section__header">
                  <h2>Casts</h2>
                </div>
                <CastList id={item.id} />
              </div>
            </div>
          </div>
            <div className="container">
              <div className="section mb-3">
                <VideoList id={item.id} />
              </div>
            </div>
        </>
      )}
    </>
  );
};

export default Detail;
