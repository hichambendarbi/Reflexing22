import React from "react";
import "../styles.css";

const ContactForm =()=>(
  <div class="col-md-7 order-md-last d-flex">
  <form action="#" class="bg-light p-4 p-md-5 contact-form">
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="Nom Complet"
      />
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="Votre Email"
      />
    </div>

    <div class="form-group">
      <textarea
        name=""
        id=""
        cols="30"
        rows="7"
        class="form-control"
        placeholder="Message"
      />
    </div>
    <div class="form-group">
      <input
        type="submit"
        value="Envoyer un message"
        class="btn btn-primary py-3 px-5"
      />
    </div>
  </form>  
  </div>
)

const ContactInfo = ({contacts}) =>(
  <div class="col-md-5 d-flex">
    <div class="row d-flex contact-info mb-5">
      {contacts.map(contact=>(
        <div class="col-md-12 ">
        <div class="box p-2 px-3 bg-light d-flex">
          <div class="icon mr-3">
            <span class="icon-map-signs" />
          </div>
          <div>
            <h3 class="mb-3">{contact.title}</h3>
            <p>
              <a href={contact.link}>{contact.text}</a>
            </p>
          </div>
        </div>
      </div>
      ))}    
    </div>
  </div>
)

const SC01 = () => {
  return (
    <section
      class="ftco-section contact-section ftco-no-pb"
      id="contact-section"
    >
      <div class="container">
        <div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-7 heading-section text-center">
            <span class="subheading">Contact</span>
            <h2 class="mb-4">Contacter nous</h2>
            <p>
              Un(e) specialist(e) sera a votre diposition pour repondre a vos
              question.
            </p>
          </div>
        </div>
        <div class="row block-9">
          
            <ContactForm />
          
            <ContactInfo contacts={[
              {title : "Adress", text: "Laboratoire Fes Rue des far el atlass Fes Maroc"},
              {title : "Numero telephone", text: "+212 535-73-20-00"},
              {title : "Address Email", text: "Laboamfes@gmail.com"},
              {title : "siteweb", text: "Laboamfes.com", link:"Laboamfes.com"}
            ]}/>
        </div>
      </div>
    </section>
  );
};

export default SC01;