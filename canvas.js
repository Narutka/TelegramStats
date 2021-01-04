const c = document.createElement("canvas")
window.onload = () => {
    document.body.appendChild(c)
    const canvas = document.getElementsByTagName("canvas")[0]
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#8379AE';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    FillNickname(ctx, "Хуй")

    ctx.font = '14px Times New Roman';
    ctx.fillStyle = "#000000";
    ctx.textBaseline = "bottom";
    ctx.fillText(`Титулы:`, 150, 50);

    FillLogo(ctx, "twes.jpg")

    FillXP(ctx, 240, 1000)

    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(150, 110, 130, 20);

    ctx.fillStyle = '#153A9A';
    ctx.fillRect(150, 110, 60, 20);


}

function FillNickname(ctx, nick) {
    ctx.font = '14px Times New Roman';
    ctx.fillStyle = "#ffffff";
    ctx.textBaseline = "bottom";
    ctx.fillText(`Nickname: ${nick}`, 150, 26, 150);
}

function FillLogo(ctx, logo) {
    var img = new Image();
    img.src = logo;
    img.onload = function() {
        ctx.drawImage(img, 10, 10, 120, 120);
    };
}

function FillXP(ctx, exp_user, need_exp) {
    ctx.font = '14px Times New Roman';
    ctx.fillStyle = "#000000";
    ctx.textBaseline = "bottom";
    ctx.fillText(`${exp_user}/${need_exp}`, 150, 110);
}