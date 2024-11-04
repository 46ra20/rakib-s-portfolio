import React, { createContext, useState,useEffect} from 'react';
export const Context  = createContext();

function UserContext({children}) {
    const [data, setData] = useState({});
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(() => {
            setLoading(true)
            fetch('/data.json')
                .then((response) => response.json())
                .then((jsonData) => {
                    console.log(jsonData)
                    setData(jsonData);
                    setLoading(false)
                })
                .catch((error) => console.error('Error fetching JSON:', error));
        }, 3000);
      },[])
    return (
        <Context.Provider value={{data, setData, loading}}>
            {
                children
            }
        </Context.Provider>
    );
}

export default UserContext;