import React from 'react';

function ContactForm() {
  return (
    <form>
      <input type="text" placeholder="Your Name" required /><br /><br />
      <input type="email" placeholder="Your Email" required /><br /><br />
      <textarea placeholder="Message" required></textarea><br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;