import React from 'react'
import '../App.css'
import card7 from'../images/image-7.jpg'
import card8 from'../images/image-8.jpg'
import card9 from'../images/image-9.jpg'
function Contactsection() {
  return (
    <div className= ' contactsection ' id="contact"> 
    <div class="container">

            <div>
                  <div className='row'>
                        <div className='col-6'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.487763197217!2d78.442414014797!3d17.436353288049244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb919633f78bef%3A0xbb63515db9bc2eba!2siHub%20Talent%20(Innovative%20Placement%20Solutions)!5e0!3m2!1sen!2sin!4v1668402851415!5m2!1sen!2sin" className='h-100 w-75'></iframe>
                        </div>
                        <div className='col-6'>
                              <label>yourname</label>
                              <input type="text" className="form-control w-75" placeholder='yourname....'/>
                              <label>E-mail</label>
                              <input type="text" className="form-control w-75" placeholder='eg.xyz@gmail.com'/>
                              <label>Mobile Number</label>
                              <input type="text" className="form-control w-75" placeholder='Mobile Number ....'/>
                              <label>Select course</label>
                              <select className='form-control w-75'>
                                    <option value="">none</option>
                                    <option value="java">Java fullstack</option>
                                    <option value="python">python fullstack</option>
                                    <option value="reactjs">ReactJs</option>
                                    <option value=" Softwrae testing">Software Testing</option>
                              </select><br/>
                              <input type="submit"  value="Send Message" class="btn btn-outline-light w-75 rounded"/>
                        </div>
                  </div>
            </div>

            <br/><br/><br/>

          <div className='row'>
            {/* bootstrap col-1 */}
              <div className="col-3">
                  <h3 className='mb-4'>Quick Link</h3>
                  <b><a href='/' className='contact mt-5 text-white'>&gt;&nbsp;&nbsp;About Us</a></b><br/>
                  <b><a href='/' className='contact mt-5 text-white'>&gt;&nbsp;&nbsp;Contact US</a></b><br/>
                  <b><a href='/' className='contact mt-5 text-white'>&gt;&nbsp;&nbsp;Privacy Policy</a></b><br/>
                  <b><a href='/' className='contact mt-5 text-white'>&gt;&nbsp;&nbsp;Terms & Conditions</a></b>
              </div>
              {/* bootstrap col-2 */}
              <div className='col-3'>
                    <h3 className='mb-4'>Contact</h3>
                   <h6><i className='fa fa-map-marker '></i>&nbsp;&nbsp; 123 Street, New York, USA</h6>
                   <h6><i className='fa fa-phone my-2'></i>&nbsp;&nbsp; +012 345 67890</h6>
                   <h6><i className='fa fa-envelope '></i>&nbsp;&nbsp; ihub@gmail.com</h6>
                   <h5><i className='fa fa-facebook me-3' id="contacticon"></i><i className='fa fa-twitter me-3' id="contacticon"></i><i className='fa fa-youtube me-3' id="contacticon"></i><i className='fa fa-linkedin' id="contacticon"></i></h5>
              </div>
              {/* bootstrap col-3 starts*/}
              <div className='col-3'>
                <h3>Gallery</h3>
                {/* bootstrap row-1 */}
                  <div className='row mt-4'>
                    <div className='col-3'>
                          <img src={card7} alt='' className='w-100 h-100'/>
                    </div>
                    <div className='col-3'>
                          <img src={card8} alt='' className='w-100 h-100'/>
                    </div>
                    <div className='col-3'>
                          <img src={card9} alt='' className='w-100 h-100'/>
                    </div>

                  </div>{/* bootstrap row1 ends */}
                      {/* bootstrap row-2 */}
                  <div className='row mt-3'>
                    <div className='col-3'>
                          <img src={card8} alt='' className='w-100 h-100'/>
                    </div>
                    <div className='col-3'>
                          <img src={card9} alt='' className='w-100 h-100'/>
                    </div>
                    <div className='col-3'>
                          <img src={card7} alt='' className='w-100 h-100'/>
                    </div>

                  </div> {/* bootstrap row-2 */}

              </div> {/* bootstrap col-3 ends*/}
              {/* bootstrap col-4  starts*/}
              <div className='col-3'>
                <h3 className='mb-4'>Newseltter</h3>
                <b><p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p></b>
                <input type="text" placeholder='your emial' id="contacttext"/>
                <span><button className='btn btn-primary p-2 contactbtn'>SignUp</button></span>

                
              </div>{/* bootstrap col-4 ends*/}
          </div>
          
    </div>
    </div>
  )
}

export default Contactsection