import React from 'react'

const productDetails = [
    {
        title: "Smart watch",
        price: 923,
        image: "https://i.pinimg.com/736x/3e/a9/f3/3ea9f37d48e7ffb6e82f98a0f58c430b.jpg"
    },

    {
        title: "Sports shoe",
        price: 2304,
        image: "https://i.pinimg.com/736x/be/f8/1e/bef81e97b6ed31d8cac7fc548f0852e8.jpg"
    },

    {
        title: "Apple Mac",
        price: 123976,
        image: "https://i.pinimg.com/736x/38/65/94/386594135756b1c8572b20991e9dd963.jpg"
    },
    {
        title: "Headphoes",
        price: 12976,
        image: "https://i.pinimg.com/736x/43/15/ae/4315ae69df9daa2550203db798b0d77f.jpg"
    },
]

function Products() {
  return (
    <section id='products' className='py-5 bg-light'>
        <div className='container'>
            <h2 className='text-center fw-bold mb-5'>Our Products</h2>

            <div className='row g-4'>
                {
                    productDetails.map((item, index) => (
                        <div className='col-sm-6 col-md-4 col-lg-3' key={index}>
                                <div className='card shadow-sm h-100'>
                                        <img src={item.image} alt="" className='card-img-top' style={{height: '200px', objectFit: "cover"}} />

                                        <div className='card-body d-flex flex-column text-center'>
                                                <h5>{item.title}</h5>
                                                <h5>${item.price}</h5>
                                                <button className='btn btn-primary mt-auto'>Buy now</button>
                                        </div>
                                </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Products