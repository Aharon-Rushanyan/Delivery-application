import React from "react";

import Divider from '@material-ui/core/Divider';
import ErrorIcon from '@material-ui/icons/Error';
import CheckIcon from '@material-ui/icons/Check';
import IconButton from "@material-ui/core/IconButton";
import NavigationIcon from '@material-ui/icons/Navigation';
import "./printWork.css"

class PrintWork extends React.Component {
    constructor(props) {
        super(props);

        this.getTime = this.getTime.bind(this);
    }

    getTime() {
        let today = new Date();
        let time = today.getHours() + ":" + today.getMinutes();
        console.log(time)

        return time;
    }

    render() {
        return (
            <div>
                {
                    this.props.workList.map(job => {
                        const timeValidation = (job.time.slice(0, 2) >= job.when.slice(0, 2)) && (job.time.slice(0, 2) < job.when.slice(6, 8));
                        console.log(timeValidation);
                        return (
                            <div className={"main-container forbackround" + (job.open ? "open" : "close") + (job.done ? "done" : "")} key={job.id} >
                                <div className="flex-container">
                                    <div className="status-section">
                                        {
                                            job.open ?
                                                <div className={`status-circle opened ${job.done ? 'done' : ''}`} >
                                                    {job.id}
                                                </div> :
                                                <div className={`status-circle ${job.done ? 'closed-done' : ''}`} >
                                                    {
                                                        job.done ?
                                                            <CheckIcon style={job.done ? { fill: ' white' } : null} /> :
                                                            job.id
                                                    }
                                                </div>
                                        }
                                    </div>
                                    <div className="address-section" onClick={() => this.props.whenChangeOpen(job.id)}>
                                        <div>
                                            <div>
                                                <p className="information-section">{job.barcode}</p>
                                            </div>
                                            <div>
                                                <p className="information-section">{job.adress}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="time-section">
                                        {
                                            job.done ?
                                                timeValidation ?
                                                    <div className="green-time">
                                                        {job.time}
                                                    </div> :
                                                    <div className="wrong-time">
                                                        <ErrorIcon style={{ fill: '#d50000' }} />
                                                        <div className="red-time">
                                                            {job.time}
                                                        </div>
                                                    </div>
                                                : timeValidation ?
                                                <div className="green-time">
                                                    {job.estimatedTime}
                                                </div>:  <div className="wrong-time">
                                                        <ErrorIcon style={{ fill: '#d50000' }} />
                                                        <div className="red-time">
                                                            {job.estimatedTime}
                                                        </div>
                                                    </div>
                                        }
                                        <div className="marginLeft1">{job.when}</div>
                                    </div>
                                </div>
                                {
                                    job.open ?
                                        <div className="buttons-container">
                                            <Divider variant="inset" />

                                            <div className="buttons-section">
                                                <IconButton
                                                    aria-label="close"
                                                    color="inherit"
                                                // onClick={() => this.props.whenChangeDone(job.id, this.getTime)}
                                                >
                                                    <div className="buttons">
                                                        <NavigationIcon style={{ fill: ' #2988E8' }} />
                                                        <span className="text-size">NAVIGATE</span>
                                                    </div>
                                                </IconButton>

                                                <IconButton
                                                    aria-label="close"
                                                    color="inherit"
                                                    onClick={() => this.props.whenChangeDone(job.id, this.getTime)}
                                                >
                                                    <div className="buttons">
                                                        <CheckIcon style={{ fill: ' #2988E8' }} />
                                                        <span className="text-size">Finish</span>
                                                    </div>
                                                </IconButton>
                                            </div>
                                        </div> :
                                        null
                                }
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default PrintWork;