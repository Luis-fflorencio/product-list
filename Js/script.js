function carregar() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.querySelector("#div-items");

      data.map((item) => {
        const Item = document.createElement("div");
        Item.classList.add("item");

        const img = document.createElement("img");
        img.src = item.image.desktop;
        img.classList.add("img-items");

        //inicio botão add
        const btnAdd = document.createElement("button");
        btnAdd.classList.add("button-add");
        btnAdd.id = item.category;

        const iCart = document.createElement("i");
        iCart.classList.add("icon-add");

        const iconCart = document.createElement("img");
        iconCart.src = "/assets/images/icon-add-to-cart.svg";

        const pAdd = document.createElement("p");
        pAdd.textContent = "Add to Cart";

        iCart.appendChild(iconCart);
        btnAdd.appendChild(iCart);
        btnAdd.appendChild(pAdd);
        //Fim botão add

        const pType = document.createElement("p");
        pType.textContent = item.category;
        pType.classList.add("type"); //espace-description
        pType.classList.add("espace-description");

        const pName = document.createElement("p");
        pName.textContent = item.name;
        pName.classList.add("name-item"); // espace-description
        pName.classList.add("espace-description");

        const pPrice = document.createElement("p");
        pPrice.textContent = `$${item.price}`;
        pPrice.classList.add("value"); //espace-description
        pPrice.classList.add("espace-description");

        //inicio do botão Quantidade
        const btnQuanty = document.createElement("button");
        btnQuanty.classList.add("button-quanty");
        btnQuanty.id = item.quanty;

        const iDecrement = document.createElement("i");
        iDecrement.classList.add("icon-decrement"); //icons-quanty
        iDecrement.classList.add("icons-quanty"); //icons-quanty
        iDecrement.id = "icon-decrement";

        const imgMenos = document.createElement("img");
        imgMenos.src = "/assets/images/icon-decrement-quantity.svg";

        let pQuanty = document.createElement("p");
        pQuanty.classList.add("quanty-number");
        pQuanty.id = "quanty-Number";
        pQuanty.textContent = "0";

        const iIncrement = document.createElement("i");
        iIncrement.classList.add("icon-Increment"); // icons-quanty
        iIncrement.classList.add("icons-quanty"); // icons-quanty
        iIncrement.id = "icon-increment";

        const imgMais = document.createElement("img");
        imgMais.src = "/assets/images/icon-increment-quantity.svg";

        iDecrement.appendChild(imgMenos);
        iIncrement.appendChild(imgMais);

        btnQuanty.appendChild(iDecrement);
        btnQuanty.appendChild(pQuanty);
        btnQuanty.appendChild(iIncrement);

        //Fim botão
        Item.appendChild(img);
        Item.appendChild(btnAdd);
        Item.appendChild(btnQuanty);
        Item.appendChild(pType);
        Item.appendChild(pName);
        Item.appendChild(pPrice);

        container.appendChild(Item);

        btnAdd.addEventListener("click", () => {
          btnQuanty.style.display = "flex";
          btnAdd.style.display = "none";
          const semItem = document.querySelector("#sem-item");
          const comItem = document.querySelector("#com-item");
          semItem.style.display = "none";
          comItem.style.display = "flex";

          const descriptionPai = document.querySelector(
            "#div-items-description",
          );

          const descriptionCard = document.createElement("div");
          descriptionCard.classList.add("description-add");
          descriptionCard.id = "descriptionCard";

          const nameDescription = document.createElement("p");
          nameDescription.classList.add("name-add");
          nameDescription.textContent = pName.textContent;

          const divValues = document.createElement("div");
          divValues.classList.add("div-valores");

          let quantyDescription = document.createElement("p");
          quantyDescription.classList.add("quanty-add");
          quantyDescription.classList.add("font-value");
          quantyDescription.textContent = `x0`;

          const originalValue = document.createElement("p");
          originalValue.classList.add("principal-value-add");
          originalValue.classList.add("font-value");
          originalValue.textContent = pPrice.textContent;

          let totalItem = document.createElement("p");
          totalItem.classList.add("value");
          totalItem.classList.add("font-value");
          totalItem.textContent = `0`;

          let dolar = document.createElement("p");
          dolar.textContent = "$";
          dolar.classList.add("dolar");
          dolar.classList.add("font-value");
          dolar.appendChild(totalItem);

          const btnDelete = document.createElement("button");
          btnDelete.classList.add("btn-delete");

          const iDelete = document.createElement("i");

          const imgDelete = document.createElement("img");
          imgDelete.src = "/assets/images/icon-remove-item.svg";

          divValues.appendChild(quantyDescription);
          divValues.appendChild(originalValue);
          divValues.appendChild(dolar);

          iDelete.appendChild(imgDelete);
          btnDelete.appendChild(iDelete);

          descriptionCard.appendChild(nameDescription);
          descriptionCard.appendChild(divValues);
          descriptionCard.appendChild(btnDelete);

          descriptionPai.appendChild(descriptionCard);

          let quantyConfirm = document.createElement("p");
          let valueConfirm = document.createElement("p");

          iIncrement.addEventListener("click", () => {
            pQuanty.textContent = Number(pQuanty.textContent) + 1;
            quantyDescription.textContent = `x${pQuanty.textContent}`;
            const calcTotal = Number(pQuanty.textContent) * item.price;
            totalItem.textContent = calcTotal;
            const Total = document.querySelector("#total");
            const calc = Number(Total.textContent) + item.price;
            Total.textContent = calc;
            const titleQnt = document.querySelector("#qnt-items");
            titleQnt.textContent = pQuanty.textContent;
            quantyConfirm.classList.add("quanty-confirm");
            quantyConfirm.classList.add("font-value");
            quantyConfirm.textContent = quantyDescription.textContent;
            valueConfirm.classList.add("value-confirm");
            valueConfirm.classList.add("font-value");
            valueConfirm.textContent = totalItem.textContent;
            let totalConfirm = document.querySelector("#total-confirm");
            totalConfirm.textContent = Total.textContent;
          });

          iDecrement.addEventListener("click", () => {
            if (Number(pQuanty.textContent) >= 1) {
              pQuanty.textContent = Number(pQuanty.textContent) - 1;
              quantyDescription.textContent = `x${pQuanty.textContent}`;
              totalItem.textContent =
                Number(totalItem.textContent) - item.price;
              const Total = document.querySelector("#total");
              const calc = Number(Total.textContent) - item.price;
              Total.textContent = calc;
              const titleQnt = document.querySelector("#qnt-items");
              titleQnt.textContent = pQuanty.textContent;
              quantyConfirm.classList.add("quanty-confirm");
              quantyConfirm.classList.add("font-value");
              quantyConfirm.textContent = quantyDescription.textContent;
              valueConfirm.classList.add("value-confirm");
              valueConfirm.classList.add("font-value");
              valueConfirm.textContent = totalItem.textContent;
            } else {
              pQuanty.textContent = 0;
              quantyDescription.textContent = `x${pQuanty.textContent}`;
              totalItem.textContent = 0;
            }
          });

          const cardItems = document.createElement("div");
          cardItems.classList.add("items-confirm");

          const imgConfirm = document.createElement("img");
          imgConfirm.classList.add("img-confirm");
          imgConfirm.src = item.image.thumbnail;

          const descriptionConfirm = document.createElement("div");
          descriptionConfirm.classList.add("description-confirm");

          const descriptionD = document.createElement("div");
          descriptionD.classList.add("description-d");

          const nameConfirm = document.createElement("p");
          nameConfirm.classList.add("name-confirm");
          nameConfirm.textContent = nameDescription.textContent;

          const divValuesC = document.createElement("div");
          divValuesC.classList.add("div-valores-confirm");

          const PrincipalVConfirm = document.createElement("p");
          PrincipalVConfirm.classList.add("principal-value-confirm");
          PrincipalVConfirm.classList.add("font-value");
          PrincipalVConfirm.textContent = pPrice.textContent;

          const dolarConfirm = document.createElement("p");
          dolarConfirm.classList.add("dolar-confirm");
          dolarConfirm.classList.add("font-value");
          dolarConfirm.textContent = "$";

          divValuesC.appendChild(quantyConfirm);
          divValuesC.appendChild(PrincipalVConfirm);

          descriptionD.appendChild(nameConfirm);
          descriptionD.appendChild(divValuesC);

          dolarConfirm.appendChild(valueConfirm);

          descriptionConfirm.appendChild(descriptionD);
          descriptionConfirm.appendChild(dolarConfirm);

          cardItems.appendChild(imgConfirm);
          cardItems.appendChild(descriptionConfirm);

          containerItems.appendChild(cardItems);
          // btnDelete.addEventListener("click", () => {
          //     // 1. Remove o card
          //     descriptionCard.remove();

          //     // 2. Zera total
          //     const Total = document.querySelector("#total");
          //     Total.textContent = 0;

          //     // 3. Zera contador do título
          //     const titleQnt = document.querySelector("#qnt-items");
          //     titleQnt.textContent = 0;

          //     // 4. Volta para "sem item"
          //     const semItem = document.querySelector("#sem-item");
          //     const comItem = document.querySelector("#com-item");

          //     semItem.style.display = "none";
          //     comItem.style.display = "flex";

          //     // 5. Reset do produto
          //     pQuanty.textContent = 0;
          //     btnQuanty.style.display = "none";
          //     btnAdd.style.display = "flex";
          // });

          // btnDelete.addEventListener("click", () => {
          // descriptionCard.remove();

          // // opcional: reset visual
          // btnQuanty.style.display = "none";
          // btnAdd.style.display = "flex";
          // });
        });
      });
    });
}
carregar();

const containerConfirm = document.querySelector("#container-confirmed");
const containerItems = document.querySelector("#div-items-confirm");
const btnCart = document.querySelector("#btn-confirm");

btnCart.addEventListener("click", () => {
  containerConfirm.style.display = "flex";
});
