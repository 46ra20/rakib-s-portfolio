import React, { useContext } from "react";
import { Context } from "../../UserContext/UserContext";
import Project from "./Project";

const Projects = () => {
  // const {data} = useContext(Context);
  // console.log(data)
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

  // const [data,setData]=useState([])
  // useEffect(()=>{

  //   fetch('/data.json')
  //       .then((response) => response.json())
  //       .then((jsonData) => {
  //         setData(jsonData);
  //       })
  //       .catch((error) => console.error('Error fetching JSON:', error));
  // },[])

  const {data,loading} = useContext(Context)
  let htmlElement=''
  if(! loading){
    htmlElement = <div id="projects">
                          <div>
                            <h2 className="divider mb-8 text-3xl font-bold">Projects</h2>
                          </div>
                          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                            { 
                              data.map((project) => (
                                <Project project={project} key={project.id} />
                              ))
                            }
                          </div>
                        </div>
  }
  else{
    htmlElement=
    <div>
      <div>
        <h2 className="divider mb-8 text-3xl font-bold">Projects</h2>
      </div>
      <p>Please Wait</p>
    </div>
  }
  return (
    htmlElement
  )
};

export default Projects;
