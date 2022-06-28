import React from 'react';
import SupervisorService from "../services/SupervisorService";

class SupervisorComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            supervisors: []
        }
    }

    componentDidMount() {
        SupervisorService.getSupervisors().then((response) => {
           this.setState({ supervisors: response.data })
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-center"> Supervisors List </h1>
                <table className="table table-striped">
                    <thead>
                        <tr>

                            <td> User Id</td>
                            <td> First Name</td>
                            <td> Last Name</td>

                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.supervisors.map(
                            supervisor =>
                                <tr key = {supervisor.id}>
                                    <td> {supervisor.id}</td>
                                    <td> {supervisor.firstName}</td>
                                    <td> {supervisor.lastName}</td>


                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }


}

export default SupervisorComponent