import React, { PropTypes } from 'react';

const TooltipContent =
  ({ title, start, end, roomName, owner, isOwnedByUser, styles, onEditClick }) => (
    <div className={styles.content}>
      <p>
        <strong className={styles.title}>{ title }</strong>
        <p>{ start.format('h:mma') } - { end.format('h:mma') }</p>
      </p>
      <div className={styles.ownerInfo}>
        <p>
          <strong className={styles.roomTitle}>{ roomName } Room</strong>
          <p>by { isOwnedByUser ? 'me' : owner.name }</p>
        </p>
        {isOwnedByUser ? <div onClick={() => onEditClick()} className={`${styles.edit} edit`}>Edit</div> : '' }
      </div>
    </div>
);

TooltipContent.propTypes = {
  title: PropTypes.string.isRequired,
  start: PropTypes.shape({}).isRequired,
  end: PropTypes.shape({}).isRequired,
  roomName: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  isOwnedByUser: PropTypes.bool.isRequired,
  styles: PropTypes.shape({}),
  onEditClick: PropTypes.func.isRequired,
};

export default TooltipContent;
