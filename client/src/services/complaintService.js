import api from './api';

export function createComplaint(data) {
  return api.post('/complaints', data);
}

export function getComplaints() {
  return api.get('/complaints');
}
