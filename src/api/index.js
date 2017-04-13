import agent from 'superagent';
import moment from 'moment';
import configParam from './configParam';

// FIXME: today by default?
const startMoment = moment().startOf('day');
const start = startMoment.format('YYYY-MM-DD');

const end = startMoment.clone().add(1, 'day').format('YYYY-MM-DD');

const apiBaseUrl = configParam('apiBaseUrl', 'http://localhost:8888');

const fetchMeetings = () => agent
  .get(`${apiBaseUrl}/rooms/nyc/meetings?start=${start}&end=${end}`).then(response => {
    const meetings = JSON.parse(response.text);
    return meetings;
  })
  .catch(err => err);

const createMeeting = (meeting, room) => agent.post(`${apiBaseUrl}/room/${room.email}/meeting`)
  .send({
    title: meeting.title,
    start: meeting.start,
    end: meeting.end,
  })
  .then((message) => message);

const Api = {
  fetchMeetings,
  createMeeting,
};

export default Api;
