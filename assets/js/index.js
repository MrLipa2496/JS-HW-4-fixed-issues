// 1 Function Expression

console.log("Ex1");
const isWorkingAgePerson = function (age) {
  return age >= 16 && age < 64;
};

console.log(isWorkingAgePerson(20));
console.log(isWorkingAgePerson(4));
console.log(isWorkingAgePerson(88));

// 2 Function Expression

console.log("Ex2");
const checkMultiplicity = function (num1, num2) {
  return num1 % num2 === 0;
};

console.log(checkMultiplicity(25, 5));
console.log(checkMultiplicity(15, 3));
console.log(checkMultiplicity(15, 5));
console.log(checkMultiplicity(15, 4));

// 3 Function Declaretion

console.log("Ex3");
function triangleExistence(side1, side2, side3) {
  if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
    console.log("Введено від'ємне число або 0!!!");
  }
  return (
    side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1
  );
}

console.log(triangleExistence(6, 8, 10));
console.log(triangleExistence(2, 2, 5));
console.log(triangleExistence(0, -1, 2));

// 4 Function Declaretion

console.log("Ex4");

function coneArea(radius, creatingSide) {
  if (radius <= 0 || creatingSide <= 0) {
    console.log("Введено від'ємне число або 0!!!");
    return false;
  }
  const S = Math.PI * radius * (radius + creatingSide);
  return S;
}

console.log(coneArea(5, 7));
console.log(coneArea(-5, 7));

// 5 Function Declaretion

console.log("Ex5");

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(2));
console.log(isPrime(4));
console.log(isPrime(17));
console.log(isPrime(18));

// 6 Function Declaretion

function cardProduct(
  imgUrl = "https://cdn-icons-png.flaticon.com/512/1170/1170679.png",
  name,
  description,
  price,
  discountPrice
) {
  if (discountPrice) {
    discount = Math.round(((price - discountPrice) / price) * 100);
  }
  return `
  <article class="card">
  
      <img
        class="card-img"
        src="${imgUrl}"
        alt=""
      />
        <h2 class="name">${name}</h2>
        <p class="description">${description}</p>
          <div class="product-price">
                ${
                  discountPrice
                    ? `
                    </p>
                    <p class="price-original"><s>$${price.toFixed(2)}</s><br>
                    <p class="price-discounted">$${discountPrice.toFixed(2)}</p>
                    <p class="discount-percentage">Discount: ${discount}% off </p>
                     `
                    : `
                    <p class="price">$${price.toFixed(2)}</p>
                      `
                }
          </div>
          <button class = "btn">BUY NOW</button>
    </article>
  `;
}

const productCardHtmlIphone15 = cardProduct(
  "https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/230913074010717626/231108150046076891.png@webp",
  "iPhone 15 Pro",
  "iPhone 15 Pro, 256 ГБ, Black Titanium",
  1330,
  1230
);

const productCardHtmlIphone13 = cardProduct(
  "https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/210915083528144256/210927160010235057.png@webp",
  "iPhone 13",
  "iPhone 13, 256 ГБ, Pink, (MLQ83)",
  830,
  755
);

const productCardHtmlIphone15NoneDiscount = cardProduct(
  "https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/230913074010717626/231108150046076891.png@webp",
  "iPhone 15 Pro",
  "iPhone 15 Pro, 256 ГБ, Black Titanium",
  1330
);

const productCardHtmlIphone13NoneDiscount = cardProduct(
  "https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/210915083528144256/210927160010235057.png@webp",
  "iPhone 13",
  "iPhone 13, 256 ГБ, Pink, (MLQ83)",
  830
);

document.write(productCardHtmlIphone15);
document.write(productCardHtmlIphone13);
document.write(productCardHtmlIphone15NoneDiscount);
document.write(productCardHtmlIphone13NoneDiscount);
document.write(productCardHtmlIphone15);
document.write(productCardHtmlIphone13);
document.write(productCardHtmlIphone15NoneDiscount);
document.write(productCardHtmlIphone13NoneDiscount);
