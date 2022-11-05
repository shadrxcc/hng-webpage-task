import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";

const FormValidation = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      agreement: false
    }
  });

  const onSubmit = () => {
    alert('Message sent!');
  };

    return (
      <>
        <div id="forms">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group widths="equal">
              <Form.Field>
                <label>First Name</label>
                <input
                  id="first_name"
                  placeholder="Enter your first name"
                  type="text"
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && <p id="errs">Please enter first name</p>}
              </Form.Field>

              <Form.Field>
                <label>Last Name</label>
                <input
                  id="last_name"
                  placeholder="Enter your last Name"
                  type="text"
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && <p id="errs">Please enter last name</p>}
              </Form.Field>
            </Form.Group>

            <Form.Field>
              <label>Email</label>
              <input
                id="email"
                placeholder="yourname@email.com"
                type="email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              {errors.email && (
                <p id="errs">Please enter a valid email</p>
              )}
            </Form.Field>

            <Form.Field>
              <label>Message</label>
              <textarea
                id="message"
                placeholder="Send me a message and I will reply you as soon as possible..."
                {...register("message", {
                  required: true,
                })}
              />
              {errors.message && <p id="errs">Please enter a message</p>}
            </Form.Field>

            <Form.Field>
              
                <label>
                  <input
                    type="checkbox"
                    {...register("agreement", {
                      required: true,
                    })}
                  />
                  <span id="check-label">
                    You agree to providing your data to Shadrach Akaade who may contact
                    you
                  </span>
                </label>
            
              {errors.agreement && <p id="errs">This field is required</p>}
            </Form.Field>

            <Button className="btn-submit" type="submit">
              Send Message
            </Button>
          </Form>
        </div>
      </>
    );
}

export default FormValidation