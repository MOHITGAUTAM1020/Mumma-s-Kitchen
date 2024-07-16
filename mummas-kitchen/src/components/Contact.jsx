import React from 'react'
function Contact() {
    return <>
        <section className='section-contact' id='contact'>
            <h1 className='contact-h1'>contact us</h1>
        <div className="contact-container">
            <div className="popup-content">
            <form action="/" method="post">
            <label htmlFor="">name</label>
            <input type="text" name="name" required />
            <label htmlFor="number">contact number</label>
            <input type="number" name="contact" required />
            <label htmlFor="query">what is your query</label>
            <input type="text" name="query" required />
            <button className="sign-btn" type="submit">contact</button>
          </form>
            </div>
        </div>
        </section>
    </>
}
export default Contact