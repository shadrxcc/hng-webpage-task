import FormValidation from "../forms";

const Contact = () => {
  return (
    <>
      <div className="contact-form">
        <div>
          <h2 id="heading">Contact Me</h2>
          <p id="supporting-text">Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
        <FormValidation />
      </div>
    </>
  );
};

export default Contact;
