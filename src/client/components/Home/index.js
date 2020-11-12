import React, { Component } from "react";
import Events from "../Events";
import eventImg from "../../app-assets/images/slider/06.jpg";

class Home extends Component {
  render() {

    const carouselWidth = {
      height: "300px"
    }

    return (
      <div className="row">
          <div className="col-md-8">
            
          </div>
          <div className="col-md-4">
          <div class="order-1 order-md-2">
                            <div class="card box-search">
                                <div class="card-body">
                                   
                                    <div class="row knowledge-panel text-center py-1">
                                        <div class="col border-right">
                                            <p class="mb-0">1,367</p>
                                            <small>Sales</small>
                                        </div>
                                        <div class="col border-right">
                                            <p class="mb-0">74</p>
                                            <small>Comments</small>
                                        </div>
                                        <div class="col d-inline-block">
                                            <p class="mb-0">5</p>
                                            <small>Ratings</small>
                                        </div>
                                    </div>
                                    <div class="py-1 knowledge-panel-info">
                                        <ul class="list-unstyled">
                                            <li class="pb-25">Bootstrap : <span class="text-bold-500">v4.13 updated</span></li>
                                            <li class="pb-25">Created : <span class="text-bold-500">Mar 8 2019</span></li>
                                            <li class="pb-25">Last Update : <span class="text-bold-500">Sep 28 2019</span></li>
                                            <li class="pb-25">Documentation : <span class="text-bold-500">Well Documented</span></li>
                                            <li class="pb-25">Layout : <span class="text-bold-500">Responsive</span></li>
                                        </ul>
                                    </div>
                                    <h6>Connect With US</h6>
                                    <div class="knowledge-panel-suggestion">
                                        <div class="suggestion d-inline-block text-center mr-2">
                                            <a href="https://www.facebook.com/pixinvents" target="_blank">
                                                <i class="bx bxl-facebook-square facebook font-large-1"></i>
                                                <span class="font-small-2 d-block">Facebook</span>
                                            </a>
                                        </div>
                                        <div class="suggestion d-inline-block text-center mr-2">
                                            <a href="https://www.linkedin.com/in/pixinvent-creative-studio-561a4713b/" target="_blank">
                                                <i class="bx bxl-linkedin-square linkedin font-large-1"></i>
                                                <span class="font-small-2 d-block">Linkedin</span>
                                            </a>
                                        </div>
                                        <div class="suggestion d-inline-block text-center mr-2">
                                            <a href="https://twitter.com/pixinvents" target="_blank">
                                                <i class="bx bxl-twitter twitter font-large-1"></i>
                                                <span class="font-small-2 d-block">Twitter</span>
                                            </a>
                                        </div>
                                        <div class="suggestion d-inline-block text-center">
                                            <a href="https://www.youtube.com/channel/UClOcB3o1goJ293ri_Hxpklg" target="_blank">
                                                <i class="bx bxl-youtube youtube font-large-1"></i>
                                                <span class="font-small-2 d-block">Youtube</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
          </div>
      </div>
    );
  }
}

export default Home;
