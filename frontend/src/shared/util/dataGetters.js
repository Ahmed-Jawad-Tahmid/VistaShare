import axios from 'axios';

const fetchDataFromDummy = async () => {
    try {
        const response = await axios.get('/DanielY2711/dummydb/db');
        console.log(response.data);
        return response.data; // Return the data after fetching
    } catch (error) {
        console.error('Failed data request', error);
        return null; // Return null or handle error accordingly
    }
};

// Function to get a single post by ID
const getPost = async (postid) => {
    console.log(`getting post ${postid}`)
    try {
        const post = await axios.get(`/api/post/${postid}`);
        console.log(post.data);
        return post.data.data; 
    } catch (error){
        console.error('Failed data request', error);
        return null; // Return null or handle error accordingly
    }

};

// Function to get comments for a specific post
const getComments = async (postid) => {
    
    console.log(`getting commets on post ${postid}`)
    try {
        const comments = await axios.get(`/api/comment/${postid}`);
        console.log(comments.data.data);
        return comments.data.data || []; 
    } catch (error){
        console.error('Failed data request', error);
        return null; // Return null or handle error accordingly
    }
};

// Function to get a username by user ID
const getUserName = async (userid) => {
    
    console.log(`getting name for uid ${userid}`)
    try {
        const name = await axios.get(`/api/user/getName/${userid}`);
        console.log(name.data.data[0].Name);
        return name.data.data[0].Name; 
    } catch (error){
        console.error('Failed data request', error);
        return null; // Return null or handle error accordingly
    }
    
};

// Function to get a group by name
const getGroup = async (gname) => {
    console.log(`getting group for name ${gname}`)
    try {
        const name = await axios.get(`/api/group/${gname}`);
        console.log(name.data);
        return name.data.data; 
    } catch (error){
        console.error('Failed data request', error);
        return null; // Return null or handle error accordingly
    }
};

// Function to get group posts by group name
const getGroupPosts = async (gname) => {
    
    console.log(`getting group for name ${gname}`)
    try {
        const posts = await axios.get(`/api/group/posts/${gname}`);
        console.log(posts.data);
        return posts.data.data; 
    } catch (error){
        console.error('Failed data request', error);
        return null; // Return null or handle error accordingly
    }
    
}

// Function to get all groups a user is part of
const getUserGroups = async (userid) => {

    console.log(`getting groups for user ${userid}`)
    try {
        const groups = await axios.get(`/api/group/userG/${userid}`);
        console.log(groups.data);
        return groups.data.data; 
    } catch (error){
        console.error('Failed data request', error);
        return null; // Return null or handle error accordingly
    }
}

const getUserNotGroups = async (userid) => {

    console.log(`getting available to join groups for user ${userid}`)
    try {
        const groups = await axios.get(`/api/group/notUserG/${userid}`);
        console.log(groups.data);
        return groups.data.data; 
    } catch (error){
        console.error('Failed data request', error);
        return null; // Return null or handle error accordingly
    }
}

const verifyCredentials = async (email, password) => {

    console.log(`getting auth for user ${email}`)
    try {
        const user = await axios.get(`/api/user/${email}/${password}`);
        console.log(Object.keys(user.data.data));

        return Object.keys(user.data.data).length > 0; 
    } catch (error){
        console.error('Failed data request', error);
        return false; // Return null or handle error accordingly
    }
}


const getUserId = async (email) => {
    console.log(`getting uid for user ${email}`)
    try {
        const user = await axios.get(`/api/user/getUid/${email}`);
        console.log(user.data.data[0].MemberID);
        return user.data.data[0].MemberID; 

    } catch (error){
        console.error('Failed data request', error);
        return null; // Return null or handle error accordingly
    }
}

const getAllUsers = async() => {
    console.log(`getting all users`)
    try {
        const users = await axios.get(`/api/user/`);
        console.log(users.data.data);

        return users.data.data; 
    } catch (error){
        console.error('Failed data request', error);
        return null; // Return null or handle error accordingly
    }
}

// All Locations
const getAllLocations = async() => {
    console.log('getting all locations');
    try {
        const users = await axios.get(`/api/location/`);
        console.log(users.data.data);

        return users.data.data; 
    } catch (error){
        console.error('Failed data request', error);
        return null; // Return null or handle error accordingly
    }
}

// All Cities
const getAllCities = async() => {
    console.log('getting all locations');
    try {
        const users = await axios.get(`/api/city/`);
        console.log(users.data.data);

        return users.data.data; 
    } catch (error){
        console.error('Failed data request', error);
        return null; // Return null or handle error accordingly
    }
}




// Location reviews based on location
const getLocationReviews = async(id) => {
    console.log(`getting all location reviews for ${id}`);
    try {
        const reviews = await axios.get(`/api/post/location/${id}`);
        console.log(reviews.data.data);
        return reviews.data.data; 
    } catch (error){
        console.error('Failed data request', error);
        return null; // Return null or handle error accordingly
    }
}

const getLocation = async(id) =>{
    console.log(`getting locations by ${id}`);
    try {
        const reviews = await axios.get(`/api/location/${id}`);
        console.log(reviews.data.data);

        return reviews.data.data; 
    } catch (error){
        console.error('Failed data request', error);
        return null; // Return null or handle error accordingly
    }
}

const getCity = async(id) =>{
    console.log(`getting city by ${id}`);
    try {
        const reviews = await axios.get(`/api/city/${id}`);
        console.log(reviews.data.data);

        return reviews.data.data; 
    } catch (error){
        console.error('Failed data request', error);
        return null; // Return null or handle error accordingly
    }
}

// City guides based on city
const getCityGuides = async(id) => { 
    console.log(`getting all location reviews for ${id}`);
    try {
        const reviews = await axios.get(`/api/post/city/${id}`);
        console.log(reviews.data.data);
        return reviews.data.data; 
    } catch (error){
        console.error('Failed data request', error);
        return null; // Return null or handle error accordingly
    }
}

// Function to get all posts by a user ID
const getPostsByUserId = async (userId) => {
    console.log(`getting posts for user ${userId}`);
    
    try {
        const response = await axios.get(`/api/user/p/post/${userId}`);
        console.log(response.data);
        return response.data.data || [];  // Assuming response has data in 'data' field
    } catch (error) {
        console.error('Failed to fetch posts', error);
        return null; // Return null or handle error accordingly
    }
};

const getTravelLogsByUserId = async (userId) => {
    console.log(`Getting travel logs for user ${userId}`);
    
    try {
        const response = await axios.get(`/api/user/l/logs/${userId}`);
        console.log(response.data);
        return response.data.data || [];  // Assuming response has data in 'data' field
    } catch (error) {
        console.error('Failed to fetch travel logs', error);
        return null; // Return null or handle error accordingly
    }
};

// Exports
export { getComments, getUserName, getPost, getUserNotGroups, getGroup, getUserGroups, verifyCredentials, getUserId, getAllUsers, getGroupPosts, getAllLocations, getLocationReviews, getLocation, getAllCities, getCity, getCityGuides, getPostsByUserId, getTravelLogsByUserId};