// 导航
var titleData = ['品牌故事', '产品系列', '明星产品', '品牌资讯'];
var ul = document.querySelector('.ulist');
for (let i = 0; i < titleData.length; i++) {
    var li = document.createElement('li');
    li.innerHTML = titleData[i]
    ul.appendChild(li);
}

// 现代东方美
var model = document.querySelector('.model');
var divModel1 = document.createElement('div');
model.appendChild(divModel1);
divModel1.classList.add('paragraph1')
//   文字部分
var parData1 = ['MODERN ORIENTAL', '百雀羚来自东方，源于中国，', '讲究东方美学的平衡和谐之道。', '相信对于肌肤，强施不如调养，雕琢不如自然。', '以草本自然能量，滋润养护肌肤。', '让属于你的现代东方之美，自然散发。']
var paragraph1 = document.querySelector('.paragraph1');
var h11 = document.createElement('h1');
h11.innerHTML = '现代东方美'
paragraph1.appendChild(h11);

for (let i = 0; i < parData1.length; i++) {
    var p1 = document.createElement('p');
    p1.innerHTML = parData1[i]
    paragraph1.appendChild(p1);
}
//   视频
var divModel2 = document.createElement('div');
model.appendChild(divModel2);
divModel2.classList.add('video1');

var video11=document.createElement('video')
divModel2.appendChild(video11);
video11.setAttribute('src','https://qiniu-xpc0.xpccdn.com/5b727457523d2.mp4')
video11.setAttribute('controls','controls')
video11.setAttribute('controlspreload','none')
video11.style.width='500px'
video11.style.height='280px'

// 草本生长
var grow = document.querySelector('.grow');
var divGrow1 = document.createElement('div');
grow.appendChild(divGrow1);
divGrow1.classList.add('paragraph2');
//   文字部分
var parData2 = ['NATURAL SHEER POWER', '天然不刺激，源自天然好产地。', '中国北纬30度，气候适宜，降水丰沛，沿线分布着众多国家级自然保护区，包括神农架、九寨沟、黄山等，植被丰富，自然景观荟萃。', '中国北纬30度，以其独特的地理气候，孕育众多珍稀草本植物，成为十分适合草本生长的“黄金纬度”。']
var paragraph2 = document.querySelector('.paragraph2');
var h12 = document.createElement('h1');
h12.innerHTML = '百雀羚北纬30度 草本生长黄金纬度'
paragraph2.appendChild(h12);

for (let i = 0; i < parData2.length; i++) {
    var p2 = document.createElement('p');
    p2.innerHTML = parData2[i]
    paragraph2.appendChild(p2);
}
//   视频
var divGrow2 = document.createElement('div');
grow.appendChild(divGrow2);
divGrow2.classList.add('video2');

var video12=document.createElement('video')
divGrow2.appendChild(video12);
video12.setAttribute('src','https://qiniu-xpc0.xpccdn.com/5b7274cec41b9.mp4')
video12.setAttribute('controls','controls')
video12.setAttribute('controlspreload','none')
video12.style.width='500px'
video12.style.height='280px'

// 国礼百雀羚
var gift = document.querySelector('.gift');
var divGift1 = document.createElement('div');
gift.appendChild(divGift1);
divGift1.classList.add('paragraph3');
//   文字部分
var parData3 = ['民国时代百雀羚“宋氏三姐妹”青睐，推荐给外宾使用', '胡锦涛主席偕同夫人将百雀羚作“国礼”赠予外宾', '习近平主席偕同彭丽媛女士出访将百雀羚作“国礼”']
var paragraph3 = document.querySelector('.paragraph3');
var h13 = document.createElement('h1');
h13.innerHTML = '国礼百雀羚'
paragraph3.appendChild(h13);

for (let i = 0; i < parData3.length; i++) {
    var p3 = document.createElement('p');
    p3.innerHTML = parData3[i]
    paragraph3.appendChild(p3);
}

