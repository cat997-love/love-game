const heroine = {
    id: 'ruoxi',
    name: '沈若溪',
    role: '奶茶店打工的学姐',
    initial: '若',
    desc: '温柔、漂亮、带着一点慌张的学姐',
    color: 'linear-gradient(135deg,#f2a7bd,#9a86e8)',
};

// media 字段说明：
// type: 'image'、'video' 或 'embed'
// src: 可以填写网络链接。video 需要 MP4/WebM 直链；embed 填写播放器嵌入链接。
// caption: 该图片/视频对应的配文。
const scenes = [
    {
        chapter: '第一章 · 奶茶店初遇',
        title: '午后的奶茶店',
        desc: '你只是想找个安静的角落整理作业，却在柜台前看见了正在打工的学姐沈若溪。',
        location: '青柠奶茶店',
        bg: 'linear-gradient(135deg,#6b5678 0%,#b98291 52%,#edc08f 100%)',
        speaker: '旁白',
        role: '故事开始了',
        portrait: '☕',
        line: '午后的奶茶店人不算多。你推门进去时，风铃轻轻响了一声，柜台后的女孩抬起头，笑容像窗边的阳光一样柔和。',
        media: {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=85',
            icon: '☕',
            title: '奶茶店',
            caption: '午后的奶茶店，空气里有奶茶、焦糖和阳光的味道。',
        },
        choices: [],
    },
    {
        chapter: '第一章 · 奶茶店初遇',
        title: '',
        desc: '',
        location: '青柠奶茶店 · 柜台',
        bg: 'linear-gradient(135deg,#7d5576,#cf8591 55%,#f2c597)',
        speaker: '沈若溪',
        role: '奶茶店打工的学姐',
        portrait: '若',
        line: '“同学，想喝点什么？”若溪微微俯身看向点单屏，工作围裙勾勒出她利落又优雅的身形，你一时间有些移不开视线。',
        media: {
            type: 'video',
            src: 'http://images.lexbst.com/images/2026-09-12/1789106645722.mp4',
            icon: '若',
            title: '沈若溪',
            caption:
                '若溪站在柜台后，长发垂在肩侧，举手投足都带着学姐特有的从容。',
        },
        choices: [{ text: '点一杯招牌珍珠奶茶', next: 2 }],
    },
    {
        chapter: '第一章 · 奶茶店初遇',
        title: '',
        desc: '',
        location: '青柠奶茶店 · 靠窗座位',
        bg: 'linear-gradient(135deg,#5b617d,#ad7b93 54%,#efbd8d)',
        speaker: '旁白',
        role: '你的心跳',
        portrait: '✦',
        line: '你坐在靠窗的位置，电脑屏幕亮起。若溪在柜台和取餐区之间来回忙碌，身姿轻盈，偶尔抬眸时，像是刚好撞上你的目光。',
        media: {
            type: 'video',
            src: 'https://images.lexbst.com/images/2026-09-12/1789106531630.mp4',
            icon: '🎬',
            title: '送餐中的若溪',
            caption: '',
        },
        choices: [
            { text: '偷看若溪', next: 3 },
            { text: '偷看若溪2', next: 4 },
        ],
    },
    {
        chapter: '第一章 · 奶茶店初遇',
        title: '',
        desc: '',
        location: '青柠奶茶店 · 靠窗座位',
        bg: 'linear-gradient(135deg,#514b6c,#a5718b 55%,#e9ac8c)',
        speaker: '沈若溪',
        role: '慌张的学姐',
        portrait: '若',
        line: '若溪的围裙在腰间收得很紧，勾出一段流畅的背影弧度——从肩胛到细腰，再到裙摆下微微起伏的臀线，干净又柔软。我坐在角落，目光一直落在她身上，看着她忙碌却依旧漂亮的背影，心里慢慢发热。',
        media: {
            type: 'video',
            src: 'http://images.lexbst.com/images/2026-09-12/1789106775727.mp4',
            icon: '💦',
            title: '洒落的奶茶',
            caption: '',
        },
        choices: [
            // { text: '立刻合上电脑，先安慰她：“没事，你别慌。”', next: 4 },
            // { text: '抽纸擦拭键盘，抬头问她有没有烘干机。', next: 4 },
            // { text: '愣了两秒，然后和她一起手忙脚乱地补救。', next: 4 },
        ],
    },
    {
        chapter: '第一章 · 奶茶店初遇',
        title: '',
        desc: '',
        location: '青柠奶茶店 · 靠窗座位',
        bg: 'linear-gradient(135deg,#514b6c,#a5718b 55%,#e9ac8c)',
        speaker: '沈若溪',
        role: '慌张的学姐',
        portrait: '若',
        line: '若溪弯下腰，用干净的抹布仔细擦拭桌面。动作很轻，却带着一种自然的优雅——腰肢柔韧地向下折去，裙摆随之微微扬起。她的美臀正好对着我坐的方向，圆润的轮廓在围裙下清晰地显现，随着擦拭的动作轻轻起伏。',
        media: {
            type: 'video',
            src: 'http://images.lexbst.com/images/2026-09-12/1789106863591.mp4',
            icon: '💦',
            title: '洒落的奶茶',
            caption: '',
        },
        choices: [
            // { text: '立刻合上电脑，先安慰她：“没事，你别慌。”', next: 4 },
            // { text: '抽纸擦拭键盘，抬头问她有没有烘干机。', next: 4 },
            // { text: '愣了两秒，然后和她一起手忙脚乱地补救。', next: 4 },
        ],
    },
    {
        chapter: '第一章 · 奶茶店初遇',
        title: '',
        desc: '',
        location: '青柠奶茶店 · 靠窗座位',
        bg: 'linear-gradient(135deg,#514b6c,#a5718b 55%,#e9ac8c)',
        speaker: '沈若溪',
        role: '慌张的学姐',
        portrait: '若',
        line: '“你的招牌珍珠奶茶——啊！”若溪把奶茶放到桌边时，托盘不小心碰到你的电脑包。杯身一歪，奶茶瞬间洒在了你的电脑键盘上。',
        media: {
            type: 'video',
            src: 'https://images.lexbst.com/images/2026-09-12/1789106937335.mp4',
            icon: '💦',
            title: '洒落的奶茶',
            caption:
                '奶茶沿着键盘缝隙流开，屏幕上的文档闪了两下，你和若溪同时愣住。',
        },
        choices: [{ text: '若溪的道歉', next: 6 }],
    },
    {
        chapter: '第一章 · 奶茶店初遇',
        title: '',
        desc: '',
        location: '青柠奶茶店 · 靠窗座位',
        bg: 'linear-gradient(135deg,#514b6c,#a5718b 55%,#e9ac8c)',
        speaker: '沈若溪',
        role: '慌张的学姐',
        portrait: '若',
        line: '若溪看见奶茶溅在我裤子上，立刻满脸歉意：“对不起对不起！都是我不小心……”她连忙蹲下身子，拿出干净的纸巾，小心翼翼地帮我擦拭。她低着头，马尾垂在一侧，动作很轻很认真，指尖隔着纸巾一点一点按压着湿痕。',
        media: {
            type: 'video',
            src: 'http://images.lexbst.com/images/2026-09-12/1789106990344.mp4',
            icon: '💦',
            title: '洒落的奶茶',
            caption: '',
        },
        choices: [{ text: '威胁若溪', next: 7 }],
    },
    {
        chapter: '第一章 · 奶茶店初遇',
        title: '',
        desc: '',
        location: '青柠奶茶店 · 靠窗座位',
        bg: 'linear-gradient(135deg,#514b6c,#a5718b 55%,#e9ac8c)',
        speaker: '沈若溪',
        role: '慌张的学姐',
        portrait: '若',
        line: '伸手轻轻握住若溪还在擦拭的小手。她抬起头，眼神里带着一点惊讶和羞涩，却没有立刻抽回去。我慢慢把她的手往上移，移到已经微微抬头的肉棒位置，隔着布料轻轻按了上去。她的手指先是僵了一下，耳尖瞬间红透。我没有用力，只是引导着她的掌心缓缓上下擦拭、撸动起来。布料下的形状清晰地贴在她手心里，温度也一点点传过去。若溪咬着下唇，眼睛不敢看我，呼吸却明显乱了。她的小手在我的引导下慢慢动着，动作很轻，却没有真的停下来。脸颊烧得厉害，声音细得几乎听不见：“学弟……这、这里……好烫……”她低着头，马尾垂在肩侧，整个人都显得又害羞又软，却仍旧让那只小手继续被我带着，一下一下地抚弄着。',
        media: {
            type: 'video',
            src: 'http://images.lexbst.com/images/2026-09-12/1789107035374.mp4',
            icon: '💦',
            title: '洒落的奶茶',
            caption: '',
        },
        choices: [
            { text: '拍摄私密照片', next: 8 },
            { text: '揉捏美臀', next: 9 },
            { text: '按在身下', next: 10 },
            { text: '插入小嘴', next: 11 },
            { text: '再度插入', next: 12 },
            { text: '拍摄口交视频', next: 13 },
            { text: '继续口交', next: 14 },
            { text: '继续口交2', next: 15 },
            { text: '颜射', next: 16 },
        ],
    },
    {
        chapter: '第一章 · 奶茶店初遇',
        title: '',
        desc: '',
        location: '青柠奶茶店 · 靠窗座位',
        bg: 'linear-gradient(135deg,#514b6c,#a5718b 55%,#e9ac8c)',
        speaker: '沈若溪',
        role: '慌张的学姐',
        portrait: '若',
        line: '我伸手去解若溪胸前的扣子。她立刻轻轻按住我的手，声音又软又急：“别……这里不行……”眼神里满是羞涩，脸颊烧得通红，却没有真正用力推开。白皙的肌肤随着扣子松开逐渐暴露，最后露出她形状漂亮、柔软的胸部。胸前的曲线在灯光下显得格外清晰。我拿出手机，快门声轻轻响起——咔、咔、咔——几张照片被清晰地定格。',
        media: {
            type: 'video',
            src: 'http://images.lexbst.com/images/2026-09-12/1789107072649.mp4',
            icon: '💦',
            title: '洒落的奶茶',
            caption: '',
        },
        choices: [
            { text: '拍摄私密照片', next: 8 },
            { text: '揉捏美臀', next: 9 },
            { text: '按在身下', next: 10 },
            { text: '插入小嘴', next: 11 },
            { text: '再度插入', next: 12 },
            { text: '拍摄口交视频', next: 13 },
            { text: '继续口交', next: 14 },
            { text: '继续口交2', next: 15 },
            { text: '颜射', next: 16 },
        ],
    },
    {
        chapter: '第一章 · 奶茶店初遇',
        title: '',
        desc: '',
        location: '青柠奶茶店 · 靠窗座位',
        bg: 'linear-gradient(135deg,#514b6c,#a5718b 55%,#e9ac8c)',
        speaker: '沈若溪',
        role: '慌张的学姐',
        portrait: '若',
        line: '我伸手揉上她的美臀，掌心用力捏住柔软的肉。她轻哼一声，身体微微一颤，却没有真的躲开，只是把脸转向一边。',
        media: {
            type: 'video',
            src: 'http://images.lexbst.com/images/2026-09-12/1789200997406.mp4',
            icon: '💦',
            title: '洒落的奶茶',
            caption: '',
        },
        choices: [
            { text: '拍摄私密照片', next: 8 },
            { text: '揉捏美臀', next: 9 },
            { text: '按在身下', next: 10 },
            { text: '插入小嘴', next: 11 },
            { text: '再度插入', next: 12 },
            { text: '拍摄口交视频', next: 13 },
            { text: '继续口交', next: 14 },
            { text: '继续口交2', next: 15 },
            { text: '颜射', next: 16 },
        ],
    },
    {
        chapter: '第一章 · 奶茶店初遇',
        title: '',
        desc: '',
        location: '青柠奶茶店 · 靠窗座位',
        bg: 'linear-gradient(135deg,#514b6c,#a5718b 55%,#e9ac8c)',
        speaker: '沈若溪',
        role: '慌张的学姐',
        portrait: '若',
        line: '我把她按在身下，她咬着唇，乖乖照做，肩膀紧张地绷着。我解开裤子，抬起她的下巴，把性器送进她的小嘴。她生硬地抵挡着，紧闭双眼，却没法拒绝我',
        media: {
            type: 'video',
            src: 'http://images.lexbst.com/images/2026-09-12/1789201141661.mp4',
            icon: '💦',
            title: '洒落的奶茶',
            caption: '',
        },
        choices: [
            { text: '拍摄私密照片', next: 8 },
            { text: '揉捏美臀', next: 9 },
            { text: '按在身下', next: 10 },
            { text: '插入小嘴', next: 11 },
            { text: '再度插入', next: 12 },
            { text: '拍摄口交视频', next: 13 },
            { text: '继续口交', next: 14 },
            { text: '继续口交2', next: 15 },
            { text: '颜射', next: 16 },
        ],
    },
    {
        chapter: '第一章 · 奶茶店初遇',
        title: '',
        desc: '',
        location: '青柠奶茶店 · 靠窗座位',
        bg: 'linear-gradient(135deg,#514b6c,#a5718b 55%,#e9ac8c)',
        speaker: '沈若溪',
        role: '慌张的学姐',
        portrait: '若',
        line: '我伸出手，轻轻按住若溪的头发。硬挺的肉棒从裤子里弹出，在她下巴上轻轻弹了一下。她下意识地微微张开嘴，眼神闪躲，脸颊烧得通红。我扶着她的后脑，缓缓将肉棒送进她湿软的樱桃小嘴。温热的口腔一下子包裹上来，紧致又柔软。我开始一抽一送，节奏不急不慢，每一次深入都带来明显的快感。抽插了一会儿，若溪忽然轻轻摇了摇头，发出细微的呜咽。我立刻停住，慢慢把肉棒从她嘴里拔出来。她立刻低着头喘息，嘴唇红润，唾液还牵着细丝，整个人都显得又羞又软。',
        media: {
            type: 'video',
            src: 'http://images.lexbst.com/images/2026-09-12/1789201234843.mp4',
            icon: '💦',
            title: '洒落的奶茶',
            caption: '',
        },
        choices: [
            { text: '拍摄私密照片', next: 8 },
            { text: '揉捏美臀', next: 9 },
            { text: '按在身下', next: 10 },
            { text: '插入小嘴', next: 11 },
            { text: '再度插入', next: 12 },
            { text: '拍摄口交视频', next: 13 },
            { text: '继续口交', next: 14 },
            { text: '继续口交2', next: 15 },
            { text: '颜射', next: 16 },
        ],
    },
    {
        chapter: '第一章 · 奶茶店初遇',
        title: '',
        desc: '',
        location: '青柠奶茶店 · 靠窗座位',
        bg: 'linear-gradient(135deg,#514b6c,#a5718b 55%,#e9ac8c)',
        speaker: '沈若溪',
        role: '慌张的学姐',
        portrait: '若',
        line: '若溪缓了缓，呼吸还带着一点乱。我再次将肉棒朝她嘴边送去，前端在她柔软的香唇上轻轻摩擦。她先是闭上眼睛，犹豫了片刻，才慢慢张开嘴，将它含了进去。我按住她的后脑，继续一抽一送，温热的口腔重新包裹上来。',
        media: {
            type: 'video',
            src: 'http://images.lexbst.com/images/2026-09-12/1789201297678.mp4',
            icon: '💦',
            title: '洒落的奶茶',
            caption: '',
        },
        choices: [
            { text: '拍摄私密照片', next: 8 },
            { text: '揉捏美臀', next: 9 },
            { text: '按在身下', next: 10 },
            { text: '插入小嘴', next: 11 },
            { text: '再度插入', next: 12 },
            { text: '拍摄口交视频', next: 13 },
            { text: '继续口交', next: 14 },
            { text: '继续口交2', next: 15 },
            { text: '颜射', next: 16 },
        ],
    },
    {
        chapter: '第一章 · 奶茶店初遇',
        title: '',
        desc: '',
        location: '青柠奶茶店 · 靠窗座位',
        bg: 'linear-gradient(135deg,#514b6c,#a5718b 55%,#e9ac8c)',
        speaker: '沈若溪',
        role: '慌张的学姐',
        portrait: '若',
        line: '若溪口交的时候，我拿出手机，想把这一幕录下来。若溪立刻用双手挡在镜头前，眼神里满是羞涩和慌乱。我没有强迫，只是轻轻握住她的手腕。她僵了一下，最终还是把双手慢慢拿开，任由镜头对准自己。我一边录着，一边享受着她生涩却认真的吞吐。她吮吸了一会儿，喉咙发出细微的呜咽，终于受不了似的轻轻摇头',
        media: {
            type: 'video',
            src: 'http://images.lexbst.com/images/2026-09-12/1789201369729.mp4',
            icon: '💦',
            title: '洒落的奶茶',
            caption: '',
        },
        choices: [
            { text: '拍摄私密照片', next: 8 },
            { text: '揉捏美臀', next: 9 },
            { text: '按在身下', next: 10 },
            { text: '插入小嘴', next: 11 },
            { text: '再度插入', next: 12 },
            { text: '拍摄口交视频', next: 13 },
            { text: '继续口交', next: 14 },
            { text: '继续口交2', next: 15 },
            { text: '颜射', next: 16 },
        ],
    },
    {
        chapter: '第一章 · 奶茶店初遇',
        title: '',
        desc: '',
        location: '青柠奶茶店 · 靠窗座位',
        bg: 'linear-gradient(135deg,#514b6c,#a5718b 55%,#e9ac8c)',
        speaker: '沈若溪',
        role: '慌张的学姐',
        portrait: '若',
        line: '我轻轻按住她的后脑，手指陷入柔软的发丝里。肉棒再次缓缓送入她温热的口腔，一抽一送，节奏放得很慢。她的唇被撑得微微发红，每一次深入都能感觉到她舌尖的轻颤。抽插了几下后，她发出细碎的呜咽，睫毛湿润地垂着，却没有真的退开，只是任由我继续在她嘴里缓慢地进出。',
        media: {
            type: 'video',
            src: 'http://images.lexbst.com/images/2026-09-12/1789201432301.mp4',
            icon: '💦',
            title: '洒落的奶茶',
            caption: '',
        },
        choices: [
            { text: '拍摄私密照片', next: 8 },
            { text: '揉捏美臀', next: 9 },
            { text: '按在身下', next: 10 },
            { text: '插入小嘴', next: 11 },
            { text: '再度插入', next: 12 },
            { text: '拍摄口交视频', next: 13 },
            { text: '继续口交', next: 14 },
            { text: '继续口交2', next: 15 },
            { text: '颜射', next: 16 },
        ],
    },
    {
        chapter: '第一章 · 奶茶店初遇',
        title: '',
        desc: '',
        location: '青柠奶茶店 · 靠窗座位',
        bg: 'linear-gradient(135deg,#514b6c,#a5718b 55%,#e9ac8c)',
        speaker: '沈若溪',
        role: '慌张的学姐',
        portrait: '若',
        line: '若溪跪在我身下，眼睛湿润，脸颊通红，那副又羞又软的样子再次激起了我的欲望。我再次将肉棒插入她的樱桃小嘴，深深顶进去。',
        media: {
            type: 'video',
            src: 'http://images.lexbst.com/images/2026-09-12/1789201520354.mp4',
            icon: '💦',
            title: '洒落的奶茶',
            caption: '',
        },
        choices: [
            { text: '拍摄私密照片', next: 8 },
            { text: '揉捏美臀', next: 9 },
            { text: '按在身下', next: 10 },
            { text: '插入小嘴', next: 11 },
            { text: '再度插入', next: 12 },
            { text: '拍摄口交视频', next: 13 },
            { text: '继续口交', next: 14 },
            { text: '继续口交2', next: 15 },
            { text: '颜射', next: 16 },
        ],
    },
    {
        chapter: '第一章 · 奶茶店初遇',
        title: '',
        desc: '',
        location: '青柠奶茶店 · 靠窗座位',
        bg: 'linear-gradient(135deg,#514b6c,#a5718b 55%,#e9ac8c)',
        speaker: '沈若溪',
        role: '慌张的学姐',
        portrait: '若',
        line: '“你的招牌珍珠奶茶——啊！”若溪把奶茶放到桌边时，托盘不小心碰到你的电脑包。杯身一歪，奶茶瞬间洒在了你的电脑键盘上。',
        media: {
            type: 'video',
            src: 'http://images.lexbst.com/images/2026-09-12/1789201564542.mp4',
            icon: '💦',
            title: '洒落的奶茶',
            caption:
                '终于，我抽出肉棒，将大量浓精射在她脸上。白浊顺着她的脸颊和嘴角往下滑落，沾在红润的唇边，让她整个人看起来更加诱人。她微微喘息着，不敢抬眼看我，只是轻轻伸出舌尖，舔掉了嘴边的一点。',
        },
        choices: [
            // { text: '拍摄私密照片', next: 8 },
            // { text: '揉捏美臀', next: 9 },
            // { text: '按在身下', next: 10 },
            // { text: '插入小嘴', next: 11 },
            // { text: '再度插入', next: 12 },
            // { text: '拍摄口交视频', next: 13 },
            // { text: '继续口交', next: 14 },
            // { text: '继续口交2', next: 15 },
            // { text: '颜射', next: 16 },
        ],
    },

    {
        chapter: '第一章 · 到此为止',
        title: '',
        desc: '',
        location: '青柠奶茶店 · 靠窗座位',
        bg: 'linear-gradient(135deg,#896078,#d28b91 56%,#f1c99d)',
        speaker: '沈若溪',
        role: '沈若溪',
        portrait: '若',
        line: '“真的对不起！维修费我会负责的。”若溪紧张地看着你，脸颊微微泛红。你这才意识到，你们终于不再只是学校里擦肩而过的陌生人。',
        media: {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=1600&q=85',
            icon: '若',
            title: '若溪的道歉',
            caption:
                '若溪低声道歉，眼神里满是担心。你们的故事，也在这一刻真正开始。',
        },
        choices: [],
        ending: true,
    },
];

