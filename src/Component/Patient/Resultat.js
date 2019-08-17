import React from "react"
import "../ProfessionalStyle/style1.css";
import {
  NavLink
} from "reactstrap";


const Resultat=()=>(
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
							    <NavLink className="nav-link"  aria-selected="false" href="/Documents"><h5>VOS D'OCUMENTS UTILES</h5></NavLink>
								<NavLink className="nav-link"  aria-selected="false" href="/AccueilLabo"><h5>ACCUEIL L'ABORATOIRE</h5></NavLink>
								<NavLink className="nav-link active"  aria-selected="true" href="/Resultat"><h5>VOS RESULTATS D'EXAMEN</h5></NavLink>
								<NavLink className="nav-link"  aria-selected="false" href="/Urgences"><h5>URGENCES MEDICALES</h5></NavLink>
								<NavLink className="nav-link"  aria-selected="false" href="/AvantExamen"><h5>AVANT VOTRE EXAMEN</h5></NavLink>
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
	              			<h2>Vous pouvez récupérer vos résultats :</h2><br/>
											<h5>Par internet :</h5>
	              			<p>Vous avez aussi la possibilité de consulter vos résultats sur notre serveur sécurisé. N’oubliez pas de demander vos identifiants lors de votre passage au laboratoire.<br/>
(Notez que selon la législation en vigueur, certaines analyses ne sont pas consultables sur internet comme le HIV ou l’hépatite C, les tests génétiques … D’autre part, si votre dossier n’est pas « soldé », vous ne pourrez pas y accéder.)</p>
                             
<br/>	<h5>Directement au laboratoire :</h5>
	              			<p>Les résultats des examens courants sont disponibles au laboratoire le jour même, à partir de 17h00, sur présentation du coupon de retrait. Certains examens ont un délai de réalisation plus long qui vous sera précisé lors du prélèvement.
<br/>
Vous avez la possibilité de demander l’avis d’un biologiste, ce qui ne remplacera pas la consultation de votre médecin, seul habilité à interpréter vos résultats en fonction de votre contexte clinique.
<br/>
En cas de résultat pathologique, nous avertissons votre médecin..</p>

              
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

export default Resultat;