const products = [
    { name: "Surfshark Vpn", price: "Rp10.000", image: "images/surfshark.jpg", description: "7 Day Premium, Private" },
    { name: "Express Vpn", price: "Rp10.000", image: "images/express.jpg", description: "7 Day Premium, Private" },
    { name: "Panda Vpn", price: "Rp10.000", image: "images/panda.jpg", description: "7 Day Premium, Private" },
    { name: "Pia Vpn", price: "Rp10.000", image: "images/pia.jpg", description: "7 Day Premium, Private" },
    { name: "Nord Vpn", price: "Rp10.000", image: "images/nord.jpg", description: "7 Day Premium, Private" },
    { name: "Capcut Pro", price: "Rp25.000", image: "images/capcut.jpg", description: "Capcut Pro 1 Bulan" },
    { name: "Alight Motion Premium", price: "Rp8.000-Rp20.000", image: "images/am.jpg", description: "1 Tahun Premium Sharing-Private" },
    { name: "Netflix Premium", price: "Rp31.000-Rp40.000", image: "images/netflix.jpg", description: "Netflix Premium 1 Bulan 1P2U / 1 Bulan 1P1U HD4K" },
    { name: "Suntik Like Ig & Tiktok", price: "Rp2.000-Rp16.000", image: "images/suntik.jpg", description: "Suntik Like Tiktok & Ig Fast Proses" }
];

const productList = document.querySelector(".product-list");
const largeProductImg = document.getElementById("large-product-img");

products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>${product.price}</strong></p>
        <a class="order-button" href="https://wa.me/6287763058955?text=Halo%2C%20saya%20ingin%20memesan%20${encodeURIComponent(product.name)}%20dengan%20harga%20${encodeURIComponent(product.price)}" target="_blank">
            Klik for Order
        </a>
    `;

    // Event listener untuk memperbesar gambar
    productDiv.querySelector("img").addEventListener("click", function () {
        largeProductImg.src = this.src;
        largeProductImg.style.display = "block";
    });

    productList.appendChild(productDiv);
});

// Header dan Headline menghilang saat scroll
let lastScrollTop = 0;
const header = document.getElementById("header");
const headlineImg = document.getElementById("headline-img");

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Header menghilang saat scroll ke bawah
    if (scrollTop > lastScrollTop) {
        header.style.transform = "translateY(-100%)";
    } else {
        header.style.transform = "translateY(0)";
    }

    // Headline menghilang saat scroll lebih dari 100px
    if (scrollTop > 100) {
        headlineImg.style.opacity = 0;
    } else {
        headlineImg.style.opacity = 1;
    }

    lastScrollTop = scrollTop;
});