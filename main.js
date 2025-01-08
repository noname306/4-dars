const ism = prompt("Ismingizni kiriting:");
const harf = prompt("Bironta harf kiriting:");

if (ism.includes(harf)) {
  alert(`${ism} ismining ichida ${harf} harfi mavjud`);
} else {
  alert(`${ism} ismining ichida ${harf} harfi mavjud emas`);
}
