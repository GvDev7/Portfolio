const Frames = (props) => {
    return (
            <div className="frames">
                <div className="firstFrame">
                    <h4>{props.Title}</h4>
                    <ul>
                        <li>{props.development}
                            <ul>
                                <li>{props.skills}</li>
                            </ul>
                        </li>
                        {/* <li>Self taught Web Developer @2019
                            <ul>
                                <li>HTML and CSS</li>
                                <li>JavaScript</li>
                                <li>JQuery</li>
                                <li>ReactJs and Angular</li>
                            </ul>
                        </li>
                        <li>Applications Developer @2020
                            <ul>
                                <li>PHP</li>
                                <li>Python</li>
                                <li>Java</li>
                                <li>Spring boot</li>
                            </ul>
                        </li> */}
                    </ul>
                </div>
                {/* <br/>
                <div className="secondFrame">
                    <h4>Designer</h4>
                    <p></p>
                </div>
                <br/>
                <div className="thirdFrame">
                    <h4>Consultant</h4>
                    <p></p>
                </div> */}
            </div>
    )
}

export default Frames;