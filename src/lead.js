import React from "react";
import { Link } from "react-router-dom";
import { leadData } from "./leadData";
import insta from "./images/Insta.svg";
import linkedin from "./images/linkedin.svg";

const Lead = () => {
  return (
    <section className="text-white font-Mulish">
      <div className="w-full">
        <h2 className="font-bold text-center text-2xl pt-5 pb-12">
          EVENT HEADS
        </h2>
      </div>
      <div className="flex flex-col items-center">
        <img
          src={leadData[0].image}
          alt={leadData[0].name}
          className="rounded-full w-48 h-48 object-cover"
        />
        <h3 className="mt-4 font-bold">{leadData[0].name}</h3>
        <ul className="mt-2 flex">
          <li className="pr-8">
            <Link to={leadData[0].igLink} target="_blank" rel="noreferrer">
              <img
                src={insta}
                alt="logo"
                className="rounded-full w-6 h-6 object-cover"
              />
            </Link>
          </li>
          <li>
            <Link to={leadData[0].linkedInLink} target="_blank" rel="noreferrer">
              <img
                src={linkedin}
                alt="logo"
                className="rounded-full w-6 h-6 object-cover"
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap">
        {leadData.slice(1, 4).map((item) => (
          <div
            key={item.name}
            className="w-full md:w-1/3 p-4 flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-full w-48 h-48 object-cover"
            />
            <h3 className="mt-4 font-bold">{item.name}</h3>
            <ul className="mt-2 flex">
              <li className="pr-8">
                <Link to={item.igLink} target="_blank" rel="noreferrer">
                  <img
                    src={insta}
                    alt="logo"
                    className="rounded-full w-6 h-6 object-cover"
                  />
                </Link>
              </li>
              <li>
                <Link to={item.linkedInLink} target="_blank" rel="noreferrer">
                  <img
                    src={linkedin}
                    alt="logo"
                    className="rounded-full w-6 h-6 object-cover"
                  />
                </Link>
              </li>
            </ul>
          </div>
        ))}
      </div>
      <div className="w-full">
        <h2 className="font-bold text-center text-2xl pt-5 pb-12">
          EVENT CO-HEADS
        </h2>
      </div>
      <div className="flex flex-wrap">
        {leadData.slice(4, 8).map((item) => (
          <div
            key={item.name}
            className="w-full md:w-1/4 p-4 flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-full w-48 h-48 object-cover"
            />
            <h3 className="mt-4 font-bold">{item.name}</h3>
            <ul className="mt-2 flex">
              <li className="pr-8">
                <Link to={item.igLink} target="_blank" rel="noreferrer">
                  <img
                    src={insta}
                    alt="logo"
                    className="rounded-full w-6 h-6 object-cover"
                  />
                </Link>
              </li>
              <li>
                <Link to={item.linkedInLink} target="_blank" rel="noreferrer">
                  <img
                    src={linkedin}
                    alt="logo"
                    className="rounded-full w-6 h-6 object-cover"
                  />
                </Link>
              </li>
            </ul>
          </div>
        ))}
      </div>
      <div className="w-full">
        <h2 className="font-bold text-center text-2xl pt-5 pb-12">
          DEPARTMENT HEADS
        </h2>
      </div>
      <div className="flex flex-col items-center">
        <img
          src={leadData[8].image}
          alt={leadData[8].name}
          className="rounded-full w-48 h-48 object-cover"
        />
        <h3 className="mt-4 font-bold">{leadData[8].name}</h3>
        <ul className="mt-2 flex">
          <li className="pr-8">
            <Link to={leadData[8].igLink} target="_blank" rel="noreferrer">
              <img
                src={insta}
                alt="logo"
                className="rounded-full w-6 h-6 object-cover"
              />
            </Link>
          </li>
          <li>
            <Link to={leadData[8].linkedInLink} target="_blank" rel="noreferrer">
              <img
                src={linkedin}
                alt="logo"
                className="rounded-full w-6 h-6 object-cover"
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap">
        {leadData.slice(9, 13).map((item) => (
          <div
            key={item.name}
            className="w-full md:w-1/4 p-4 flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-full w-48 h-48 object-cover"
            />
            <h3 className="mt-4 font-bold">{item.name}</h3>
            <ul className="mt-2 flex">
              <li className="pr-8">
                <Link to={item.igLink} target="_blank" rel="noreferrer">
                  <img
                    src={insta}
                    alt="logo"
                    className="rounded-full w-6 h-6 object-cover"
                  />
                </Link>
              </li>
              <li>
                <Link to={item.linkedInLink} target="_blank" rel="noreferrer">
                  <img
                    src={linkedin}
                    alt="logo"
                    className="rounded-full w-6 h-6 object-cover"
                  />
                </Link>
              </li>
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap">
        {leadData.slice(13, 17).map((item) => (
          <div
            key={item.name}
            className="w-full md:w-1/4 p-4 flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-full w-48 h-48 object-cover"
            />
            <h3 className="mt-4 font-bold">{item.name}</h3>
            <ul className="mt-2 flex">
              <li className="pr-8">
                <Link to={item.igLink} target="_blank" rel="noreferrer">
                  <img
                    src={insta}
                    alt="logo"
                    className="rounded-full w-6 h-6 object-cover"
                  />
                </Link>
              </li>
              <li>
                <Link to={item.linkedInLink} target="_blank" rel="noreferrer">
                  <img
                    src={linkedin}
                    alt="logo"
                    className="rounded-full w-6 h-6 object-cover"
                  />
                </Link>
              </li>
            </ul>
          </div>
        ))}
      </div>
      <div className="w-full">
        <h2 className="font-bold text-center text-2xl pt-5 pb-12">
          WEB DEVELOPMENT TEAM
        </h2>
      </div>
      <div className="flex flex-col items-center">
        <img
          src={leadData[17].image}
          alt={leadData[17].name}
          className="rounded-full w-48 h-48 object-cover"
        />
        <h3 className="mt-4 font-bold">{leadData[17].name}</h3>
        <ul className="mt-2 flex">
          <li className="pr-8">
            <Link to={leadData[17].igLink} target="_blank" rel="noreferrer">
              <img
                src={insta}
                alt="logo"
                className="rounded-full w-6 h-6 object-cover"
                />
              </Link>
            </li>
            <li>
              <Link to={leadData[17].linkedInLink} target="_blank" rel="noreferrer">
                <img
                  src={linkedin}
                  alt="logo"
                  className="rounded-full w-6 h-6 object-cover"
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap">
          {leadData.slice(18, 22).map((item) => (
            <div
              key={item.name}
              className="w-full md:w-1/4 p-4 flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="rounded-full w-48 h-48 object-cover"
              />
              <h3 className="mt-4 font-bold">{item.name}</h3>
              <ul className="mt-2 flex">
                <li className="pr-8">
                  <Link to={item.igLink} target="_blank" rel="noreferrer">
                    <img
                      src={insta}
                      alt="logo"
                      className="rounded-full w-6 h-6 object-cover"
                    />
                  </Link>
                </li>
                <li>
                  <Link to={item.linkedInLink} target="_blank" rel="noreferrer">
                    <img
                      src={linkedin}
                      alt="logo"
                      className="rounded-full w-6 h-6 object-cover"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>
  
        <div className="fixed top-0 -z-20 right-0 w-screen h-screen back"></div>
      </section>
    );
  };
  
  export default Lead;
  