let state = { scene: 0, chosen: false, met: true };
const $ = (id) => document.getElementById(id);

function showToast(text) {
    const toast = $('toast');
    toast.textContent = text;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 1800);
}

function renderHeroine() {
    $('girlList').innerHTML = `
    <div class="girl active">
      <div class="girl-avatar" style="background:${heroine.color}">${heroine.initial}</div>
      <div class="girl-info"><strong>${heroine.name}</strong><small>${heroine.desc}</small></div>
      <div class="heart-meter">认识</div>
    </div>`;
    $('meetCount').textContent = '1 / 1';
}

function renderMedia(media) {
    const image = $('sceneImage');
    const video = $('sceneVideo');
    const embed = $('sceneEmbed');
    const placeholder = $('mediaPlaceholder');
    const frame = $('mediaFrame');
    const caption = $('mediaCaption');
    image.style.display = 'none';
    video.style.display = 'none';
    embed.style.display = 'none';
    placeholder.style.display = 'grid';
    caption.classList.remove('show');
    video.pause();
    video.removeAttribute('src');
    image.removeAttribute('src');
    embed.removeAttribute('src');

    frame.classList.remove('fade');
    void frame.offsetWidth;
    frame.classList.add('fade');

    $('placeholderIcon').textContent = media?.icon || '✦';
    $('placeholderTitle').textContent = media?.title || '剧情画面';

    if (!media?.src) return;

    if (media.type === 'embed') {
        embed.src = media.src;
        embed.style.display = 'block';
        placeholder.style.display = 'none';
        if (media.caption) {
            caption.textContent = media.caption;
            caption.classList.add('show');
        }
        return;
    }

    if (media.type === 'video') {
        video.src = media.src;
        video.style.display = 'block';
        placeholder.style.display = 'none';
        if (media.caption) {
            caption.textContent = media.caption;
            caption.classList.add('show');
        }
        video.load();
        video.play().catch(() => {});
        video.onerror = () => {
            video.style.display = 'none';
            placeholder.style.display = 'grid';
        };
        return;
    }

    image.src = media.src;
    image.style.display = 'block';
    placeholder.style.display = 'none';
    if (media.caption) {
        caption.textContent = media.caption;
        caption.classList.add('show');
    }
    image.onerror = () => {
        image.style.display = 'none';
        placeholder.style.display = 'grid';
        caption.classList.remove('show');
    };
}

