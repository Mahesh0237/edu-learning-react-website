import React from 'react'
import '../App.css'
import card4 from '../images/image-4.jpg';
import card5 from '../images/image-5.jpg';
import card6 from '../images/image-6.jpg';
import card7 from '../images/image-7.jpg';
import card8 from '../images/image-8.jpg';
import card9 from'../images/image-9.jpg';
import card10 from'../images/image-10.jpg';
function Coursesection() {
  return (
    <div class="Coursesection p-5 mt-5" id="Course">
      <div class="container">

      <h2 class="text-center text-info ">COURSES </h2>
              <h4 class="text-center my-4">Popular Courses</h4>
                    {/* bootstrap grid starts */}
              <div class="row">
                      {/* col-1 starts */}
                    <div class="col-4">
                        {/* bootstrap cards starts */}
                      <div class="card">
                         <img src={card8}  alt="" />
                         {/* bootstrap buttons start */}
                         <div class="btn-group" id="coursebtn">
                         <button class="btn btn-danger " >Readmore</button>&nbsp;
                         <button class="btn btn-danger " >Join Now</button>
                         </div>
                         {/* bootstrap button end */}
                         <div class="card-body">
                              <div class="card-text text-center text-primary"><b style={{fontSize:"30px"}}>Rs.500/-</b></div>
                              <span style={{marginLeft:"140px"}}><i class="fa fa-star text-warning "></i><i class="fa fa-star text-warning "></i><i class="fa fa-star text-warning "></i><i class="fa fa-star text-warning "></i>(1028)</span>
                              <div class="card-title text-center"><b style={{fontSize:"20px"}}>Web Design & Development Course for Beginners</b></div>
                          </div>

                      </div> {/* bootstrap cards ends */}

                    </div>  {/* col-1 ends */}

                      {/* col-2 starts */}
                      <div class="col-4">
                        {/* bootstrap cards starts */}
                      <div class="card">
                         <img src={card9} alt=''/>
                          {/* bootstrap buttons start */}
                          <div class="btn-group" id="coursebtn">
                         <button class="btn btn-danger " >Readmore</button>&nbsp;
                         <button class="btn btn-danger " >Join Now</button>
                         </div>
                         {/* bootstrap button end */}
                         <div class="card-body">
                              <div class="card-text text-center text-primary"><b style={{fontSize:"30px"}}>Rs.500/-</b></div>
                              <span style={{marginLeft:"140px"}}><i class="fa fa-star text-warning "></i><i class="fa fa-star text-warning "></i><i class="fa fa-star text-warning "></i><i class="fa fa-star text-warning "></i>(1120)</span>
                              <div class="card-title text-center"><b style={{fontSize:"20px"}}>Web Design & Development Course for Beginners</b></div>
                          </div>

                      </div> {/* bootstrap cards ends */}

                    </div>  {/* col-2 ends */}

                      {/* col-3 starts */}
                      <div class="col-4">
                        {/* bootstrap cards starts */}
                      <div class="card">
                         <img src={card10} alt=''/>
                          {/* bootstrap buttons start */}
                          <div class="btn-group" id="coursebtn">
                         <button class="btn btn-danger " >Readmore</button>&nbsp;
                         <button class="btn btn-danger " >Join Now</button>
                         </div>
                         {/* bootstrap button end */}
                         <div class="card-body">
                              <div class="card-text text-center text-primary"><b style={{fontSize:"30px"}}>Rs.500/-</b></div>
                              <span style={{marginLeft:"140px"}}><i class="fa fa-star text-warning "></i><i class="fa fa-star text-warning "></i><i class="fa fa-star text-warning "></i><i class="fa fa-star text-warning "></i>(1056)</span>
                              <div class="card-title text-center"><b style={{fontSize:"20px"}}>Web Design & Development Course for Beginners</b></div>
                          </div>

                      </div> {/* bootstrap cards ends */}

                    </div>  {/* col-3 ends */}

              </div>{/* bootstrap grid endss */}


          <h3 class="text-center text-info my-5"> <u>COURSE CATEGERIES</u></h3>
         
          {/* bootstrap grid starts */}
          <div class="row">
                   {/* col-1 */}
              <div class="col-8">
                    {/* Again taken bootstrap2 grid starts */}
                       {/* row-1 */}
                   <div class="row mb-3">
                       <div class="col-12">
                          <img src={card4} alt='' class="w-100"/>
                          <buuton class="btn btn-white p-1" id="course1"><b>Web Design</b><br/><p style={{color:  "#06bbcc"}}>49 courses</p></buuton>
                          
                        </div>
                   </div>
                      {/* row-2 */}
                  <div class="row">
                       <div class="col-6">
                           <img src={card5} alt='' class="w-100" />
                           <buuton class="btn btn-white p-1" id="course2"><b>Graphic Design</b><br/><p style={{color:  "#06bbcc"}}>60 courses</p></buuton>
                       </div>
                      <div class="col-6">
                            <img src={card6}  alt='' class="w-100"/>
                            <buuton class="btn btn-white p-1" id="course3"><b>Video Editing</b><br/><p style={{color:  "#06bbcc"}}>55 courses</p></buuton>
                      </div>
                  </div>
              </div>    {/*  bootstrap 2 grid ends*/}
                    {/* col-2 */}
             <div class="col-4">
                  <img src={card7} alt='' class="w-100 h-100"/>
                  <buuton class="btn btn-white p-2" id="course4"><b>Online Marketing</b><br/><p style={{color:  "#06bbcc"}}>45 courses</p></buuton>
             </div>
           </div>  {/* bootstrap grid ends */}

              
        </div>
    </div>
  )
}

export default Coursesection