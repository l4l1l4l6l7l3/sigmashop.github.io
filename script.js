// Настройка свайпера
const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Количество для каждой карточки
document.querySelectorAll(".quantity").forEach((qtyBlock) => {
  let count = 1;
  const span = qtyBlock.querySelector(".count");
  const minus = qtyBlock.querySelector(".minus");
  const plus = qtyBlock.querySelector(".plus");

  minus.addEventListener("click", () => {
    if (count > 1) {
      count--;
      span.innerText = count;
    }
  });

  plus.addEventListener("click", () => {
    count++;
    span.innerText = count;
  });

  qtyBlock.dataset.count = count;
});

// Отправка данных в бота
function addToCart(id) {
  const card = document.querySelector(`.quantity[data-id="${id}"]`);
  const qty = card.querySelector(".count").innerText;

  const tg = window.Telegram.WebApp;
  tg.sendData(
    JSON.stringify({
      productId: id,
      qty: qty,
    })
  );
  tg.close();
}
