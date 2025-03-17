import React, { useState } from 'react';
import '../pages/UserGroups.css';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';

const GroupItem = ({ group, onEnterGroup, onLeaveGroup }) => {
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  console.log("Generating group ");
  const openLeaveModalHandler = () => setShowLeaveModal(true);
  const closeLeaveModalHandler = () => setShowLeaveModal(false);

  const confirmLeaveHandler = () => {
    setShowLeaveModal(false);
    onLeaveGroup();
  };

  return (
    <React.Fragment>
      {/* Modal to confirm leaving the group */}
      <Modal
        show={showLeaveModal}
        onCancel={closeLeaveModalHandler}
        header="Leave Group"
        footer={
          <React.Fragment>
            <Button onClick={closeLeaveModalHandler}>Cancel</Button>
            <Button onClick={confirmLeaveHandler} danger>
              Leave
            </Button>
          </React.Fragment>
        }
      >
        <p>Are you sure you want to leave the group "{group.GroupName}"?</p>
      </Modal>

      {/* Card representing the group */}
      <Card className="group-item">
        <h2 className="group-item__name">{group.GroupName}</h2>
        <div className="group-item__description">{group.Description}</div>
        <div className="group-item__actions">
          <Button onClick={onEnterGroup}>Enter Group Page</Button>
          <Button onClick={openLeaveModalHandler} danger>
            Leave Group
          </Button>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default GroupItem;
