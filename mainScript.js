'use strict';

document.addEventListener("DOMContentLoaded", function (event) {

    // Features
    const technicalButton = document.querySelectorAll("div.technicalDescription > button"),
        technicalBlock = document.querySelectorAll("div.bgTechnical"),
        technicalInfo = document.querySelectorAll(".bgTechnical");

    for (const key in technicalButton) {
        if (technicalButton.hasOwnProperty(key)) {
            const button = technicalButton[key];
            button.addEventListener('click', () => {
                technicalBlock[key].classList.toggle('hidden');
                technicalInfo[key].scrollIntoView({
                    block: "center",
                    behavior: "smooth"
                });
            });
        }
    }
    //   END Features

    // modal
    const rentButtons = document.querySelectorAll("div.rightProductBlock > div.rentProduct > button"),
        modalBlock = document.querySelector(".modalBlock"),
        closeModal = document.querySelector("div.modalBlock > div.closeModal");

    for (const key in rentButtons) {
        if (rentButtons.hasOwnProperty(key)) {
            const rentButton = rentButtons[key];

            rentButton.addEventListener('click', () => {
                document.body.className = 'overflowHidden';
                modalBlock.classList.add('openModal');
            });
        }
    }
    closeModal.addEventListener('click', () => {
        modalBlock.classList.remove('openModal');
        document.body.classList.remove('overflowHidden');
    });
    // END modal

    // mobileNav

    const buttonBurget = document.querySelector("body > header > div.mobileNav > div.buttonBurger"),
        mobileNav = document.querySelector("body > header > div.mobileNav > nav"),
        liMobileNavs = document.querySelectorAll(".mobileNav > nav > ul > li");

    buttonBurget.addEventListener('click', () => {
        mobileNav.classList.toggle('hidden');
        document.body.classList.toggle('overflowHidden');
    });

    for (const key in liMobileNavs) {
        if (liMobileNavs.hasOwnProperty(key)) {
            const liMobileNav = liMobileNavs[key];
            liMobileNav.addEventListener('click', () => {
                mobileNav.classList.toggle('hidden');
                document.body.classList.toggle('overflowHidden');
            });
        }
    }
    // END mobileNav

    // Product
    const productContentModal = document.querySelector(".productContentModal");

    const productUrl = document.querySelectorAll("section"),
        productName = document.querySelectorAll("div.rightProductBlock > .nameProduct"),
        productPrice = document.querySelectorAll("div.rightProductBlock > div.priceProduct > span"),
        mainImg = document.querySelectorAll(".mainImg");


    const dataProduct = {
        0: {
            dataProductNumber: 0,
            imgMainProduct: mainImg[0].src,
            urlProduct: '#' + productUrl[1].id,
            nameProduct: productName[0].textContent,
            quantityProduct: 1,
            priceProduct: +productPrice[0].textContent,
            priceСurrencyProduct: ' грн.',
        },
        1: {
            dataProductNumber: 1,
            imgMainProduct: mainImg[1].src,
            urlProduct: '#' + productUrl[2].id,
            nameProduct: productName[1].textContent,
            quantityProduct: 1,
            priceProduct: +productPrice[1].textContent,
            priceСurrencyProduct: ' грн.',
        },
        2: {
            dataProductNumber: 2,
            imgMainProduct: mainImg[2].src,
            urlProduct: '#' + productUrl[3].id,
            nameProduct: productName[2].textContent,
            quantityProduct: 1,
            priceProduct: +productPrice[2].textContent,
            priceСurrencyProduct: ' грн.',
        },
        3: {
            dataProductNumber: 3,
            imgMainProduct: mainImg[3].src,
            urlProduct: '#' + productUrl[5].id,
            nameProduct: productName[3].textContent,
            quantityProduct: 1,
            priceProduct: +productPrice[3].textContent,
            priceСurrencyProduct: ' грн.',
        },
        4: {
            dataProductNumber: 4,
            imgMainProduct: mainImg[4].src,
            urlProduct: '#' + productUrl[6].id,
            nameProduct: productName[4].textContent,
            quantityProduct: 1,
            priceProduct: +productPrice[4].textContent,
            priceСurrencyProduct: ' грн.',
        },
        5: {
            dataProductNumber: 5,
            imgMainProduct: mainImg[5].src,
            urlProduct: '#' + productUrl[7].id,
            nameProduct: productName[5].textContent,
            quantityProduct: 1,
            priceProduct: +productPrice[5].textContent,
            priceСurrencyProduct: ' грн.',
        },
        6: {
            dataProductNumber: 6,
            imgMainProduct: mainImg[6].src,
            urlProduct: '#' + productUrl[9].id,
            nameProduct: productName[6].textContent,
            quantityProduct: 1,
            priceProduct: +productPrice[6].textContent,
            priceСurrencyProduct: ' грн.',
        },
        7: {
            dataProductNumber: 7,
            imgMainProduct: mainImg[7].src,
            urlProduct: '#' + productUrl[10].id,
            nameProduct: productName[7].textContent,
            quantityProduct: 1,
            priceProduct: +productPrice[7].textContent,
            priceСurrencyProduct: ' грн.',
        },
        8: {
            dataProductNumber: 8,
            imgMainProduct: mainImg[8].src,
            urlProduct: '#' + productUrl[11].id,
            nameProduct: productName[8].textContent,
            quantityProduct: 1,
            priceProduct: +productPrice[8].textContent,
            priceСurrencyProduct: ' грн.',
        },
        9: {
            dataProductNumber: 9,
            imgMainProduct: mainImg[9].src,
            urlProduct: '#' + productUrl[12].id,
            nameProduct: productName[9].textContent,
            quantityProduct: 1,
            priceProduct: +productPrice[9].textContent,
            priceСurrencyProduct: ' грн.',
        },
        10: {
            dataProductNumber: 10,
            imgMainProduct: mainImg[10].src,
            urlProduct: '#' + productUrl[13].id,
            nameProduct: productName[10].textContent,
            quantityProduct: 1,
            priceProduct: +productPrice[10].textContent,
            priceСurrencyProduct: ' грн.',
        },
        11: {
            dataProductNumber: 11,
            imgMainProduct: mainImg[11].src,
            urlProduct: '#' + productUrl[14].id,
            nameProduct: productName[11].textContent,
            quantityProduct: 1,
            priceProduct: +productPrice[11].textContent,
            priceСurrencyProduct: ' грн.',
        },
        12: {
            dataProductNumber: 12,
            imgMainProduct: mainImg[12].src,
            urlProduct: '#' + productUrl[15].id,
            nameProduct: productName[12].textContent,
            quantityProduct: 1,
            priceProduct: +productPrice[12].textContent,
            priceСurrencyProduct: ' грн.',
        }
    };

    for (let i = 0; i < rentButtons.length; i++) {
        rentButtons[i].addEventListener('click', function openProduct() {
            addProduct(dataProduct[i]);
            rentButtons[i].removeEventListener('click', openProduct);
        });
    }

    function addProduct(products) {
        let htmlCode = `
        <div class="product" data-cart-product-i="${products.dataProductNumber}">
            <div class="imgProductModal">
                <div class="imgProduct" style="background-image:url(${products.imgMainProduct});"></div>
            </div>
            <div class="nameProductModal"><a href="${products.urlProduct}">${products.nameProduct}</a></div>
            <div class="desctProductModal">
                <span class="minus" data-minus><img src="img/arrows_circle_minus.svg" alt=""></span>
                <span class="quantity">${products.quantityProduct}</span>
                <span class="plus" data-plus><img src="img/arrows_circle_plus.svg" alt=""></span>
            </div>
            <div class="priceProductModal">${(products.quantityProduct * products.priceProduct) + products.priceСurrencyProduct}</div>
            <div class="delProductModal"><img src="img/arrows_circle_remove.svg" alt=""></div>
            <div class="lineProduct"></div>
            </div>`;
        productContentModal.insertAdjacentHTML('afterBegin', htmlCode);

        let listProduct = document.querySelectorAll(".productContentModal > .product");
        const pluss = document.querySelectorAll(".desctProductModal > span.plus"),
            minuss = document.querySelectorAll(".desctProductModal > span.minus"),
            deleteProductList = document.getElementsByClassName('delProductModal');

        let sumePrice = [];
        sumPrice();

        const quantityProduct = document.querySelectorAll(".desctProductModal > span.quantity"),
            priceProductModal = document.querySelectorAll(".priceProductModal");

        for (let i = 0; i < 1; i++) {
            pluss[i].addEventListener('click', (e) => {
                ++dataProduct[listProduct[i].dataset.cartProductI].quantityProduct;
                quantityProduct[i].textContent = dataProduct[listProduct[i].dataset.cartProductI].quantityProduct;
                priceProductModal[i].textContent = dataProduct[listProduct[i].dataset.cartProductI].quantityProduct * dataProduct[listProduct[i].dataset.cartProductI].priceProduct + ' грн.';
                sumPrice();
            });
        }
        for (let i = 0; i < 1; i++) {
            minuss[i].addEventListener('click', () => {
                --dataProduct[listProduct[i].dataset.cartProductI].quantityProduct;
                quantityProduct[i].textContent = dataProduct[listProduct[i].dataset.cartProductI].quantityProduct;
                priceProductModal[i].textContent = dataProduct[listProduct[i].dataset.cartProductI].quantityProduct * dataProduct[listProduct[i].dataset.cartProductI].priceProduct + ' грн.';
                sumPrice();
            });
        }

        for (let i = 0; i < 1; i++) {
            deleteProductList[i].addEventListener('click', () => {
                listProduct[i].remove();
                sumPrice();
                for (let i = 0; i < 1; i++) {
                    rentButtons[listProduct[i].dataset.cartProductI].addEventListener('click', function openProduct() {
                        addProduct(dataProduct[listProduct[i].dataset.cartProductI]);
                        rentButtons[listProduct[i].dataset.cartProductI].removeEventListener('click', openProduct);
                    });
                }
            });
        }

        function sumPrice() {
            const allPriceProductModal = document.querySelectorAll(".priceProductModal"),
                priceAll = document.querySelector("body > footer > div.modalBlock.openModal > div.contentModal > div.bottomContentModal > div > span:nth-child(2) > span");

            for (const i in allPriceProductModal) {
                if (allPriceProductModal.hasOwnProperty(i)) {
                    sumePrice.push(+allPriceProductModal[i].textContent.replace(/\D+/g, ""));
                }
            }
            let totalsumePrice = sumePrice.reduce((a, b) => a + b, 0);

            priceAll.textContent = totalsumePrice;
            sumePrice = [];
        }

        const nameProductModals = document.querySelectorAll(".nameProductModal");

        for (const key in nameProductModals) {
            if (nameProductModals.hasOwnProperty(key)) {
                const nameProductModal = nameProductModals[key];
                nameProductModal.addEventListener('click', () => {
                    modalBlock.classList.remove('openModal');
                    document.body.classList.remove('overflowHidden');
                });

            }
        }

        const messageProduct = document.querySelector("#messageProduct");

        let productFormArr = [];

        for (const key in listProduct) {
            if (listProduct.hasOwnProperty(key)) {
                const product = listProduct[key];
                let arr = '<b>№</b> ' + (1 + +key) + ' <b>Название:</b> ' + (product.querySelector(".nameProductModal > a").textContent) + ' <b>Количество:</b> ' + (product.querySelector(".desctProductModal > span.quantity").textContent) + ' <b>Стоимость:</b> ' + (product.querySelector(".priceProductModal").textContent) + '<br>';
                productFormArr.push(arr);
            }
        }
        let productForm = productFormArr.join(' ');
        messageProduct.value = productForm;
        productFormArr = [];



    }
    // END Product

    // Slider

    const imgProductBlocks = document.querySelectorAll(".imgProductBlock"),
        mainImgProducts = document.querySelectorAll(".mainImgProduct"),
        modalBlockImg = document.querySelector(".modalBlockImg"),
        closeModalImg = document.querySelector("div.modalBlockImg > div.closeModalImg"),
        contentModalImg = document.querySelector(".modalBlockImg > div.contentModalImg > img");

    for (let i = 0; i < imgProductBlocks.length; i++) {
        const imgProductBlock = imgProductBlocks[i];
        imgProductBlock.addEventListener('click', (e) => {
            let targetUrlImg = e.target;
            if (targetUrlImg.src != undefined) {
                mainImg[i].src = targetUrlImg.src;
            }
        });
    }

    // modalFullImg
    for (const key in mainImgProducts) {
        if (mainImgProducts.hasOwnProperty(key)) {
            const mainImgProduct = mainImgProducts[key];
            mainImgProduct.addEventListener('click', (e) => {
                let targetUrlImg = e.target;
                if (targetUrlImg.src != undefined) {
                    contentModalImg.src = targetUrlImg.src;
                }
                document.body.className = 'overflowHidden';
                modalBlockImg.classList.add('openModalImg');
            });
        }
    }
    closeModalImg.addEventListener('click', () => {
        modalBlockImg.classList.remove('openModalImg');
        document.body.classList.remove('overflowHidden');
    });
    // END modalFullImg

    // END Slider

    // sendForm
    const ajaxSend = (formData) => {
        fetch('mail.php', { // файл-обработчик 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // отправляемые данные 
                },
                body: JSON.stringify(formData)
            })
            .then(response => alert('Повідомлення відправлено'))
            .catch(error => console.error(error))
    };

    const forms = document.getElementsByTagName('form');
    for (let i = 0; i < forms.length; i++) {
        forms[i].addEventListener('submit', function (e) {
            e.preventDefault();

            let formData = new FormData(this);
            formData = Object.fromEntries(formData);
            ajaxSend(formData);
            this.reset();
        });
    };

    // END sendForm

});