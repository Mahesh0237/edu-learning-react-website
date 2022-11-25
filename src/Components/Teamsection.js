import React from 'react'
import '../App.css';
import team1 from '../images/team-1.jpg';
import team2 from '../images/team-2.jpg';
import team3 from '../images/team-3.jpg';
import team4 from '../images/team-4.jpg';
function Teamsection() {
    return (
        <div className='teamsection mt-5 p-5'>
            <div className='container'>
                <h2 className='text-center' style={{ color: " #66b3ff" }}>EXPERT TEAMS</h2>
                <h4 className='text-center'>Instructors</h4>
                {/* bootstrap starts */}
                <div className='row mt-5'>
                    {/* bootstrap col-1 starts */}
                    <div className='col-3'>
                        <div className='cards '>
                            <img src={team1} className="w-100 h-100 teamimg " alt=''  />
                            <div class="card-body p-3"  style={{backgroundColor:" #cceeff"}}>
                                <div className='card-title '>
                                    <h4 className='text-center mt-4'>Karry Wllian</h4>
                                    <p className='text-center'>JAVA Trainer</p>
                                </div>
                            </div>
                            {/* font icons */}
                            <span className='teamicon'>
                                <i className='fa fa-facebook me-2'></i>&nbsp;<i className='fa fa-twitter me-2'></i>&nbsp;<i className='fa fa-instagram'></i>
                            </span>
                        </div>
                    </div> {/* bootstrap col-1 ends */}
                    {/* bootstrap col-2 starts */}
                    <div className='col-3'>
                        <div className='cards'>
                            <img src={team2} className="w-100 h-100 teamimg" alt='' />
                            <div class="card-body p-3"  style={{backgroundColor:" #cceeff"}}>
                                <div className='card-title'>
                                    <h4 className='text-center mt-4'>Jhonsena</h4>
                                    <p className='text-center'>React Js Trainer</p>
                                </div>
                            </div>
                            {/* font icons */}
                            <span className='teamicon'>
                                <i className='fa fa-facebook me-2'></i>&nbsp;<i className='fa fa-twitter me-2'></i>&nbsp;<i className='fa fa-instagram'></i>
                            </span>
                        </div>
                    </div> {/* bootstrap col-2 ends */}

                    {/* bootstrap col-3 starts */}
                    <div className='col-3'>
                        <div className='cards'>
                            <img src={team3} className="w-100 h-100 teamimg" alt='' />
                            <div class="card-body p-3"  style={{backgroundColor:" #cceeff"}}>
                                <div className='card-title'>
                                    <h4 className='text-center mt-4'>kanewasen</h4>
                                    <p className='text-center'>Python Trainer</p>
                                </div>
                                    
                            </div>
                            {/* font icons */}
                            <span className='teamicon'>
                                <i className='fa fa-facebook me-2'></i>&nbsp;<i className='fa fa-twitter me-2'></i>&nbsp;<i className='fa fa-instagram'></i>
                            </span>
                        </div>
                    </div> {/* bootstrap col-3 ends */}

                     {/* bootstrap col-4 starts */}
                     <div className='col-3'>
                        <div className='cards'>
                            <img src={team4} className="w-100 h-100 teamimg" alt='' />
                            <div class="card-body p-3" style={{backgroundColor:" #cceeff"}}>
                                <div className='card-title'>
                                    <h4 className='text-center mt-4 '>Warnerson</h4>
                                    <p className='text-center'>Softwar Test Trainer</p>
                                </div>
                                        
                            </div>
                            {/* font icons */}
                            <span className='teamicon'>
                                <i className='fa fa-facebook me-2'></i>&nbsp;<i className='fa fa-twitter me-2'></i>&nbsp;<i className='fa fa-instagram'></i>
                            </span>
                        </div>
                    </div> {/* bootstrap col-4 ends */}
                </div>    {/* bootstrap endss */}

            </div>
        </div>
        
    )
}

export default Teamsection