// 轮播图
var img = document.querySelector('.img');
var ulist1 = document.createElement('ul');
img.appendChild(ulist1);
ulist1.classList.add('imgdiv');
var imgData=['http://www.pechoin.com/wp-content/uploads/2018/09/%E8%8D%89%E6%9C%AC%E5%93%81%E7%89%8C%E6%95%85%E4%BA%8B-1_02.jpg','http://www.pechoin.com/wp-content/uploads/2018/09/%E8%8D%89%E6%9C%AC%E5%93%81%E7%89%8C%E6%95%85%E4%BA%8B-2_02.jpg','http://www.pechoin.com/wp-content/uploads/2018/09/%E8%8D%89%E6%9C%AC%E5%93%81%E7%89%8C%E6%95%85%E4%BA%8B-3_02.jpg']
for (let i = 0; i < imgData.length; i++) {
    var li1 = document.createElement('li');
    ulist1.appendChild(li1);
    var img2 = document.createElement('img');
    li1.appendChild(img2);
    img2.setAttribute('src',imgData[i])
}

var ulist2 = document.createElement('ul');
img.appendChild(ulist2);
ulist2.classList.add('btn');
for (let i = 0; i < 3; i++) {
    var li2 = document.createElement('li');
    ulist2.appendChild(li2);
}
function aroungImg(imglist) {
    //找到所有的事件源
    this.btn = document.querySelectorAll(imglist + ' .btn li');
    // 找到要操作的图片
    this.imglist = document.querySelectorAll(imglist + ' .imgdiv li');
    //自动轮播时间间隔
    this.autotime = 2000;
    //定时器的id
    this.sid;
    //是否开启自动轮播
    this.auto = false;

    this.n = 0;

    //基本功能
    this.start();
}
//点击切换效果
aroungImg.prototype.start = function () {
    let _this = this;
    for (let ind = 0; ind < _this.btn.length; ind++) {
        _this.btn[ind].onmouseover = function (event) {
            // console.log(event);
            event && event.isTrusted && _this.sid && clearInterval(_this.sid);
            // 把所有的图片隐藏
            for (const img of _this.imglist) {
                img.style.display = 'none';
            }
            // 当前图片显示出来
            _this.imglist[ind].style.display = 'block';
            _this.n = ind + 1;
        }
        //重新开启自动轮播
        _this.btn[ind].onmouseout = function (event) {
            _this.auto && _this.autoplay();
        }
    }
    return _this;
}
//修改时间
aroungImg.prototype.autotime1 = function (time) {
    this.autotime = time;
    return this;
}
//自动轮播
aroungImg.prototype.autoplay = function () {
    let _this = this;
    _this.auto = true;

    _this.sid = setInterval(function () {
        _this.btn[_this.n++ % _this.btn.length].onmouseover();
    }, _this.autotime);
    return _this;
}
window.onload = function () {
    let a = new aroungImg('.img').autotime1(5000).autoplay();
    console.log(a);
    new aroungImg('.img1');
}

function log() {
    console.log(...arguments);
}

log(1, 2, 3);
console.log(1, 2, 3);

var o = {
    fn: function () {
        console.log(this.fn)
    }
}

// 明星代言
var fullink = document.querySelector('.full-link');
var div1 = document.createElement('div');
fullink.appendChild(div1);
div1.classList.add('div1');
//   文字部分
var div11 = document.querySelector('.div1');
var h2 = document.createElement('h1');
h2.innerHTML = '明星代言'
div11.appendChild(h2);

//   视频
var div2 = document.createElement('div');
div11.appendChild(div2);
div2.classList.add('video3');

var video13=document.createElement('video')
div2.appendChild(video13);
video13.setAttribute('src',' https://qiniu-xpc0.xpccdn.com/5b725b43306c9.mp4')
video13.setAttribute('controls','controls')
video13.setAttribute('controlspreload','none')
video13.style.width='500px'
video13.style.height='280px'

var h21 = document.createElement('h1');
h21.innerHTML = '周杰伦'
div11.appendChild(h21);
var h22 = document.createElement('p');
h22.innerHTML = '中国台湾流行乐男歌手、音乐人、演员、导演、编剧、监制。'
div11.appendChild(h22);
