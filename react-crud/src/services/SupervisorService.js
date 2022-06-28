import axios from 'axios'

const SUPERVISORS_REST_API_URI = "http://localhost:8080/api"

class SupervisorService {
    getSupervisors() {
        return axios.get(SUPERVISORS_REST_API_URI + '/supervisors');
    }

    saveNotification(data) {
        return axios.postForm(SUPERVISORS_REST_API_URI + '/submit', data);
    }
}

export default new SupervisorService();