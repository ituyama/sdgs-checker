function cmd() {
    var command = document.getElementById("message").value;

    if (command.match(/17/)) {
        command = "17 パートナーシップで目標を達成しよう"
        description = "持続可能な開発に向けて実施手段を強化し、グローバル・パートナーシップを活性化する"
        urls = "img/17.png"
    } else if (command.match(/16/)) {
        command = "16 平和と公正をすべての人に"
        description = "持続可能な開発に向けて平和で包摂的な社会を推進し、すべての人に司法へのアクセスを提供するとともに、あらゆるレベルにおいて効果的で責任ある包摂的な制度を構築する"
        urls = "img/16.png"
    } else if (command.match(/15/)) {
        command = "15 陸の豊かさも守ろう"
        description = "陸上生態系の保護、回復および持続可能な利用の推進、森林の持続可能な管理、砂漠化への対処、土地劣化の阻止および逆転、ならびに生物多様性損失の阻止を図る"
        urls = "img/15.png"
    } else if (command.match(/14/)) {
        command = "14 海の豊かさを守ろう"
        description = "海洋と海洋資源を持続可能な開発に向けて保全し、持続可能な形で利用する"
        urls = "img/14.png"
    } else if (command.match(/13/)) {
        command = "13 気候変動に具体的な対策を"
        description = "気候変動とその影響に立ち向かうため、緊急対策を取る"
        urls = "img/13.png"
    } else if (command.match(/12/)) {
        command = "12 つくる責任 つかう責任"
        description = "持続可能な消費と生産のパターンを確保する"
        urls = "img/12.png"
    } else if (command.match(/11/)) {
        command = "11 住み続けられるまちづくりを"
        description = "都市と人間の居住地を包摂的、安全、強靭かつ持続可能にする"
        urls = "img/11.png"
    } else if (command.match(/10/)) {
        command = "10 人や国の不平等をなくそう"
        description = "国内および国家間の格差を是正する"
        urls = "img/10.png"
    } else if (command.match(/9/)) {
        command = "9 産業と技術革新の基盤をつくろう"
        description = "強靭なインフラを整備し、包摂的で持続可能な産業化を推進するとともに、技術革新の拡大を図る"
        urls = "img/9.png"
    } else if (command.match(/8/)) {
        command = "8 働きがいも経済成長も"
        description = "すべての人のための持続的、包摂的かつ持続可能な経済成長、生産的な完全雇用およびディーセント・ワーク（働きがいのある人間らしい仕事）を推進する"
        urls = "img/8.png"
    } else if (command.match(/7/)) {
        command = "7 エネルギーをみんなに そしてクリーンに"
        description = "すべての人々に手ごろで信頼でき、持続可能かつ近代的なエネ ルギーへのアクセスを確保する"
        urls = "img/7.png"
    } else if (command.match(/6/)) {
        command = "6 安全な水とトイレを世界中に"
        description = "すべての人に水と衛生へのアクセスと持続可能な管理を確保する"
        urls = "img/6.png"
    } else if (command.match(/5/)) {
        command = "5 ジェンダー平等を実現しよう"
        description = "ジェンダーの平等を達成し、すべての女性と女児のエンパワーメントを図る"
        urls = "img/5.png"
    } else if (command.match(/4/)) {
        command = "4 質の高い教育をみんなに"
        description = "すべての人々に包摂的かつ公平で質の高い教育を提供し、生涯学習の機会を促進する"
        urls = "img/4.png"
    } else if (command.match(/3/)) {
        command = "3 すべての人に健康と福祉を"
        description = "あらゆる年齢のすべての人々の健康的な生活を確保し、福祉を推進する"
        urls = "img/3.png"
    } else if (command.match(/2/)) {
        command = "2 飢餓をゼロに"
        description = "飢餓に終止符を打ち、食料の安定確保と栄養状態の改善を達成するとともに、持続可能な農業を推進する"
        urls = "img/2.png"
    } else if (command.match(/1/)) {
        command = "1 貧困をなくそう"
        description = "あらゆる場所で、あらゆる形態の貧困に終止符を打つ"
        urls = "img/1.png"
    } else {
        command = "該当するものがありません。"
        description = "持続可能な社会のためにまずはそのパソコンを閉じましょう"
        urls = "http://ituyama.com/errorsearch/imgs/sorry.png"
    }

    let element = document.getElementById("command");
    element.innerHTML = command;
    let disc = document.getElementById("description");
    disc.innerHTML = description;
    let imgs = document.getElementById("img");
    imgs.innerHTML = ` <div class='card'><img src='${urls}' class='sdgsimg'></div>`;
};