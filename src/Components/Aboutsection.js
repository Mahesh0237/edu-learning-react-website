import '../App.css'
import card1 from '../images/image4.jpg'
function Aboutsection()
{
    return(
     <div class="aboutsection pt-5 mt-5" id="About">
        <div class="container ">
            {/* bootstrap grid start */}
            <div class="row">
                <div class="col-3  p-5 aboutsection-1" id="aboutsection-2">
                    <i class="fa fa-graduation-cap mb-3 "></i>
                    <h3 class="text-center mb-3">Skilled instructors</h3>
                    <p class="text-center">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam.Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
                <div class="col-3  p-5 aboutsection-1" id="aboutsection-2">
                    <i class="fa fa-globe mb-3"></i>
                    <h3 class="text-center mb-3">Online classes</h3>
                    <p class="text-center">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam.Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
                <div class="col-3 p-5  aboutsection-1" id="aboutsection-2">
                    <i class="fa fa-home mb-3 " ></i>
                    <h3 class="text-center mb-3">Home Projects</h3>
                    <p class="text-center">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam.Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
                <div class="col-3 p-5  aboutsection-1" id="aboutsection-2">
                    <i class="fa fa-book mb-3 "></i>
                    <h3 class="text-center mb-3">Book Library</h3>
                    <p class="text-center">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam.Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
               
            </div>{/* bootstrap grid ends */}
             {/* bootstrap grid start */}
             <div class="row pt-3">
                         {/* col-1 */}
                    <div class="col-6 ">
                        <img src={card1} alt='' class="h-75 w-100"/>
                    </div>
                             {/* col-2 */}
                    <div class="col-6 ">
                        <h1 class="p-3" style={{color: "#06bbcc"}}>Welcome to eLEARNING</h1>
                        <p class="mt-3">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        <p class="mt-3">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        <p class="my-3">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                              {/* bootstrap grid start */}
                        <div class="row mt-4">
                                {/* col-1 */}
                            <div class="col-6 ">
                                <ul type="none">
                                    <li class="mb-3"><i class="fa fa-arrow-right text-dark"></i>&nbsp;&nbsp;Skilled Instructors</li>
                                    <li class="mb-3"><i class="fa fa-arrow-right text-dark"></i>&nbsp;&nbsp;International Certifiers</li>
                                    <li class="mb-3"><i class="fa fa-arrow-right text-dark"></i>&nbsp;&nbsp;Online classes</li>
                                </ul>
                            </div>
                            {/* col-2 */}
                            <div class="col-6 ">
                                <ul type="none">
                                    <li class="mb-3"><i class="fa fa-arrow-right text-dark"></i>&nbsp;&nbsp;International Certifiers</li>
                                    <li class="mb-3"><i class="fa fa-arrow-right text-dark"></i>&nbsp;&nbsp;Online classes</li>
                                    <li class="mb-3"><i class="fa fa-arrow-right text-dark"></i>&nbsp;&nbsp;Skilled Instructors</li>
                                </ul>
                            </div>
                        </div>{/* bootstrap grid ends */}
                        <button class="btn btn-dark p-3 w-25 mt-2 ms-2">Read More</button>
                    </div>
             </div> {/* bootstrap grid ends */}
        </div>
    </div> 
    )
}
export default Aboutsection;


