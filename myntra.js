let bagitems;
onload();

function onload() {
 let bagitemsStr = localStorage.getItem('bagitems');
 bagitems = bagitemsStr ? JSON.parse(bagitemsStr) : [];
displayitemsonhomepage();
displaybagicon();
}

function addtobag(itemid) {
bagitems.push(itemid);
localStorage.setItem('bagitems', JSON.stringify(bagitems)); 
displaybagicon();
}

function displaybagicon() {
  let bagitemcountelement = document.querySelector('.bag-item-count');
  if (bagitems.length > 0) {
    bagitemcountelement.style.visibility = 'visible';
    bagitemcountelement.innerText = bagitems.length;
  } else {
    bagitemcountelement.style.visibility = 'hidden';  
  }
  
   } 

function displayitemsonhomepage() {
  let itemscontainerelement = document.querySelector('.items-container');
if (!itemscontainerelement) {
  return;
}
  let innerHTML = '';
  items.forEach(item => {
    innerHTML += 
    `<div class="item-container">
    <img class="item-image" src="${item.image}" alt="item image">
    <div class="rating">
    ${item.rating.stars} ⭐ | ${item.rating.count}
     </div>
     <div class="company-name">${item.company}</div>
     <div class="item-name">${item.item_name}</div>
     <div class="price">
       <span class="currant-price">RS ${item.current_price}</span>
       <span class="origenal-price"> ${item.original_price}</span>
       <span class="discount">(${item.discount_percentage}% off)</span>
     </div>
     <button class="btn-add-bag" onclick="addtobag(${item.id})">add to bag</button>
         </div>`
  });

  itemscontainerelement.innerHTML = innerHTML;
}

