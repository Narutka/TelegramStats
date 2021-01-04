var can = SetupCanvas("Макс", 'twes.jpg', 370, 1000, 7, 8)

function SetupCanvas(nick, logo, exp_user, need_xp, ex_lvl, next_lvl) {
    const c = document.createElement("canvas")
    return $(document).ready(function() {
        document.body.appendChild(c)
        const canvas = document.getElementsByTagName("canvas")[0]
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#8379AE';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        FillNickname(ctx, nick)
        FillXP(ctx, exp_user, need_xp);
        FillStrokeXP(ctx, exp_user, need_xp);
        FillExLvl(ctx, ex_lvl);
        FillNextLvl(ctx, next_lvl);
        var img = new Image();
        img.src = logo;
        img.onload = function() {
            ctx.drawImage(img, 10, 10, 120, 120);

        };
        const url = canvas.toDataURL();
        console.log(url)



    })
}



function FillNickname(ctx, nick) {
    ctx.font = '14px Times New Roman';
    ctx.fillStyle = "#ffffff";
    ctx.textBaseline = "bottom";
    ctx.fillText(`Nickname: ${nick}`, 150, 26, 150);
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

function FillExLvl(ctx, ex_lvl) {
    ctx.fillStyle = '#000000';
    ctx.fillText(`${ex_lvl}`, 150, 130)
}

function FillNextLvl(ctx, next_lvl) {
    ctx.fillStyle = '#000000';
    ctx.fillText(`${next_lvl}`, 270, 130)
}