let typeTimer = null;
function typeLine(text) {
    const el = $('dialogue');
    clearInterval(typeTimer);
    el.textContent = '';
    el.classList.add('typing');
    let i = 0;
    typeTimer = setInterval(() => {
        i += 2;
        el.textContent = text.slice(0, i);
        if (i >= text.length) {
            clearInterval(typeTimer);
            typeTimer = null;
            el.classList.remove('typing');
        }
    }, 24);
}
function finishTyping(text) {
    if (!typeTimer) return false;
    clearInterval(typeTimer);
    typeTimer = null;
    $('dialogue').textContent = text;
    $('dialogue').classList.remove('typing');
    return true;
}

function render() {
    const scene = scenes[state.scene];
    $('stage').style.background = scene.bg;
    $('chapter').textContent = scene.chapter;
    $('location').textContent = scene.location;
    $('speaker').textContent = scene.speaker;
    $('role').textContent = scene.role;
    $('portrait').textContent = scene.portrait;
    typeLine(scene.line);
    $('lineNo').textContent =
        `${String(state.scene + 1).padStart(2, '0')} / ${String(scenes.length).padStart(2, '0')}`;
    $('progressBar').style.width =
        `${((state.scene + 1) / scenes.length) * 100}%`;
    $('objectiveProgress').style.width =
        `${Math.min(100, 22 + state.scene * 20)}%`;
    $('dayLabel').textContent = 'DAY 01';
    $('affection').textContent = scene.speaker === '沈若溪' ? '初识' : '';
    $('objective').textContent = scene.ending
        ? '等待你继续补充后续剧情'
        : '在奶茶店与若溪初次相遇';
    renderMedia(scene.media);

    const choices = $('choices');
    choices.innerHTML = '';
    scene.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.className = 'choice';
        button.dataset.key = String.fromCharCode(65 + index);
        const text = document.createElement('span');
        text.textContent = choice.text;
        button.appendChild(text);
        button.onclick = () => selectChoice(index, choice);
        choices.appendChild(button);
    });

    $('continueBtn').style.display = scene.choices.length ? 'none' : 'block';
    $('continueBtn').innerHTML = scene.ending
        ? '重新体验'
        : '继续 <span>→</span>';
    renderHeroine();
}

