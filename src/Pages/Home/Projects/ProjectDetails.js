import {useContext} from "react";
// import { useContext } from "react";
import { useLocation } from "react-router-dom";
import Carousel from "../../../Components/Carousel";
import { Context } from "../../UserContext/UserContext";

function ProjectDetails() {
  const {data} = useContext(Context)
  console.log("Data from project details-> ",data)

  const location = useLocation();
  const id = parseInt(location.pathname.split("/")[2]);

  // const [data,setData] = useState([])
  
  // useEffect(() => {
  //   fetch('/data.json')
  //     .then((response) => response.json())
  //     .then((jsonData) => {
  //       setData(jsonData);
  //     })
  //     .catch((error) => console.error('Error fetching JSON:', error));
  // }, []);

  // useEffect(() => {
  //   console.log('Updated data state:', data);
  // }, [data]);

  const {
    name,
    gitHub,
    server,
    live,
    description,
    pictures,
    features,
    technology,
  } = data[id];

  return (
    <div className="container w-4/4 lg:w-8/12 mx-auto mt-20 mb-10">
      <div className="mx-3 md:mx-0">
        <div className="mb-5">
          <Carousel pictures={pictures}></Carousel>
        </div>
        <div className="">
          {name && <h2 className="underline mb-2 text-3xl font-semibold">{name}</h2>}
          <p>
            {gitHub && <a href={gitHub} className="pr-2" target="_blank" rel="noreferrer">Client Side Code</a>}
            {server && <a href={server} className="px-2 border-l-2" target="_blank" rel="noreferrer">Server Side Code</a>}
            {live && <a href={live} className="px-2 border-l-2" target="_noreferrer">Live Site</a>}
          </p>
          {description && (
            <p className="my-5 text-left">
              <span className="font-bold pr-5">
                Description:-
              </span>
              {description}
            </p>
          )}
          
        </div>
      </div>
      <div className="my-10 mx-3 md:mx-0">
        <div className="mr-2 mx-auto">
          {features && (
            <p className="text-xl text-left mr-2">
              <span className="underline">Key Features</span>:-
            </p>

          )}
          <ul className="list-inside list-disc text-left">
            {features && features.map((f, i) => <li className="mb-2" key={i}>{f}</li>)}
          </ul>
        </div>
        <div>
          {technology && (
            <p className="text-xl text-left mb-2"><span className="underline">Usages Technology</span>:-</p>
          )}
          <ul className="list-inside list-disc text-left">
            {technology && technology.map((f, i) => <li className="mb-2" key={i}>{f}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
