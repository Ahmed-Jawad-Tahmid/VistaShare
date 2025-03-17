import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getPost, getAllUsers, getComments, getGroup, getGroupPosts, getUserGroups, getUserId, getUserName, verifyCredentials } from './dataGetters';
const fetchAllData = async () => {
    try {
        const response = await axios.get('/api/test')
        console.log("fetched data: ")
        console.log(response.data.data);
        return response.data.data; 
    } catch (error){
        console.error('Failed data request', error);
        return null
    }
}


const TestPage = () => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [testPost, setPost] = useState([]);
  const [testComments, setComments] = useState([]);
  const [testName, setName] = useState([]);
  const [testGroup, setGroup] = useState([]);
  const [testGroupPosts, setGroupPosts] = useState([]);
  const [testUserGroups, setUserGroups] = useState([]);
  const [testAuth, setAuth] = useState(null);
  const [testUid, setUid] = useState(null);
  const [testUsers, setUsers] = useState([]); 

  useEffect(() => {
    const fetch = async () =>{
        try {
            const response = await fetchAllData();
            const tuple = await getPost('26');
            const comments = await getComments('26');
            const name = await getUserName('1');
            const group = await getGroup("Adventure Seekers");
            const groupPosts = await getGroupPosts("Adventure Seekers");
            const userGroups = await getUserGroups("1");
            const auth = await verifyCredentials("John Doe", "password1234")
            const uid = await getUserId("John Doe");
            const users = await getAllUsers();

            setData(response);
            setPost(tuple);
            setComments(comments);
            setName(name);
            setGroup(group);
            setGroupPosts(groupPosts);
            setUserGroups(userGroups);
            setAuth(auth);
            setUid(uid);
            setUsers(users);


            setLoading(false);

            console.log("returned data: ")
            console.log(data);
            console.log(response);
            
            console.log("the data is an array: ");
            console.log(Array.isArray(response));
            console.log(testGroupPosts);

        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }
    fetch();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
        <h2> Test Post</h2>
        {JSON.stringify(testPost)}
        <h2> Test Comments</h2>
        {JSON.stringify(testComments)}
        <h2> Test name by id</h2>
        {JSON.stringify(testName)}
        <h2> Test group by name</h2>
        {JSON.stringify(testGroup)}
        <h2> Test group posts</h2>
        {JSON.stringify(testGroupPosts)}
        <h2> Test user groups</h2>
        {JSON.stringify(testUserGroups)}
        <h2> Test user auth</h2>
        {JSON.stringify(testAuth)}
        <h2> Test uid from name</h2>
        {JSON.stringify(testUid)}
        <h2> Test all users</h2>
        {JSON.stringify(testUsers)}
      <h1>All Database Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {JSON.stringify(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestPage;

