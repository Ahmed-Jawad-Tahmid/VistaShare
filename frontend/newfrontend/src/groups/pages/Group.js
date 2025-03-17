import { useEffect, useState } from "react";
import GroupPostTile from "../components/GroupPostTile";
import { useNavigate, useParams } from "react-router-dom";
import { getGroup, getGroupPosts } from '../../shared/util/dataGetters';
import React from "react";
import './Group.css';

const Group = () => {
    const params = useParams(); 
    const groupID = params.id;

    const navigate = useNavigate();  
    console.log(groupID);

    const expandCard = (id) => {
        console.log("Expanding " + id);
        navigate(`/groupPost/${id}`);  
    }

    // Get group data
    const [groupData, setGroupData] = useState(null);
    const [groupPosts, setGroupPosts] = useState(null);

    useEffect(() => {
        const fetchGroupData = async () => {
            const fetchedGroup = await getGroup(groupID);
            setGroupData(fetchedGroup);

            const fetchedPosts = await getGroupPosts(groupID);
            setGroupPosts(fetchedPosts);
            console.log(groupPosts);
        }
        fetchGroupData();
    }, [groupID]);

    return (
        <div className="groupPage">
            {groupData === null || groupPosts === null ? (
                <div> Loading...</div>
            ) : (
                <div>
                    {/* Background layer for title and subtitle */}
                    <div className="group-header">
                        <div className="page-title">
                            <h1>{groupData.GroupName}</h1>
                        </div>
                        <div className="page-subtitle">
                            <p>{groupData.Description}</p>
                        </div>
                    </div>

                    <div className="post-list">
                        {groupPosts.map((post) => (
                            <GroupPostTile
                                key={post.PostID}
                                post={post}
                                onExpand={() => expandCard(post.PostID)}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Group;
