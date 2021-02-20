LED();
// подсветка "label" желтым при наведении на их поля в форме и ретрансформация, оформлено по "id" элементам для каждого поля отдельно
function LED() {
    regEmailId.addEventListener("mouseover", function() {
        lar1.style.color = "yellow";
        this.addEventListener("mouseout", function() {
            lar1.style.color = "black";
        });
    });
    regNickId.addEventListener("mouseover", function() {
        lar2.style.color = "yellow";
        this.addEventListener("mouseout", function() {
            lar2.style.color = "black";
        });
    });
    regPassId.addEventListener("mouseover", function() {
        lar3.style.color = "yellow";
        this.addEventListener("mouseout", function() {
            lar3.style.color = "black";
        });
    });
    regCPassId.addEventListener("mouseover", function() {
        lar4.style.color = "yellow";
        this.addEventListener("mouseout", function() {
            lar4.style.color = "black";
        });
    });
    authNickId.addEventListener("mouseover", function() {
        laa1.style.color = "yellow";
        this.addEventListener("mouseout", function() {
            laa1.style.color = "black";
        });
    });
    authPassId.addEventListener("mouseover", function() {
        laa2.style.color = "yellow";
        this.addEventListener("mouseout", function() {
            laa2.style.color = "black";
        });
    });
    regEmailId.addEventListener("mouseover", function() {
        lar1.style.color = "yellow";
        this.addEventListener("mouseout", function() {
            lar1.style.color = "black";
        });
    });
}