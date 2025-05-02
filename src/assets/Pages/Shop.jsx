import React, { useState } from "react";
import Footer from "../Components/Footer";
import Productcard from "../Components/Productcard";

const allProducts = [
  // Men Products
  { id: 1, image: "/Images/men1.jpg", title: "Men's T-Shirt", price: "$29.99", category: "Men" },
  { id: 2, image: "/Images/men2.jpg", title: "Men's Hoodie", price: "$49.99", category: "Men" },
  { id: 3, image: "/Images/men3.jpg", title: "Men's Leather Jacket", price: "$89.99", category: "Men" },
  { id: 4, image: "/Images/men4.jpg", title: "Men's Casual Shoes", price: "$59.99", category: "Men" },
  { id: 5, image: "/Images/men5.jpg", title: "Men's Hoodie", price: "$49.99", category: "Men" },
  { id: 6, image: "/Images/men6.jpg", title: "Men's Polo T-Shirt", price: "$29.99", category: "Men" },
  { id: 7, image: "/Images/men7.jpg", title: "Men's Sneakers", price: "$69.99", category: "Men" },
  { id: 8, image: "/Images/men8.jpg", title: "Men's Blazer", price: "$99.99", category: "Men" },
  { id: 9, image: "/Images/men9.jpg", title: "Men's Bomber Jacket", price: "$79.99", category: "Men" },
  { id: 10, image: "/Images/men10.jpg", title: "Men's Chinos", price: "$39.99", category: "Men" },
  { id: 11, image: "/Images/men11.jpg", title: "Men's Turtleneck Sweater", price: "$54.99", category: "Men" },
  { id: 12, image: "/Images/men12.jpg", title: "Men's Running Shoes", price: "$64.99", category: "Men" },
  { id: 13, image: "/Images/men13.jpg", title: "Men's Trench Coat", price: "$109.99", category: "Men" },
  { id: 14, image: "/Images/men14.jpg", title: "Men's Graphic T-Shirt", price: "$24.99", category: "Men" },
  { id: 15, image: "/Images/men15.jpg", title: "Men's Denim Jacket", price: "$74.99", category: "Men" },
  { id: 16, image: "/Images/men16.jpg", title: "Men's Cargo Pants", price: "$42.99", category: "Men" },
  { id: 17, image: "/Images/men17.jpg", title: "Men's Suede Loafers", price: "$69.99", category: "Men" },
  { id: 18, image: "/Images/men18.jpg", title: "Men's Classic Watch", price: "$129.99", category: "Men" },

  // Women Products
  { id: 19, image: "/Images/women1.jpg", title: "Women's Floral Dress", price: "$39.99", category: "Women" },
  { id: 20, image: "/Images/women2.jpg", title: "Women's Skinny Jeans", price: "$49.99", category: "Women" },
  { id: 21, image: "/Images/women3.jpg", title: "Women's Leather Handbag", price: "$89.99", category: "Women" },
  { id: 22, image: "/Images/women4.jpg", title: "Women's High Heels", price: "$59.99", category: "Women" },
  { id: 23, image: "/Images/women5.jpg", title: "Women's Winter Coat", price: "$109.99", category: "Women" },
  { id: 24, image: "/Images/women6.jpg", title: "Women's Blouse", price: "$34.99", category: "Women" },
  { id: 25, image: "/Images/women7.jpg", title: "Women's Maxi Skirt", price: "$44.99", category: "Women" },
  { id: 26, image: "/Images/women8.jpg", title: "Women's Sunglasses", price: "$24.99", category: "Women" },
  { id: 27, image: "/Images/women9.jpg", title: "Women's Trench Coat", price: "$99.99", category: "Women" },
  { id: 28, image: "/Images/women10.jpg", title: "Women's Crop Top", price: "$29.99", category: "Women" },
  { id: 29, image: "/Images/women11.jpg", title: "Women's Platform Sandals", price: "$54.99", category: "Women" },
  { id: 30, image: "/Images/women12.jpg", title: "Women's Knit Sweater", price: "$64.99", category: "Women" },
  { id: 31, image: "/Images/women13.jpg", title: "Women's Denim Jacket", price: "$74.99", category: "Women" },
  { id: 32, image: "/Images/women14.jpg", title: "Women's Yoga Leggings", price: "$42.99", category: "Women" },
  { id: 33, image: "/Images/women15.jpg", title: "Women's Elegant Watch", price: "$129.99", category: "Women" },
  { id: 34, image: "/Images/women16.jpg", title: "Women's Wide Brim Hat", price: "$34.99", category: "Women" },
  { id: 35, image: "/Images/women17.jpg", title: "Women's Ruffle Blouse", price: "$37.99", category: "Women" },
  { id: 36, image: "/Images/women18.jpg", title: "Women's Bucket Bag", price: "$69.99", category: "Women" },

  // Kids Products
  { id: 37, image: "/Images/kids1.jpg", title: "Kids' T-Shirt", price: "$19.99", category: "Kids" },
  { id: 38, image: "/Images/kids2.jpg", title: "Kids' Jeans", price: "$29.99", category: "Kids" },
  { id: 39, image: "/Images/kids3.jpg", title: "Kids' Hoodie", price: "$34.99", category: "Kids" },
  { id: 40, image: "/Images/kids4.jpg", title: "Kids' Sneakers", price: "$39.99", category: "Kids" },
  { id: 41, image: "/Images/kids5.jpg", title: "Kids' Jacket", price: "$49.99", category: "Kids" },
  { id: 42, image: "/Images/kids6.jpg", title: "Kids' Cap", price: "$14.99", category: "Kids" },
  { id: 43, image: "/Images/kids7.jpg", title: "Kids' Skirt", price: "$24.99", category: "Kids" },
  { id: 44, image: "/Images/kids8.jpg", title: "Kids' Sandals", price: "$27.99", category: "Kids" },
  { id: 45, image: "/Images/kids9.jpg", title: "Kids' Pajama Set", price: "$22.99", category: "Kids" },
  { id: 46, image: "/Images/kids10.jpg", title: "Kids' Backpack", price: "$34.99", category: "Kids" },
  { id: 47, image: "/Images/kids11.jpg", title: "Kids' Graphic Tee", price: "$18.99", category: "Kids" },
  { id: 48, image: "/Images/kids12.jpg", title: "Kids' Raincoat", price: "$44.99", category: "Kids" },
  { id: 49, image: "/Images/kids13.jpg", title: "Kids' Formal Shirt", price: "$25.99", category: "Kids" },
  { id: 50, image: "/Images/kids14.jpg", title: "Kids' Shorts", price: "$21.99", category: "Kids" },
  { id: 51, image: "/Images/kids15.jpg", title: "Kids' Party Dress", price: "$54.99", category: "Kids" },
  { id: 52, image: "/Images/kids16.jpg", title: "Kids' Leggings", price: "$20.99", category: "Kids" },
  { id: 53, image: "/Images/kids17.jpg", title: "Kids' Wool Sweater", price: "$29.99", category: "Kids" },
  { id: 54, image: "/Images/kids18.jpg", title: "Kids' Beanie", price: "$12.99", category: "Kids" },

  // General / All
  { id: 55, image: "/Images/i.jpg", title: "Stylish Shirt", price: "$49.99", category: "All" },
  { id: 56, image: "/Images/2..jpg", title: "Denim Jacket", price: "$89.99", category: "All" },
  { id: 57, image: "/Images/3.jpg", title: "Casual Dress", price: "$69.99", category: "All" },
  { id: 58, image: "/Images/meeting-2.jpg", title: "Formal Blazer", price: "$109.99", category: "All" }
];


const categories = ["All", "Men", "Women", "Kids"];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  return (
    <>
      <div className="container py-5">
        
        <div className="row">
          {/* Sidebar for Categories */}
          <div className="col-md-3 mb-4">
            <div className="bg-light p-3 rounded shadow-sm">
              <h5 className="mb-3">Categories</h5>
              <ul className="list-unstyled">
                {categories.map((cat, index) => (
                  <li key={index} className="mb-2">
                    <button
                      className={`btn btn-sm w-100 text-start ${selectedCategory === cat ? "btn-info text-white" : "btn-outline-secondary"}`}
                      onClick={() => setSelectedCategory(cat)}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Product List */}
          <div className="col-md-9">
            <div className="row">
              {filteredProducts.map((product) => (
                <Productcard
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                />
              ))}
              {filteredProducts.length === 0 && (
                <p className="text-muted text-center">No products found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
