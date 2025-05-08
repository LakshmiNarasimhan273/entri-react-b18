import React from 'react';

const products = [
  {
    title: "Smart Watch",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1606813902597-b7ac9eaf1c51?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Wireless Earbuds",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1585386959984-a4155222d42d?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Bluetooth Speaker",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1570813096149-30c25f3f97f1?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "DSLR Camera",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1555617117-08fda9f98d9d?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Gaming Mouse",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1599058917211-bd6c49ebced5?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Fitness Tracker",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Laptop Stand",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1612832021557-1c7dbfe04ce0?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "4K Monitor",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=600&q=80"
  }
];

const AllProducts = () => {
  return (
    <section id="products" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Explore Our Products</h2>
        <div className="row g-4">
          {products.map((product, index) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
              <div className="card shadow-sm h-100">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column text-center">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="fw-semibold">${product.price.toFixed(2)}</p>
                  <button className="btn btn-primary mt-auto">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
