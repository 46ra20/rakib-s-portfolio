import React from "react";
import { Link } from "react-router-dom";

function Project({ project }) {
  const { id, name, gitHub, server, live, description, pictures } = project;
  return (
    <div className="card glass w-96 mx-auto">
      <figure>
        <img
          src={pictures}
          alt={description}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          <a
            href={live}
            target={"_blank"}
            rel="noreferrer"
            className="pr-2"
          >
            Live 
          </a>
           |
          <a href={gitHub} target={"_blank"} rel="noreferrer" className="pl-2 pr-2">
             Frontend Code
          </a>
          |
          <a
            href={server}
            target={"_blank"}
            rel="noreferrer"
            className="pl-2"
          >
            Backend Code
          </a>
        </p>
        <div className="card-actions justify-end">
          {/* <button className="btn btn-primary">Learn now!</button> */}
          <div>
                   <Link to={`/project/${id}`}><button className='btn btn-primary '>Explore More</button></Link>            
          </div>
        </div>
      </div>
    </div>
    // <div className="card bg-base-100 shadow-xl">
    //     <figure className="px-10 pt-10">
    //         <img
    //         src={pictures}
    //         alt="themnal"
    //         className="rounded-xl" />
    //     </figure>
    //     <div className="card-body items-center text-center">
    //         <h2 className="card-title">{name}</h2>
    //         <p><a href={live} target="_blank" rel='norelation'>Live</a> | {gitHub} | {server}</p>
    //         <div className="card-actions">
    //         <button className="btn btn-primary">Buy Now</button>
    //         </div>
    //     </div>
    // </div>
    // <div>
    //     <div className="card mx-3 md:mx-0 bg-base-100 shadow-xl image-full">
    //         {
    //             pictures[0] && <figure>
    //                 <img src={pictures[0]} alt="Shoes" />
    //             </figure>
    //         }
    //         <div className="card-body items-center align-middle justify-center">
    //             {
    //                 name && <h2 className="card-title">{name}</h2>
    //             }
    //             {
    //                 description && <p className="flex-grow-0">
    //                 {description.slice(0,100)}
    //             </p>
    //             }
    //             <div className="card-actions justify-around">
    //                 {
    //                     gitHub && <a
    //                         href={gitHub}
    //                         target={"_blank"}
    //                         rel="noreferrer"
    //                         className=""
    //                     >
    //                         GitHub
    //                     </a>
    //                 }
    //                 {
    //                     server && <a
    //                         href={server}
    //                         target={"_blank"}
    //                         rel="noreferrer"
    //                         className="border-l-2 pl-2"
    //                     >
    //                         Server Side Code
    //                     </a>
    //                 }
    //                 {
    //                     live && <a
    //                         href={live}
    //                         target={"_blank"}
    //                         rel="noreferrer"
    //                         className="border-l-2 pl-2"
    //                     >
    //                         Live Side
    //                     </a>
    //                 }
    //             </div>
    //             <div>
    //                 <Link to={`/project/${id}`}><button className='btn btn-accent '>Explore More</button></Link>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  );
}

export default Project;
