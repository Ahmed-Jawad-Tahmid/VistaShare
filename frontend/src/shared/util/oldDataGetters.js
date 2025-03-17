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
    const db = await fetchDataFromDummy();
    if (!db) return null; // Handle fetch failure
    return db.posts.find(post => post.id === postid) || null; // Return null if no post found
};

// Function to get comments for a specific post
const getComments = async (postid) => {
    const db = await fetchDataFromDummy();
    if (!db) return [];

    console.log("id: " + postid);
    console.log("found comments:");
    
    console.log(db.comments.filter(comment => comment.postid === postid));
    
    return db.comments.filter(comment => comment.postid === postid) || [];
};

// Function to get a username by user ID
const getUserName = async (userid) => {
    const db = await fetchDataFromDummy();
    if (!db) return null;
    const user = db.members.find(member => member.memberid === userid);
    return user ? user.username : null;
};

// Function to get a group by ID
const getGroup = async (groupid) => {
    const db = await fetchDataFromDummy();
    console.log(groupid);
    if (!db) return null;
    console.log(db.groups.find(group => group.id === groupid))
    return db.groups.find(group => group.id === groupid) || null;
};

const getGroupPosts = async (groupid) => {
    const db = await fetchDataFromDummy(); 
    if (!db) return null; 

    return db.posts.filter(post => post.groupid === groupid);

}

// Function to get all groups a user is part of
const getUserGroups = async (userid) => {
    console.log("Fetching user groups")
    const db = await fetchDataFromDummy();
    console.log(db);
    console.log(db.groups);
    console.log("Fetching user groups for " + userid); 
    console.log(typeof(userid));
    userid = parseInt(userid, 10); // Convert string to number

    
    if (!db) return [];

    const uGroups = db.groups.filter(group => group.members.includes(userid));
    console.log(uGroups);
    return uGroups || [];
};

const verifyCredentials = async (email, password) => {

    const db = await fetchDataFromDummy(); 
    console.log(email);
    console.log(password);
    console.log(typeof(email));
    console.log(typeof(password));
    console.log(db.members.find(member => member.email === email && member.password === password));

    return db.members.find(member => member.email === email && member.password === password) !== undefined;
}


const getUserId = async (email) => {
    const db = await fetchDataFromDummy(); 
    const thismember = db.members.find(member => member.email === email);
    
    return thismember.memberid;
}

const getAllUsers = async() => {
    const db = await fetchDataFromDummy();
    return db.members; 
}
// Exports
export default getPost;
export { getComments, getUserName, getGroup, getUserGroups, verifyCredentials, getUserId, getAllUsers, getGroupPosts};
