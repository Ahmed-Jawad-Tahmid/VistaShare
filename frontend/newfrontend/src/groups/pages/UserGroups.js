import React, { useState, useEffect } from 'react';
import GroupItem from '../components/GroupItem';
import './UserGroups.css';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import { getUserGroups, getUserNotGroups } from '../../shared/util/dataGetters';
import { joinGroup } from '../../shared/util/dataSetters';
const UserGroups = () => {
  const { userId } = useParams();
  const [userGroups, setUserGroups] = useState([]);
  const [joinableGroups, setJoinableGroups] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);

  const navigate = useNavigate();

  // Fetch user groups asynchronously using getUserGroups
  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const groups = await getUserGroups(userId);
        setUserGroups(groups || []);
        console.log('User groups fetched:', groups);
      } catch (error) {
        console.error('Error fetching user groups:', error);
        setUserGroups([]);
      }
    };

    fetchGroups();
  }, [userId]);

  // Fetch joinable groups asynchronously using getUserNotGroups
  const fetchJoinableGroups = async () => {
    try {
      const groups = await getUserNotGroups(userId);
      setJoinableGroups(groups || []);
      console.log('Joinable groups fetched:', groups);
    } catch (error) {
      console.error('Error fetching joinable groups:', error);
      setJoinableGroups([]);
    }
  };

  const enterGroupHandler = (id) => {
    console.log(`Entering the group: ${id}`);
    navigate(`/group/${id}`);
  };

  const leaveGroupHandler = (groupName) => {
    console.log(`Leaving the group: ${groupName}`);
  };

  const showPopupHandler = async () => {
    await fetchJoinableGroups();
    setPopupVisible(true);
  };

  const hidePopupHandler = () => {
    setPopupVisible(false);
  };

  const joinGroupHandler = async (groupName) => {
    console.log(`Joining group: ${groupName}`);
  
    // Prepare the data to send to the backend
    const joinData = {
      memberID: parseInt(userId, 10),    // Replace userId with the actual user ID
      groupName: groupName
    };
  
    try {
      // Call the joinGroup function to join the group
      const result = await joinGroup(joinData);
      console.log('User joined the group:', result);
  
      // Refresh the user groups list after successful join
      const updatedGroups = await getUserGroups(userId);  // Fetch the updated groups
      setUserGroups(updatedGroups || []);
  
      // Add any additional logic you want to handle after joining the group
      hidePopupHandler(); // Close the popup after joining the group
    } catch (error) {
      console.error('Error joining the group:', error);
      // Handle the error (optional: show a user-friendly error message)
    }
  };
  

  return (
    <div className="user-groups-container">
      {/* Background layer with title on top */}
      <div className="background-layer">
        <h1 className="page-title2">User Groups</h1>
      </div>

      {/* Join Group Button */}
      <div className="join-group-button-container">
        <button
          className="join-group-button"
          onClick={showPopupHandler}
          aria-label="Join a new group"
        >
          View Joinable Groups
        </button>
      </div>

      {/* Joinable Groups Popup */}
      {popupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Available Groups to Join:</h3>
            <div className="group-list">
              {joinableGroups.length > 0 ? (
                joinableGroups.map((group) => (
                  <Card key={group.GroupName} className="group-item">
                    <div className="group-item__name">{group.GroupName}</div>
                    <div className="group-item__actions">
                      <Button
                        type="primary"
                        onClick={() => joinGroupHandler(group.GroupName)}
                      >
                        Join
                      </Button>
                    </div>
                  </Card>
                ))
              ) : (
                <p className="no-groups-message">
                  No available groups to join at this time.
                </p>
              )}
            </div>
            <Button onClick={hidePopupHandler}>Close</Button>
          </div>
        </div>
      )}

      {/* Displaying user groups */}
      <div className="group-list">
        {userGroups.length > 0 ? (
          userGroups.map((group) => (
            <GroupItem
              key={group.id}
              group={group}
              onEnterGroup={() => enterGroupHandler(group.GroupName)}
              onLeaveGroup={() => leaveGroupHandler(group.GroupName)}
            />
          ))
        ) : (
          <p className="no-groups-message">No groups found for this user.</p>
        )}
      </div>
    </div>
  );
};

export default UserGroups;
