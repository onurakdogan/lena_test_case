import React, { useState, useEffect, createContext, useCallback } from "react";
import { BASE_URL } from "../utils/Api";

const APIContext = createContext();

const APIContextProvider = ({ children }) => {

  const [error,setError]= useState();
  const [listEnd,setListEnd]= useState(true);
  const [loading,setLoading]= useState(true);
  const [page, setPage] = useState(1);
  const [rowPerPage, setRowPerPage] = useState(10);
  const [users, setUsers] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchData();
  }, [page]);
  
  const fetchData = async () => {
    await fetch(BASE_URL+`?page=${page}&count=${rowPerPage}`)
    .then(response => response.json())
    .then(result => {
        result.result.length != 0 ? 
          setUsers(page === 1 ? result.result :[...users,...result.result])
        :
          setListEnd(false)         
    })
    .catch(err => setError(err))
    .finally(()=> {
          setLoading(false)
    }) 
  }
  
  const getMoreItem = async () => {
      setPage(page+1)
  }

  const getRefresh = useCallback(async() => { 
    setRefreshing(true);
    setPage(1)
    setRefreshing(false);
  },[refreshing]);

  return (
    <APIContext.Provider value={{users,loading,listEnd,error,getMoreItem,refreshing,getRefresh}}>
      {children}
    </APIContext.Provider>
  );
}
 

export { APIContext, APIContextProvider };