function selectChoice(index, choice) {
    if (state.chosen) return;
    state.chosen = true;
    document.querySelectorAll('.choice').forEach((button, i) => {
        button.disabled = true;
        if (i === index) button.classList.add('selected');
    });
    showToast('你做出了选择');
    setTimeout(() => {
        state.scene = choice.next;
        state.chosen = false;
        render();
    }, 450);
}

function resetGame() {
    state = { scene: 0, chosen: false, met: true };
    localStorage.removeItem('ruoxi-milk-tea-game');
    render();
}

$('continueBtn').onclick = () => {
    if (finishTyping(scenes[state.scene].line)) return;
    if (scenes[state.scene].ending) {
        resetGame();
        return;
    }
    state.scene = Math.min(state.scene + 1, scenes.length - 1);
    render();
};
$('restartBtn').onclick = () => {
    resetGame();
    showToast('故事已重新开始');
};
$('saveBtn').onclick = () => {
    localStorage.setItem('ruoxi-milk-tea-game', JSON.stringify(state));
    showToast('进度已保存');
};

const saved = localStorage.getItem('ruoxi-milk-tea-game');
if (saved) {
    try {
        const parsed = JSON.parse(saved);
        if (
            Number.isInteger(parsed.scene) &&
            parsed.scene >= 0 &&
            parsed.scene < scenes.length
        )
            state = parsed;
    } catch {}
}
render();
