import React from "react"
import "../ProfessionalStyle/style1.css";
import {
    NavLink
  } from "reactstrap";

const Partenariat=()=>(
    <div>        
		<section className="ftco-section">
    	<div className="container">
    		<div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-8 text-center heading-section ">
          	<span className="subheading">Etre parmis</span>
            <h2 className="mb-4">Nos contributeurs</h2>
            <p>Dans un cadre professionelles et quelque soit votre position geographique et pro vous pouvez nous rejoindre... khasek f had star wness tbyn bli les contributeur homa nass li kaysifto wyakhdo purcentage c est une paragrave moutivante</p>
          </div>
        </div>
    		<div className="ftco-departments">
					<div className="row">
            <div className="col-md-12 nav-link-wrap">
	            <div className="nav nav-pills d-flex text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
	       

						     	<NavLink className="nav-link active"  aria-selected="true" href="/Partenariat"><h5>Partenariat</h5></NavLink>
								<NavLink className="nav-link"  aria-selected="false" href="/Statistique"><h5>Statistique</h5></NavLink>
								<NavLink className="nav-link"  aria-selected="false" href="/Regles"><h5>Constructions</h5></NavLink>
								<NavLink className="nav-link"  aria-selected="false" href="/Contributeur"><h5>Contributeur</h5></NavLink>
                                <NavLink className="nav-link" id="v-pills-1-tab" data-toggle="pill" role="tab" aria-controls="v-pills-1" aria-selected="false" href="/Chat"><h5>Chat</h5></NavLink>
	            
							
							</div>
	          </div>
	          <div className="col-md-12 tab-wrap">
	            
	            <div className="tab-content bg-light p-4 p-md-5 " id="v-pills-tabContent">

	              <div className="tab-pane py-2 fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="day-1-tab">
	              	<div className="row departments">
	              		<div className="col-lg-4 order-lg-last d-flex align-items-stretch">
	              			<div className="img d-flex align-self-stretch" ></div>
	              		</div>
	              		<div className="col-lg-8">
	              			<h2>Comment vous pouvez collaborer avec le labo ?</h2>
	              			<p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>
                              <div className="row mt-5 pt-2">
	              			<p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>

                           </div>
	              		</div>
	              	</div>
	              </div>
	            </div>
	          </div>
	        </div>
        </div>
    	</div>
    </section>

    </div>

)

export default Partenariat;