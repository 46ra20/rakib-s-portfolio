import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useCallback } from "react";
import Home from "./Pages/Home/Home/Home";

import LayOut from "./Pages/LayOut/LayOut";
import Blog from "./Pages/Blog/Blog"
import AboutMe from "./Pages/Home/AboutMe/AboutMe";
import ProjectDetails from "./Pages/Home/Projects/ProjectDetails"
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

import './App.css';
import "./output.css"

function App() {
  const router = createBrowserRouter(
    [
      {
        path:"/",
        element:<LayOut/>,
        children:[
          {
            path:"/",
            element:<Home/>
          }
          ,
          {
            path:"/home",
            element:<Home/>
          },
          {
            path:"/blog",
            element: <Blog/>
          },
          {
            path:"/home#blog",
            element:<AboutMe/>
          },
          {
            path:"/project/:id",
            loader: async ({ params }) => fetch(`data.json/${params.id}`),
            element: <ProjectDetails></ProjectDetails>
          }
        ]
      }
    ]
  )

  const particlesInit = useCallback(async engine => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
      // await console.log(container);
  }, []);

  return (
    <div className="App">
      <RouterProvider router={router} />
      <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 1,
                        },
                        repulse: {
                            distance: 100,
                            duration: 5,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#fffff1",
                    },
                    links: {
                        color: "#fffff1",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1000,
                        },
                        value: 20,
                    },
                    opacity: {
                        value: 0.1,
                    },
                    shape: {
                        type: "triangle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    </div>
  );
}

export default App;
