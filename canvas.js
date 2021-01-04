const c = document.createElement("canvas")
window.onload = () => {
    document.body.appendChild(c)
    const canvas = document.getElementsByTagName("canvas")[0]
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#8379AE';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    FillNickname(ctx, "Хуй")
    FillLogo(ctx, "twes.jpg")
    FillXP(ctx, 240, 1000)
    FillStrokeXP(ctx, 240, 1000)
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
    ctx.fillText(`${exp_user}/${need_exp}`, 150, 90);
}

function FillStrokeXP(ctx, exp_user, need_xp) {
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(150, 90, 130, 20);
    var procents_exp = Math.round(((exp_user / need_xp) * 100) * 130 / 100); //шайтан формула 130 - ширина строки
    ctx.fillStyle = '#153A9A';
    ctx.fillRect(150, 90, procents_exp, 20);
}