import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";

const FormValidation = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
              </Form.Field>
              {errors.firstName && <p id="errs">Please enter first name</p>}

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
                <p id="errs">Please enter a correct mail format</p>
              )}
            </Form.Field>

            <Form.Field>
              <label>Message</label>
              <textarea
                id="message"
                placeholder="Send me a message and I will reply
              you as soon as possible..."
                {...register("message", {
                  required: true,
                })}
              />
              {errors.message && <p id="errs">Please enter a message</p>}
            </Form.Field>

            <Form.Checkbox label="You agree to providing your data to shadrxcc who may contact you" />
            <Button className="btn-submit" type="submit">
              Send Message
            </Button>
          </Form>
        </div>
      </>
    );
}

export default FormValidation