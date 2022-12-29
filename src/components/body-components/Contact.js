import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import { motion } from "framer-motion"
import 'semantic-ui-css/semantic.css';


const SERVICE_ID = "service_gpkj0de";
const TEMPLATE_ID = "template_7j62ty9";
const USER_ID = "cqrUkhfmoC3CmiCC1";

const Footer = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };

return (
  <motion.div animate={{opacity:1}} initial={{opacity: 0}} transition={{duration: 1, delay: 0.5}} className='component-container-main  contact'>
    <motion.div className="contact-container-main">
      <div className='contact-container-desc'>
      <div className='contact-title'>Send me a message!</div>
      </div>
      <div className='contact-container'>
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='user_email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='user_name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='user_message'
          placeholder='Message…'
          required
        />
        <Button type='submit' class="contact-page-submit-button">Submit</Button>
      </Form>
      </div>
      
      
    </motion.div>
    <div className='contact-title smaller'>Other ways to contact:</div>
    <div className='contact-title smaller-er'><a class="contactme-link" href="mailto:lukeshort321@gmail.com">lukeshort321@gmail.com</a>
    <a class="contactme-link" href="tel:304-982-0128">304-982-0128</a></div>
    </motion.div>
  );
}

export default Footer;