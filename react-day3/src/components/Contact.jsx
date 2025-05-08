import React from 'react'

function Contact() {
  return (
    <section id="contact" className='py-5 bg-white'>
        <div className="container">
            <h2 className='text-center fw-bold mb-4'>Contact us</h2>

            <div className="row justify-content-center">
                <div className='col-md-8 col-lg-6'>
                        <form className='p-4 shadow rounded bg-light'>
                            <div className="mb-3">
                                <label htmlFor="" className='form-label fw-semibold'>Name</label>
                                <input type="text" className='form-control' placeholder='Enter your name' />
                            </div>

                            <div className='mb-3'>
                                <label htmlFor="" className='form-label fw-semibold'>Message</label>
                                <textarea name="" className='form-control' placeholder='Enter your message' rows='4' id=""></textarea>
                            </div>
                            <button className='btn btn-primary w-100'>Send message</button>
                        </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact