const createNav = () => {
    let nav = document.querySelector('.navbar');

    

    nav.innerHTML = `
    <div class="nav">
    <h2><a class="brand-logo" alt=""> Urban Closet🕊 </a></h2>
     <div class="nav-items">
         <div class="search">
             <input type="text" class="search-box" placeholder="search brand, product">
             <button class="search-btn"><a href="404.html" class="link_btn">search</a></button>
         </div>
     </div>
 </div>
 <ul class="links-container">
     <li class="link-item"><a href="home.html" class="link">Home</a></li>
     <li class="link-item"><a href="product.html" class="link">Products</a></li>
     <li class="link-item"><a href="Women.html" class="link">Women</a></li>
     <li class="link-item"><a href="Men.html" class="link">Men</a></li>
     <li class="link-item"><a href="index.html" class="link">Login</a></li>
 </ul>
    `;
}
createNav();