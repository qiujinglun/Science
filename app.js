document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector("#flowcs");
    const maxScroll = 500; // 滾動 0~300px 時完成顏色漸變

    // 初始顏色 
    const startColor = { r: 248, g: 213, b: 219 };//rgb(248, 213, 219)
    // 目標顏色 (紫粉色)
    const endColor = { r: 168, g: 85, b: 247 }; // #a855f7

    window.addEventListener("scroll", () => {
        let scroll = Math.min(window.scrollY, maxScroll); // 不超過 maxScroll
        let t = scroll / maxScroll; // 0~1 的比例

        // 計算漸變顏色
        let r = Math.round(startColor.r + (endColor.r - startColor.r) * t);
        let g = Math.round(startColor.g + (endColor.g - startColor.g) * t);
        let b = Math.round(startColor.b + (endColor.b - startColor.b) * t);

        navbar.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const navbartext = document.querySelector("#textcolor");
    const maxScroll = 500; // 滾動 0~300px 時完成顏色漸變

    // 初始顏色 
    const startColor = { r: 250, g: 105, b: 105 };// rgb(250, 105, 105);
    // 目標顏色 (紫粉色)
    const endColor = { r: 79, g: 250, b: 116 }; // rgb(79, 250, 116);

    window.addEventListener("scroll", () => {
        let scroll = Math.min(window.scrollY, maxScroll); // 不超過 maxScroll
        let t = scroll / maxScroll; // 0~1 的比例

        // 計算漸變顏色
        let r = Math.round(startColor.r + (endColor.r - startColor.r) * t);
        let g = Math.round(startColor.g + (endColor.g - startColor.g) * t);
        let b = Math.round(startColor.b + (endColor.b - startColor.b) * t);

        navbartext.style.color = `rgb(${r}, ${g}, ${b})`;
    });
});
