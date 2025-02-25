const tarotCards = [
    { 
        name: "Aptal (The Fool)", 
        upright: { past: "Geçmişte risk aldın ve cesur adımlar attın.", present: "Şu anda cesaretle bilinmeyene adım atıyorsun, özgürlüğün peşindesin.", future: "Gelecekte büyük bir macera ve spontane fırsatlar seni bekliyor." }, 
        reversed: { past: "Dikkatsizliğin seni zor durumlarda bırakmış olabilir; geçmişte aceleciydin.", present: "Plansız hareket ediyorsun ve bu seni kararsızlığa sürüklüyor.", future: "Kararsızlıkla dolu bir dönem seni bekliyor, dikkatli olman gerekecek." }, 
        description: "Yeni başlangıçlar, özgürlük ve masumiyeti temsil eder.",
        symbols: ["rüzgar", "yol", "kuş"],
        en: {
            name: "The Fool",
            upright: { past: "You took risks and made bold steps in the past.", present: "You’re stepping boldly into the unknown now, chasing freedom.", future: "A great adventure and spontaneous opportunities await you in the future." },
            reversed: { past: "Your carelessness may have put you in tough situations; you were hasty in the past.", present: "You’re acting without a plan, leading to indecision.", future: "A period of indecision awaits you; you’ll need to be cautious." },
            description: "Represents new beginnings, freedom, and innocence."
        }
    },
    { 
        name: "Büyücü (The Magician)", 
        upright: { past: "Yeteneklerinle büyük başarılar elde ettin ve yaratıcı enerjinle yönlendirdin.", present: "Kontrol sende, irade gücünle başarıya ulaşıyorsun.", future: "Becerilerinle büyük hedeflere ulaşacak ve parlak bir başarı elde edeceksin." }, 
        reversed: { past: "Manipülasyon ve güvensizlik geçmişte engeller yaratmış olabilir.", present: "Güven eksikliğin seni yavaşlatıyor, iradene güvenmelisin.", future: "Yanılgıya düşme riskin var, dikkatli ol ve yetkinliğini koru." }, 
        description: "İrade, yaratıcılık ve beceriyi simgeler.",
        symbols: ["asa", "kupa", "kılıç", "para"],
        en: {
            name: "The Magician",
            upright: { past: "You achieved great success with your skills and creative energy guided you.", present: "You’re in control, achieving success with your willpower.", future: "You’ll reach great goals with your skills and achieve brilliant success." },
            reversed: { past: "Manipulation and insecurity may have created obstacles in the past.", present: "Your lack of confidence is slowing you down; trust your will.", future: "There’s a risk of being misled; be cautious and protect your competence." },
            description: "Symbolizes willpower, creativity, and skill."
        }
    },
    { 
        name: "Yüksek Rahibe (The High Priestess)", 
        upright: { past: "Sezgilerinle doğru kararlar aldın ve gizli bilgilere ulaştın.", present: "İç sesini dinleyerek derin bir bilgelik kazanıyorsun.", future: "Gizemli bir sır açığa çıkacak ve sezgilerin seni aydınlatacak." }, 
        reversed: { past: "Sezgilerini görmezden geldin ve bu seni yanıltmış olabilir.", present: "Yüzeysel düşünüyorsun ve gizli tuzaklara dikkat etmen gerekiyor.", future: "Gizli düşmanlar ortaya çıkabilir, iç sesine kulak ver." }, 
        description: "Sezgi, gizem ve içsel bilgeliği ifade eder.",
        symbols: ["ay", "perde", "su"],
        en: {
            name: "The High Priestess",
            upright: { past: "You made the right decisions with your intuition and accessed hidden knowledge.", present: "You’re gaining deep wisdom by listening to your inner voice.", future: "A mysterious secret will be revealed, and your intuition will guide you." },
            reversed: { past: "You ignored your instincts, and this may have misled you.", present: "You’re thinking superficially and need to watch for hidden traps.", future: "Hidden enemies may emerge; listen to your inner voice." },
            description: "Expresses intuition, mystery, and inner wisdom."
        }
    },
    { 
        name: "İmparatoriçe (The Empress)", 
        upright: { past: "Sevgi dolu bir dönem seni besledi, yaratıcılıkla doluydu.", present: "Yaratıcılığın ve doğa seni uyumla kuşatıyor, bereket içindesin.", future: "Bolluk, büyüme ve sevgi dolu bir dönem seni bekliyor." }, 
        reversed: { past: "İhmal ve duygusal boşluk geçmişte zorluklar yaratmış olabilir.", present: "Kendine bakmıyorsun ve duygusal tıkanıklık yaşıyorsun.", future: "Dengeyi bulman gerekecek, aksi takdirde duygusal zorluklar devam edebilir." }, 
        description: "Bolluk, doğurganlık ve şefkati temsil eder.",
        symbols: ["çiçek", "tarla", "ırmak"],
        en: {
            name: "The Empress",
            upright: { past: "A loving period nourished you, filled with creativity.", present: "Your creativity and nature surround you with harmony, bringing abundance.", future: "A period of abundance, growth, and love awaits you." },
            reversed: { past: "Neglect and emotional emptiness may have caused difficulties in the past.", present: "You’re not caring for yourself and experiencing emotional blockage.", future: "You’ll need to find balance, or emotional challenges may persist." },
            description: "Represents abundance, fertility, and compassion."
        }
    },
    { 
        name: "İmparator (The Emperor)", 
        upright: { past: "Disiplinle yönettin ve otoritenle başarı elde ettin.", present: "Sağlam duruyorsun, kontrolün ve yapın seni güçlendiriyor.", future: "Sorumlulukla büyük bir başarı ve liderlik seni bekliyor." }, 
        reversed: { past: "Kontrol kaybettin ve otorite çatışmaları yaşadın.", present: "Esneklik eksik, katı kurallar seni zorluyor.", future: "Otoriteyle bir çatışma yaşayabilirsin, dengeyi bulman gerekecek." }, 
        description: "Otorite, yapı ve kontrolü simgeler.",
        symbols: ["taht", "aslan", "kalkan"],
        en: {
            name: "The Emperor",
            upright: { past: "You managed with discipline and achieved success with your authority.", present: "You stand firm, strengthened by control and structure.", future: "Great success and leadership await you with responsibility." },
            reversed: { past: "You lost control and faced authority conflicts.", present: "You lack flexibility; rigid rules are challenging you.", future: "You may face a conflict with authority; you’ll need to find balance." },
            description: "Symbolizes authority, structure, and control."
        }
    },
    { 
        name: "Başrahip (The Hierophant)", 
        upright: { past: "Geleneklere uyarak rehberlik buldun, manevi bir yol izledin.", present: "Rehberlik arıyorsun ve geleneksel yollar sana ilham veriyor.", future: "Bir öğreti veya manevi rehber seni yönlendirecek ve bilgeliğini artıracak." }, 
        reversed: { past: "Kurallara karşı geldin ve otoriteyle çatıştın.", present: "Otoriteye karşı çıkıyorsun, gelenekleri sorguluyorsun.", future: "Gelenekleri sorgulayacaksın ve özgün bir yol arayabilirsin." }, 
        description: "Gelenek, manevi rehberlik ve bilgeliği ifade eder.",
        symbols: ["kitap", "asa", "tac"],
        en: {
            name: "The Hierophant",
            upright: { past: "You found guidance by following traditions, walking a spiritual path.", present: "You seek guidance, and traditional paths inspire you.", future: "A teaching or spiritual guide will direct you and increase your wisdom." },
            reversed: { past: "You rebelled against rules and clashed with authority.", present: "You oppose authority and question traditions.", future: "You’ll question traditions and seek an original path." },
            description: "Expresses tradition, spiritual guidance, and wisdom."
        }
    },
    { 
        name: "Âşıklar (The Lovers)", 
        upright: { past: "Bir seçimle hayatın şekillendi, sevgi ve uyum yaşadın.", present: "Uyum ve sevgi arıyorsun, önemli bir karar önündesin.", future: "Derin bir bağ kuracak ve uyum bulacaksın." }, 
        reversed: { past: "Uyumsuzluk ve çatışmalar seni etkiledi.", present: "Aşkta veya kararlarda çatışma yaşıyorsun.", future: "Ayrılık veya kararsızlık olabilir, dikkatli ol." }, 
        description: "Aşk, uyum ve önemli seçimleri temsil eder.",
        symbols: ["kalp", "elma", "melek"],
        en: {
            name: "The Lovers",
            upright: { past: "A choice shaped your life, filled with love and harmony.", present: "You seek harmony and love, facing an important decision.", future: "You’ll form a deep bond and find harmony." },
            reversed: { past: "Disharmony and conflicts affected you.", present: "You’re experiencing conflict in love or decisions.", future: "Separation or indecision may occur; be cautious." },
            description: "Represents love, harmony, and significant choices."
        }
    },
    { 
        name: "Savaş Arabası (The Chariot)", 
        upright: { past: "Zorlukları kararlılıkla aştın, iradenle yöneldin.", present: "Kararlılıkla ilerliyorsun, kontrol senin elinde.", future: "Zafer ve başarı seni bekliyor, engelleri aşacaksın." }, 
        reversed: { past: "Yönünü kaybettin ve kontrolü elden bıraktın.", present: "Kontrol edemiyorsun, yönünü bulman gerekiyor.", future: "Engellerle karşılaşabilirsin, sabır gerek." }, 
        description: "Kararlılık, irade ve zaferi simgeler.",
        symbols: ["at", "miğfer", "kalkan"],
        en: {
            name: "The Chariot",
            upright: { past: "You overcame obstacles with determination, guided by your will.", present: "You’re moving forward with determination, in control.", future: "Victory and success await you; you’ll overcome obstacles." },
            reversed: { past: "You lost your way and let go of control.", present: "You can’t control it; you need to find your direction.", future: "You may face obstacles; patience is required." },
            description: "Symbolizes determination, willpower, and victory."
        }
    },
    { 
        name: "Kuvvet (Strength)", 
        upright: { past: "Cesaretle sınavları geçtin, iç gücünle büyüdün.", present: "İçsel gücünle zorlukları aşıyorsun, sabırla hareket ediyorsun.", future: "Dayanıklılığınla büyük başarılar elde edeceksin." }, 
        reversed: { past: "Güven eksikliği seni durdurdu, korkularla yüzleşmedin.", present: "Korkularına yenik düşüyorsun, cesaret bulman gerekiyor.", future: "Zayıflıkla mücadele edebilirsin, gücünü keşfet." }, 
        description: "İçsel güç, cesaret ve sabrı ifade eder.",
        symbols: ["aslan", "gül", "zincir"],
        en: {
            name: "Strength",
            upright: { past: "You passed tests with courage, growing with inner strength.", present: "You overcome challenges with inner strength, acting with patience.", future: "You’ll achieve great success with your resilience." },
            reversed: { past: "Lack of confidence stopped you; you didn’t face your fears.", present: "You’re succumbing to your fears; you need to find courage.", future: "You may struggle with weakness; discover your strength." },
            description: "Expresses inner strength, courage, and patience."
        }
    },
    { 
        name: "Ermiş (The Hermit)", 
        upright: { past: "Yalnızlıkla içsel bilgelik buldun, izole oldun.", present: "İçsel bir yolculuktasın, yalnızlık sana rehberlik ediyor.", future: "Yalnızlık ve iç gözlem seni aydınlatacak." }, 
        reversed: { past: "İzolasyon seni yordu, yalnızlıktan kaçtın.", present: "Yalnızlıktan kaçıyorsun, ama içe dönmen gerekiyor.", future: "İçe kapanıklık seni zorlayabilir, dengeyi bul." }, 
        description: "Yalnızlık, iç gözlem ve bilgeliği temsil eder.",
        symbols: ["fener", "asa", "dağ"],
        en: {
            name: "The Hermit",
            upright: { past: "You found inner wisdom through solitude, isolating yourself.", present: "You’re on an inner journey, guided by solitude.", future: "Solitude and introspection will enlighten you." },
            reversed: { past: "Isolation exhausted you; you fled from solitude.", present: "You’re avoiding solitude, but you need to turn inward.", future: "Withdrawal may challenge you; find balance." },
            description: "Represents solitude, introspection, and wisdom."
        }
    },
    { 
        name: "Kader Çarkı (Wheel of Fortune)", 
        upright: { past: "Şansın döndü, döngüsel bir değişim yaşadın.", present: "Değişim ve şans içindesin, döngülerin farkındasın.", future: "Şans ve fırsatlar yaver gidecek, büyük bir dönüşüm seni bekliyor." }, 
        reversed: { past: "Talihsizlik seni vurdu, döngü tersine döndü.", present: "Kontrol edemiyorsun, şanssızlık hissediyorsun.", future: "Zorluklarla karşılaşabilirsin, sabırla bekle." }, 
        description: "Kader, döngüler ve şansı simgeler.",
        symbols: ["tekerlek", "yıldız", "bulut"],
        en: {
            name: "Wheel of Fortune",
            upright: { past: "Your luck turned; you experienced a cyclical change.", present: "You’re in a cycle of change and luck, aware of the cycles.", future: "Luck and opportunities will favor you; a major transformation awaits." },
            reversed: { past: "Misfortune struck you; the cycle reversed.", present: "You can’t control it; you feel unlucky.", future: "You may face difficulties; wait patiently." },
            description: "Symbolizes fate, cycles, and chance."
        }
    },
    { 
        name: "Adalet (Justice)", 
        upright: { past: "Adil bir karar hayatını şekillendirdi, denge buldun.", present: "Doğruluk ve adalet senin rehberin, dengedesin.", future: "Hak ettiğini alacaksın, adalet seni bulacak." }, 
        reversed: { past: "Adaletsizlik seni üzdü, dengesizlik yaşandın.", present: "Dengesizlik hissediyorsun, adaletsizlik seni zorluyor.", future: "Haksızlıkla mücadele edebilirsin, sabırla ilerle." }, 
        description: "Adalet, denge ve gerçeği ifade eder.",
        symbols: ["terazi", "kılıç", "taç"],
        en: {
            name: "Justice",
            upright: { past: "A fair decision shaped your life; you found balance.", present: "Truth and justice guide you; you’re balanced.", future: "You’ll get what you deserve; justice will find you." },
            reversed: { past: "Injustice hurt you; you faced imbalance.", present: "You feel imbalance; unfairness challenges you.", future: "You may fight unfairness; proceed with patience." },
            description: "Expresses justice, balance, and truth."
        }
    },
    { 
        name: "Asılmış Adam (The Hanged Man)", 
        upright: { past: "Fedakârlıkla büyüdün, farklı bir bakış açısı kazandın.", present: "Bakış açını değiştirerek derin bir farkındalık kazanıyorsun.", future: "Vazgeçiş ve teslimiyet seni özgürleştirecek." }, 
        reversed: { past: "Direnç seni yordu, değişime karşı çıktın.", present: "Kararsızsın, hareketsizlik içindesin.", future: "Tıkanıklık yaşayabilirsin, harekete geçmen gerekecek." }, 
        description: "Fedakârlık, teslimiyet ve yeni bakış açılarını temsil eder.",
        symbols: ["ip", "ağaç", "su"],
        en: {
            name: "The Hanged Man",
            upright: { past: "You grew through sacrifice, gaining a new perspective.", present: "You’re gaining deep awareness by changing your perspective.", future: "Letting go and surrender will free you." },
            reversed: { past: "Resistance exhausted you; you resisted change.", present: "You’re indecisive, stuck in inaction.", future: "You may face a deadlock; you’ll need to take action." },
            description: "Represents sacrifice, surrender, and new perspectives."
        }
    },
    { 
        name: "Ölüm (Death)", 
        upright: { past: "Bir dönem sona erdi, dönüşüm yaşadın.", present: "Köklü bir dönüşüm içindesin, yenileniyorsun.", future: "Büyük bir değişim seni bekliyor, bir sona hazırlıklı ol." }, 
        reversed: { past: "Değişime direndin, korkular seni durdurdu.", present: "Stagnasyondasın, değişime karşı çıkıyorsun.", future: "Bir sonu kabul edemeyebilirsin, ilerlemelisin." }, 
        description: "Dönüşüm, sonlar ve yenilenmeyi simgeler.",
        symbols: ["iskelet", "güneş", "nehir"],
        en: {
            name: "Death",
            upright: { past: "A phase ended; you transformed.", present: "You’re undergoing a profound transformation, renewing yourself.", future: "A major change awaits you; prepare for an end." },
            reversed: { past: "You resisted change; fears held you back.", present: "You’re stuck, opposing change.", future: "You may not accept an end; you must move forward." },
            description: "Symbolizes transformation, endings, and renewal."
        }
    },
    { 
        name: "Denge (Temperance)", 
        upright: { past: "Sabırla denge kurdun, uyum buldun.", present: "Dengede tutuyorsun, sakinlikle ilerliyorsun.", future: "Huzur ve uyum seni bekliyor, sabrın ödülünü alacaksın." }, 
        reversed: { past: "Dengesizlik seni yordu, aşırılıklar yaşadın.", present: "Aşırılıklara dikkat et, dengeni bulman gerekiyor.", future: "Uyumsuzluk seni zorlayabilir, ölçülü ol." }, 
        description: "Uyum, sabır ve dengeyi ifade eder.",
        symbols: ["su", "kupa", "melek"],
        en: {
            name: "Temperance",
            upright: { past: "You balanced with patience, finding harmony.", present: "You’re maintaining balance, proceeding calmly.", future: "Peace and harmony await you; your patience will be rewarded." },
            reversed: { past: "Imbalance exhausted you; you experienced extremes.", present: "Beware of extremes; you need to find balance.", future: "Disharmony may challenge you; be moderate." },
            description: "Expresses harmony, patience, and balance."
        }
    },
    { 
        name: "Şeytan (The Devil)", 
        upright: { past: "Bağımlılık ve tutku seni etkiledi, zincirler bağladı.", present: "Kısıtlanıyorsun, maddi veya duygusal bağlardan kurtulman gerekiyor.", future: "İradeni kullanmalısın, zincirlerden kurtulmak için mücadele et." }, 
        reversed: { past: "Zincirleri kırdın, özgürleştin.", present: "Özgürleşiyorsun, bağımlılıklardan kurtuluyorsun.", future: "Kısıtlamalardan tamamen kurtulacak ve özgürlüğe ulaşacaksın." }, 
        description: "Bağımlılık, tutku ve maddi zincirleri temsil eder.",
        symbols: ["zincir", "ateş", "boynuz"],
        en: {
            name: "The Devil",
            upright: { past: "Addiction and passion influenced you, binding you with chains.", present: "You’re restricted; you need to break free from material or emotional bonds.", future: "You must use your will, fighting to escape the chains." },
            reversed: { past: "You broke the chains, liberating yourself.", present: "You’re freeing yourself from addictions.", future: "You’ll completely escape restrictions and reach freedom." },
            description: "Represents addiction, passion, and material chains."
        }
    },
    { 
        name: "Kule (The Tower)", 
        upright: { past: "Ani bir yıkım seni güçlendirdi, gerçekle yüzleştin.", present: "Sarsıntı içindesin, beklenmedik bir değişim yaşıyorsun.", future: "Beklenmedik bir olay her şeyi değiştirecek, uyanış gelecek." }, 
        reversed: { past: "Felaketi atlattın, ama izler kaldı.", present: "Değişimden korkuyorsun, sarsıntıdan kaçınıyorsun.", future: "Gizli bir tehlike seni bekliyor, dikkatli ol." }, 
        description: "Ani değişim, yıkım ve uyanışı simgeler.",
        symbols: ["şimşek", "kule", "alev"],
        en: {
            name: "The Tower",
            upright: { past: "A sudden collapse strengthened you, confronting you with truth.", present: "You’re in upheaval, experiencing an unexpected change.", future: "An unexpected event will change everything; awakening will come." },
            reversed: { past: "You survived a disaster, but scars remain.", present: "You fear change, avoiding upheaval.", future: "A hidden danger awaits you; be cautious." },
            description: "Symbolizes sudden change, destruction, and awakening."
        }
    },
    { 
        name: "Yıldız (The Star)", 
        upright: { past: "Umut seni ayakta tuttu, iyileşme yaşadın.", present: "İyileşme ve umutla dolusun, iç huzur buluyorsun.", future: "Umut dolu bir başlangıç ve parlak bir gelecek seni bekliyor." }, 
        reversed: { past: "Umutsuzluk seni zorladı, inancını kaybettin.", present: "İnancını kaybediyorsun, umutsuzluk hissediyorsun.", future: "Hayal kırıklığıyla karşılaşabilirsin, ama umudu yeşerteceksin." }, 
        description: "Umut, ilham ve iyileşmeyi ifade eder.",
        symbols: ["yıldız", "su", "kuş"],
        en: {
            name: "The Star",
            upright: { past: "Hope kept you going; you healed.", present: "You’re filled with healing and hope, finding inner peace.", future: "A hopeful start and bright future await you." },
            reversed: { past: "Hopelessness challenged you; you lost faith.", present: "You’re losing faith, feeling hopeless.", future: "You may face disappointment, but you’ll nurture hope." },
            description: "Expresses hope, inspiration, and healing."
        }
    },
    { 
        name: "Ay (The Moon)", 
        upright: { past: "Belirsizlik seni yönlendirdi, korkularla yüzleştin.", present: "Yanılsamalar içindesin, gizemli bir sis seni sarıyor.", future: "Gizemli bir yolculukla karşılaşacaksın, dikkatli ol." }, 
        reversed: { past: "Korkular seni yanıltmış olabilir, belirsizlik yaşadın.", present: "Kafa karışıklığın azalıyor, gerçek ortaya çıkıyor.", future: "Gerçek açığa çıkacak, korkularından kurtulacaksın." }, 
        description: "Belirsizlik, korku ve bilinçaltını temsil eder.",
        symbols: ["ay", "kurt", "nehir"],
        en: {
            name: "The Moon",
            upright: { past: "Uncertainty guided you; you faced fears.", present: "You’re in illusions, shrouded by a mysterious fog.", future: "You’ll encounter a mysterious journey; be cautious." },
            reversed: { past: "Fears may have misled you; you experienced uncertainty.", present: "Your confusion is fading; truth is emerging.", future: "Truth will be revealed; you’ll free yourself from fears." },
            description: "Represents uncertainty, fear, and the subconscious."
        }
    },
    { 
        name: "Güneş (The Sun)", 
        upright: { past: "Başarı ve neşe seni aydınlattı, parlak bir dönemdi.", present: "Enerjin yüksek, iyimserlik seni kuşatıyor.", future: "Neşe, başarı ve mutluluk seni bekliyor, parlak bir dönem başlıyor." }, 
        reversed: { past: "Başarı gölgelendi, neşe kayboldu.", present: "İyimserliğini kaybediyorsun, karanlık hissediyorsun.", future: "Mutluluğu erteleyebilirsin, ama ışığı bulacaksın." }, 
        description: "Neşe, başarı ve berraklığı simgeler.",
        symbols: ["güneş", "çiçek", "çocuk"],
        en: {
            name: "The Sun",
            upright: { past: "Success and joy illuminated you; it was a bright period.", present: "Your energy is high; optimism surrounds you.", future: "Joy, success, and happiness await you; a bright period begins." },
            reversed: { past: "Success was overshadowed; joy faded.", present: "You’re losing optimism, feeling dark.", future: "You may delay happiness, but you’ll find the light." },
            description: "Symbolizes joy, success, and clarity."
        }
    },
    { 
        name: "Mahkeme (Judgement)", 
        upright: { past: "Uyanış yaşadın, bir dönemi kapattın.", present: "Karar aşamasındasın, içsel bir çağrı duyuyorsun.", future: "Dönüşüm ve yenilenme seni bekliyor, yeni bir başlangıç yapacaksın." }, 
        reversed: { past: "Hatayı kabul etmedin, uyanışı kaçırdın.", present: "Kendini yargılıyorsun, kararsızsın.", future: "Fırsatı kaçırabilirsin, ama harekete geçmelisin." }, 
        description: "Uyanış, yargı ve yenilenmeyi ifade eder.",
        symbols: ["melek", "borazan", "bulut"],
        en: {
            name: "Judgement",
            upright: { past: "You experienced an awakening, closing a chapter.", present: "You’re at a decision point, hearing an inner call.", future: "Transformation and renewal await you; you’ll make a new start." },
            reversed: { past: "You didn’t admit a mistake, missing the awakening.", present: "You’re judging yourself, indecisive.", future: "You may miss an opportunity, but you must act." },
            description: "Expresses awakening, judgment, and renewal."
        }
    },
    { 
        name: "Dünya (The World)", 
        upright: { past: "Bir döngüyü tamamladın, başarıya ulaştın.", present: "Tatmin içindesin, bütünlük hissediyorsun.", future: "Huzur, tamamlanma ve başarı seni bekliyor, büyük bir tatmin yaşayacaksın." }, 
        reversed: { past: "Tamamlayamadın, eksiklik yaşadın.", present: "Eksiklik hissediyorsun, kapanışı yapamıyorsun.", future: "Kapanışı yapman gerekecek, aksi takdirde eksiklik devam edebilir." }, 
        description: "Tamamlanma, bütünlük ve başarıyı temsil eder.",
        symbols: ["daire", "yıldız", "çelenk"],
        en: {
            name: "The World",
            upright: { past: "You completed a cycle, achieving success.", present: "You’re fulfilled, feeling whole.", future: "Peace, completion, and success await you; you’ll experience great satisfaction." },
            reversed: { past: "You couldn’t finish; you felt incomplete.", present: "You feel incomplete, unable to close.", future: "You’ll need closure, or incompleteness may persist." },
            description: "Represents completion, wholeness, and success."
        }
    }
];

let selectedCards = [];
let flippedCount = 0;
let selectedLayout = 3;
let maxCards = 0;
const flipSound = new Audio('sounds/parchment-flip.mp3');
const backgroundMusic = document.getElementById('backgroundMusic');
let currentLang = 'tr';

function generateTarotReading(userData, cardsData) {
    const { name, surname, city, relationshipStatus, occupation, birthDate } = userData;
    const birthDateObj = new Date(birthDate);
    const age = Math.floor((new Date() - birthDateObj) / (1000 * 60 * 60 * 24 * 365));

    const relationshipStatusComments = {
        tr: {
            single: "Bekar olmanın özgürlüğü, seni yeni yollara ve gizemlere açıyor, yalnızlığın seni güçlü kılıyor.",
            relationship: "İlişkide olmanın sıcaklığı, kaderinin yollarını aydınlatıyor ve sana derin bir bağ sunuyor.",
            married: "Evli olmanın sorumluluğu, seni eski bilgelerin gücüyle donatıyor ve sabırlı bir denge sağlıyor.",
            divorced: "Boşanmış olmanın deneyimi, içindeki derin bilgelikle seni yönlendiriyor ve yeni başlangıçlara hazırlıyor.",
            widowed: "Dul olmanın derinliği, kaderinin gizli sırlarını açığa vuruyor ve seni olgun bir yolculuğa çıkarıyor."
        },
        en: {
            single: "The freedom of being single opens you to new paths and mysteries, strengthening you with solitude.",
            relationship: "The warmth of being in a relationship illuminates the paths of your destiny and offers you a deep bond.",
            married: "The responsibility of being married empowers you with the strength of ancient wisdom and provides a patient balance.",
            divorced: "The experience of being divorced guides you with the deep wisdom within, preparing you for new beginnings.",
            widowed: "The depth of being widowed reveals the hidden secrets of your fate and takes you on a mature journey."
        }
    };

    const ageComments = {
        tr: age < 25 ? "Genç yaşında enerjin, kaderinin parlak yollarını aydınlatıyor ve cesaretle dolusun." : age < 40 ? "Olgunluğa adım attığın bu dönem, gizemli bir dönüşüm getiriyor ve bilgelik kazanıyorsun." : "Tecrübelerin, eski bir bilgenin bilgeliğiyle seni güçlendiriyor ve sakin bir güç sunuyor.",
        en: age < 25 ? "Your youthful energy illuminates the bright paths of your destiny, and you’re filled with courage." : age < 40 ? "This period of stepping into maturity brings a mysterious transformation, and you’re gaining wisdom." : "Your experience strengthens you with the wisdom of an ancient sage, offering a calm power."
    };

    const cityComments = {
        tr: city.toLowerCase().includes('istan') ? `${city}’un hareketli enerjisi, kaderinin akışını hızlandırıyor ve seni canlı tutuyor.` : `${city}, sana sakin bir zemin sunarak gizli sırlarını açığa vuruyor ve huzur sağlıyor.`,
        en: city.toLowerCase().includes('istan') ? `${city}’s vibrant energy accelerates the flow of your destiny, keeping you lively.` : `${city} offers you a calm foundation, revealing its hidden secrets and providing peace.`
    };

    const occupationComments = {
        tr: occupation ? `${occupation} mesleğin, seni disiplinli bir yolcu yapar ve kaderinin izlerini takip etmene yardımcı olur, sabırlı bir yapı kazandırıyor.` : "Mesleğin belirtilmemiş, ancak içindeki potansiyel, gizemli bir yolculuğa hazır ve büyük fırsatlar barındırıyor.",
        en: occupation ? `Your ${occupation} occupation makes you a disciplined traveler, helping you follow the traces of your destiny and granting you a patient structure.` : "Your occupation is unspecified, but your inner potential is ready for a mysterious journey and holds great opportunities."
    };

    const symbols = {
        tr: {
            wind: "rüzgar, kaderinin değişken yollarını fısıldıyor ve yönünü belirliyor.",
            path: "yol, gizemli bir yolculuğun işaretidir ve seni yeni diyarlara sürüklüyor.",
            bird: "kuş, özgürlüğün ve haberlerin habercisidir, parlak mesajlar getiriyor.",
            staff: "asa, gücün ve iradenin sembolüdür, seni ayakta tutuyor.",
            cup: "kupa, duyguların ve bereketin işaretidir, bolluk vaad ediyor.",
            sword: "kılıç, mücadele ve kararlılığın göstergesidir, zafer için mücadele etmeni sağlıyor.",
            coin: "para, maddi bolluğun ve istikrarın habercisidir, zenginlik getiriyor.",
            moon: "ay, gizem ve sezginin gölgelerini aydınlatır, içsel sırları ortaya çıkarıyor.",
            veil: "perde, saklı sırların ve bilinmeyenlerin perdesidir, gizemi çözmeni bekliyor.",
            water: "su, duyguların ve dönüşümün akıntısını taşır, değişimi getiriyor.",
            throne: "taht, otorite ve kontrolün sembolüdür, liderlik gücünü temsil ediyor.",
            lion: "aslan, cesaretin ve gücün koruyucusudur, seni tehlikelerden koruyor.",
            shield: "kalkan, tehlikelerden koruyan bir kalkandır, güvenliğin sembolü.",
            flower: "çiçek, bereketin ve doğanın güzelliğinin işaretidir, hayatı güzelleştiriyor.",
            field: "tarla, büyüme ve bolluğun alanını temsil eder, verimli bir dönem sunuyor.",
            river: "ırmak, yaşamın akışını ve değişimi taşır, seni yeni bir aşamaya taşıyor.",
            apple: "elma, bilgi ve baştan çıkarmanın sembolü, bir seçimle karşılaşabilirsin.",
            angel: "melek, koruma ve ilahi rehberliğin işareti, seni yönlendiriyor.",
            horse: "at, hız ve gücün sembolü, hızlı bir ilerleme vaat ediyor.",
            helmet: "miğfer, savunma ve cesaretin göstergesi, tehlikelere karşı hazırlıklı ol.",
            rose: "gül, aşk ve güzelliğin sembolü, duygusal bir bağ getiriyor.",
            chain: "zincir, bağımlılık ve özgürleşmenin işareti, zincirlerinden kurtulabilirsin.",
            fire: "ateş, tutku ve dönüşümün sembolü, büyük bir değişim başlatıyor.",
            horn: "boynuz, güç ve uyarıların işareti, dikkatli olman gerekebilir.",
            star: "yıldız, umut ve rehberliğin sembolü, parlak bir yol gösteriyor.",
            wolf: "kurt, vahşi doğanın ve içgüdülerin temsilcisi, korkularına dikkat et.",
            skeleton: "iskelet, sonlar ve yenilenmenin işareti, bir döngü kapanıyor.",
            sun: "güneş, neşe ve başarıyı temsil ediyor, parlak bir dönemi müjdeliyor.",
            child: "çocuk, masumiyet ve yeni başlangıçların sembolü, taze bir umut getiriyor.",
            circle: "daire, tamamlanma ve döngülerin işareti, huzur sunuyor.",
            wreath: "çelenk, zafer ve başarıyı simgeliyor, ödülleri temsil ediyor.",
            book: "kitap, bilgi ve gizemlerin sembolü, bilgelik arayışını destekliyor.",
            crown: "tac, otorite ve liderliğin işareti, güç kazandırıyor."
        },
        en: {
            wind: "the wind whispers the shifting paths of your destiny, guiding your direction.",
            path: "the path is a sign of a mysterious journey, drawing you to new realms.",
            bird: "the bird heralds freedom and messages, bringing bright news.",
            staff: "the staff symbolizes power and will, keeping you upright.",
            cup: "the cup signifies emotions and abundance, promising prosperity.",
            sword: "the sword represents struggle and determination, driving you to victory.",
            coin: "the coin heralds material prosperity and stability, bringing wealth.",
            moon: "the moon illuminates the shadows of mystery and intuition, revealing inner secrets.",
            veil: "the veil is the curtain of hidden secrets and unknowns, awaiting your discovery.",
            water: "the water carries the flow of emotions and transformation, bringing change.",
            throne: "the throne symbolizes authority and control, representing leadership power.",
            lion: "the lion is the guardian of courage and strength, protecting you from dangers.",
            shield: "the shield protects you from dangers, symbolizing safety.",
            flower: "the flower signifies abundance and the beauty of nature, enhancing life.",
            field: "the field represents growth and prosperity, offering a fruitful period.",
            river: "the river carries the flow of life and change, taking you to a new phase.",
            apple: "the apple symbolizes knowledge and temptation; you may face a choice.",
            angel: "the angel signifies protection and divine guidance, directing you.",
            horse: "the horse symbolizes speed and power, promising rapid progress.",
            helmet: "the helmet represents defense and courage, preparing you for dangers.",
            rose: "the rose symbolizes love and beauty, bringing an emotional connection.",
            chain: "the chain signifies addiction and liberation; you can break free from your chains.",
            fire: "the fire symbolizes passion and transformation, initiating a major change.",
            horn: "the horn signifies power and warnings; you may need to be cautious.",
            star: "the star symbolizes hope and guidance, showing a bright path.",
            wolf: "the wolf represents wild nature and instincts; be mindful of your fears.",
            skeleton: "the skeleton signifies endings and renewal; a cycle is closing.",
            sun: "the sun represents joy and success, heralding a bright period.",
            child: "the child symbolizes innocence and new beginnings, bringing fresh hope.",
            circle: "the circle signifies completion and cycles, offering peace.",
            wreath: "the wreath symbolizes victory and success, representing rewards.",
            book: "the book symbolizes knowledge and mysteries, supporting your quest for wisdom.",
            crown: "the crown signifies authority and leadership, granting you power."
        }
    };

    let detailedReading = `<div class="user-info hidden"><h3 class="visibility:hidden;display:none;">🪞</h3>`;
    if (currentLang === 'tr') {
        detailedReading += `Eski bilgelerin rehberliğinde, ${name} ${surname}, ${city}’de yaşayan bir ruhsunuz. ${relationshipStatusComments.tr[relationshipStatus]} ${ageComments.tr} ${cityComments.tr} ${occupationComments.tr}</div>\n\n`;

        // Seçilen kartlar bölümü
        detailedReading += `<div class="selected-cards"><h3>Seçilen Kartlar</h3>`;
        cardsData.forEach((card, index) => {
            detailedReading += `${card.card.name} (${card.reversed ? "Ters" : "Düz"})`;
            if (index < cardsData.length - 1) detailedReading += `<br>`;
        });
        detailedReading += `</div>\n\n`;

        // Kart yorumları
        detailedReading += `<div class="card-readings"><h3>Kart Yorumları</h3>`;
        if (selectedLayout === 1) {
            const card = cardsData[0];
            const cardData = card.card;
            detailedReading += `Birinci kartın, ${cardData.name} (${card.reversed ? "Ters" : "Düz"}), sana şu mesajı veriyor: ${card.reversed ? cardData.reversed.present : cardData.upright.present}. Bu, kaderinin şu anki yolunda bir işaret olarak beliriyor.\n\n`;
        } else if (selectedLayout === 3) {
            for (let i = 0; i < 3; i++) {
                const card = cardsData[i];
                const cardData = card.card;
                const position = ['Geçmiş', 'Şimdi', 'Gelecek'][i];
                detailedReading += `${position}: ${cardData.name} (${card.reversed ? "Ters" : "Düz"}) kartı, ${card.reversed ? cardData.reversed[i === 0 ? 'past' : i === 1 ? 'present' : 'future'] : cardData.upright[i === 0 ? 'past' : i === 1 ? 'present' : 'future']}. Bu, kaderinin ${position.toLowerCase()} bölümünde bir sır açığa vuruyor.\n\n`;
            }
        } else if (selectedLayout === 5) {
            for (let i = 0; i < 5; i++) {
                const card = cardsData[i];
                const cardData = card.card;
                const position = ['Durumun Özü', 'Geçmiş Etki', 'Şu Anki Durum', 'Engeller/Fırsatlar', 'Sonuç'][i];
                detailedReading += `${position}: ${cardData.name} (${card.reversed ? "Ters" : "Düz"}) kartı, ${card.reversed ? cardData.reversed[i < 2 ? 'past' : i === 2 ? 'present' : 'future'] : cardData.upright[i < 2 ? 'past' : i === 2 ? 'present' : 'future']}. Bu, kaderinin ${position.toLowerCase()} kısmında bir mesaj taşıyor.\n\n`;
            }
        } else if (selectedLayout === 10) {
            for (let i = 0; i < 10; i++) {
                const card = cardsData[i];
                const cardData = card.card;
                const position = ['Durumun Merkezi', 'Karşıt Etki', 'Temel', 'Geçmiş', 'Hedef', 'Gelecek', 'Korkular', 'Çevre', 'İçsel Durum', 'Sonuç'][i];
                detailedReading += `${position}: ${cardData.name} (${card.reversed ? "Ters" : "Düz"}) kartı, ${card.reversed ? cardData.reversed[i < 4 ? 'past' : i < 6 ? 'future' : 'present'] : cardData.upright[i < 4 ? 'past' : i < 6 ? 'future' : 'present']}. Bu, kaderinin ${position.toLowerCase()} alanında bir işaret sunuyor.\n\n`;
            }
        }
        detailedReading += `</div>\n\n`;

        detailedReading += `<div class="detailed-reading"><h3>Detaylı Fal Yorumu</h3>`;
        detailedReading += `Şimdi, kaderinin derin gölgelerini inceleyelim: İlk gördüğüm bir gölge, ${name}’nin çevresinde bir çatışma işareti veriyor – yakın zamanda, ilk gördüğün biriyle bir kavga yaşayabilirsin, bu durum seni zorlayabilir. Çevrende hafif toplu bir insan var, belki ${occupation} mesleğinde tanıştığın biri, ve bu kişi senin arkandan kuyu kazıyor; dikkatli ol, bu yakınında olan biri, sürekli gözü üzerinde, seni üzecek bir düşman olabilir.\n\n`;

        cardsData.forEach((card, index) => {
            const cardData = card.card;
            const symbolsList = cardData.symbols || [];
            const position = selectedLayout === 1 ? 'şimdi' : selectedLayout === 3 ? ['geçmiş', 'şimdi', 'gelecek'][index] : selectedLayout === 5 ? ['durum', 'geçmiş', 'şimdi', 'engel', 'sonuç'][index] : ['merkez', 'karşıt', 'temel', 'geçmiş', 'hedef', 'gelecek', 'korku', 'çevre', 'içsel', 'sonuç'][index];
            detailedReading += `Kaderinin ${position} yolunda, ${cardData.name} kartının sembolleri ve anlamları konuşuyor: `;
            symbolsList.forEach((symbol, i) => {
                detailedReading += `${symbols.tr[symbol]} `;
                if (i < symbolsList.length - 1) detailedReading += 've ';
            });
            detailedReading += `${card.reversed ? 'Ters duruşu, bir uyarı getiriyor: Bu semboller, gizli engeller, tuzaklar veya düşmanlar gösterebilir; dikkatli ol, seni zorlayabilir.' : 'Düz duruşu, bir bereket, aydınlık haber ve fırsatlar müjdeliyor; bu, parlak bir dönem başlatabilir.'} `;
            detailedReading += `${card.reversed ? `Bu, ${position}’da bir mücadele getirebilir; belki ${city}’deki enerjilerle başa çıkman gerekecek.` : `Bu, ${position}’da bir zafer ve huzur getirecek; ${occupation} mesleğindeki disiplininle bu fırsatı değerlendirebilirsin.`}\n\n`;
        });


        detailedReading += `Bir deve sembolü görüyorum – eski bilgeler der ki, deve mal getirir ve bolluk müjdeliyor; bu, ${city}’de beklenmedik bir maddi fırsatın habercisi olabilir, ama dikkatli ol, bu fırsatı elde etmek için bir engeli aşman gerekebilir. Bir horoz beliriyor – horoz, sabahın aydınlığını ve güzel haberleri getirir, ama bazılarına göre bir adağın işaretidir; adak yoksa, bu sana parlak bir haber olarak yorumlanabilir, belki ${occupation} mesleğinde bir yükseliş. Bir bayrak sembolü yükseliyor – bu, devlet kapında bir iş veya önemli bir görev anlamına gelebilir; belki ${city}’de bir resmi işlem veya ${occupation} mesleğinde bir ilerleme seni bekliyor, ama bu süreçte bir zorlukla karşılaşabilirsin.\n\n`;

        detailedReading += `Deniz aşırı bir yol görüyorum – senin için uzak bir yolculuk arzusu var, ama bu yolda bazı engellerle karşılaşacaksın, belki ${city}’den uzaklaşman için bir karar vermen gerekecek. Ancak, eski bilgelerin rehberliğinde bu engelleri aşacak, yolun sonunda bir aydınlık, bolluk ve mutlulukla karşılaşacaksın. Yatan birini görüyorum – evinde veya yakınında biri rahatsız olabilir; bu, seni üzecek bir haber getirebilir, ama sabrınla bu zorluğu aşacak ve ${occupation} mesleğindeki disiplininle güç bulacaksın. Yakında kalabalık bir ortamda bulunacaksın, ama bu ortam pek aydınlık olmayabilir; dikkatli ol, seni üzecek bir durumla karşılaşabilirsin, belki ${relationshipStatus} durumunla ilgili bir kararsızlık yaşayabilirsin.\n\n`;

        detailedReading += `Kaderinin yollarında üç gölge görüyorum – biri bir kolundan, diğeri diğer kolundan seni çekiyor, ve bir üçüncüsü zihninde karışıklık yaratıyor, sanki üç kişi veya seçenek arasında kalmışsın ve ne yapacağını bilmiyorsun. Bu, ${relationshipStatus} durumunla, ${occupation} mesleğindeki bir kararla, veya ${city}’deki çevresel etkilerle ilgili olabilir. Ancak, eski bilgeler der ki, doğru yolu seçip bu karışıklıktan aydınlığa çıkacaksın, belki ${ageComments.tr} enerjinle bu zorluğu aşacaksın. Gözlerin var, düşmanların çok, ama seni koruyan gizli bir güç – belki ${city}’nin sakin enerjisi, ${occupation} mesleğinin disiplini, veya ${relationshipStatusComments.tr[relationshipStatus]} bağın – bu düşmanların sana zarar vermesini engelliyor. Dikkatli ol, ama korkma, kaderin seni doğru yola yönlendirecek ve parlak bir gelecek sunacak.\n\n`;

        detailedReading += `Ayrıca, bir kale sembolü görüyorum – bu, güç ve koruma anlamına gelir; ${city}’de veya ${occupation} mesleğinde bir sığınak bulabilirsin, ama bu koruma için bir bedel ödemen gerekebilir. Bir gül sembolü beliriyor – gül, aşk ve güzelliğin sembolü, belki ${relationshipStatus} durumunla ilgili bir derinleşme veya ${city}’de bir romantik karşılaşma seni bekliyor. Bir yıldız sembolü parlıyor – umut ve rehberlik sunuyor, ${occupation} mesleğinde bir ilerleme veya ${city}’de bir fırsat senin yolunu aydınlatacak, ama bu yolda sabır ve cesaret gerekecek.`;

    } else { // English
        detailedReading += `<div class="user-info"><h3>User Information</h3>Guided by the wisdom of ancient sages, ${name} ${surname}, a soul residing in ${city}. ${relationshipStatusComments.en[relationshipStatus]} ${ageComments.en} ${cityComments.en} ${occupationComments.en}</div>\n\n`;

        // Seçilen kartlar bölümü
        detailedReading += `<div class="selected-cards"><h3>Selected Cards</h3>`;
        cardsData.forEach((card, index) => {
            detailedReading += `${card.card.name} (${card.reversed ? "Reversed" : "Upright"})`;
            if (index < cardsData.length - 1) detailedReading += `<br>`;
        });
        detailedReading += `</div>\n\n`;

        // Kart yorumları
        detailedReading += `<div class="card-readings"><h3>Card Readings</h3>`;
        if (selectedLayout === 1) {
            const card = cardsData[0];
            const cardData = card.card;
            detailedReading += `Your first card, ${cardData.name} (${card.reversed ? "Reversed" : "Upright"}), delivers this message: ${card.reversed ? cardData.reversed.present : cardData.upright.present}. This emerges as a sign on your current path of destiny.\n\n`;
        } else if (selectedLayout === 3) {
            for (let i = 0; i < 3; i++) {
                const card = cardsData[i];
                const cardData = card.card;
                const position = ['Past', 'Present', 'Future'][i];
                detailedReading += `${position}: ${cardData.name} (${card.reversed ? "Reversed" : "Upright"}) card reveals, ${card.reversed ? cardData.reversed[i === 0 ? 'past' : i === 1 ? 'present' : 'future'] : cardData.upright[i === 0 ? 'past' : i === 1 ? 'present' : 'future']}. This unveils a secret in the ${position.toLowerCase()} part of your destiny.\n\n`;
            }
        } else if (selectedLayout === 5) {
            for (let i = 0; i < 5; i++) {
                const card = cardsData[i];
                const cardData = card.card;
                const position = ['Core Situation', 'Past Influence', 'Current State', 'Challenges/Opportunities', 'Outcome'][i];
                detailedReading += `${position}: ${cardData.name} (${card.reversed ? "Reversed" : "Upright"}) card reveals, ${card.reversed ? cardData.reversed[i < 2 ? 'past' : i === 2 ? 'present' : 'future'] : cardData.upright[i < 2 ? 'past' : i === 2 ? 'present' : 'future']}. This carries a message in the ${position.toLowerCase()} part of your destiny.\n\n`;
            }
        } else if (selectedLayout === 10) {
            for (let i = 0; i < 10; i++) {
                const card = cardsData[i];
                const cardData = card.card;
                const position = ['Central Situation', 'Opposing Factor', 'Foundation', 'Past', 'Goal', 'Future', 'Fears', 'Environment', 'Inner State', 'Outcome'][i];
                detailedReading += `${position}: ${cardData.name} (${card.reversed ? "Reversed" : "Upright"}) card reveals, ${card.reversed ? cardData.reversed[i < 4 ? 'past' : i < 6 ? 'future' : 'present'] : cardData.upright[i < 4 ? 'past' : i < 6 ? 'future' : 'present']}. This offers a sign in the ${position.toLowerCase()} area of your destiny.\n\n`;
            }
        }
        detailedReading += `</div>\n\n`;

        detailedReading += `<div class="detailed-reading"><h3>Detailed Reading</h3>Now, let us peer into the deep shadows of your destiny: The first shadow I see signals a conflict around ${name} – you might soon quarrel with someone you first meet; this situation could challenge you. There’s a stout person in your circle, perhaps someone you met through your ${occupation} profession, digging a pit behind your back; be cautious, this close enemy is always watching you, potentially causing harm and sorrow.\n\n`;

        cardsData.forEach((card, index) => {
            const cardData = card.card;
            const symbolsList = cardData.symbols || [];
            const position = selectedLayout === 1 ? 'present' : selectedLayout === 3 ? ['past', 'present', 'future'][index] : selectedLayout === 5 ? ['core', 'past', 'present', 'challenge', 'outcome'][index] : ['center', 'opposing', 'foundation', 'past', 'goal', 'future', 'fear', 'environment', 'inner', 'outcome'][index];
            detailedReading += `On the ${position} path of your destiny, the symbols and meanings of the ${cardData.name} card speak: `;
            symbolsList.forEach((symbol, i) => {
                detailedReading += `${symbols.en[symbol]} `;
                if (i < symbolsList.length - 1) detailedReading += 'and ';
            });
            detailedReading += `${card.reversed ? 'Its reversed position brings a warning: These symbols may indicate hidden obstacles, traps, or enemies; be cautious, as this could challenge you.' : 'Its upright position heralds abundance, bright news, and opportunities; this could start a bright period for you.'} `;
            detailedReading += `${card.reversed ? `This may bring a struggle in your ${position}; you might need to deal with the energies of ${city}.` : `This will bring victory and peace in your ${position}; you can leverage the discipline of your ${occupation} profession to seize this opportunity.`}\n\n`;
        });

        detailedReading += `I see a camel symbol – ancient sages say the camel brings wealth and abundance; this could herald an unexpected material opportunity in ${city}, but you’ll need to overcome an obstacle to claim it. A rooster appears – the rooster heralds the dawn’s light and good news, but some say it’s a sign of sacrifice; if there’s no sacrifice, I interpret this as a bright message for you, perhaps an advancement in your ${occupation} profession. A flag symbol rises – this signifies a matter at the gates of authority, perhaps an official task in ${city} or progress in your ${occupation} profession, but you might face a challenge in this process.\n\n`;

        detailedReading += `I see an overseas path – you desire a distant journey, but you’ll face obstacles on this road, perhaps needing to make a decision to leave ${city}. However, guided by ancient sages, you’ll overcome these barriers, finding light, abundance, and joy at the end of your path. I see a lying figure – someone in your home or close to you may be unwell; this could bring distressing news, but with your patience and the discipline of your ${occupation} profession, you’ll find strength to overcome it. You’ll soon be in a crowded place, but this environment may not be bright; be cautious, you might face a troubling situation, perhaps related to indecision in your ${relationshipStatus} status.\n\n`;

        detailedReading += `I see three shadows on your destiny’s path – one pulling from one arm, another from the other, and a third creating confusion in your mind, as if you’re torn between three people or choices, unsure of what to do. This could relate to your ${relationshipStatus} status, a decision in your ${occupation} profession, or environmental influences in ${city}. Yet, the ancient sages say you’ll choose the right path and emerge into the light, perhaps with the energy of ${ageComments.en} guiding you through this challenge. There are eyes upon you, many enemies, but a hidden force protects you – perhaps ${city}’s calm energy, the discipline of your ${occupation} profession, or the bond of ${relationshipStatusComments.en[relationshipStatus]} – preventing these foes from harming you. Be vigilant, but do not fear, for your destiny will guide you to a bright future.\n\n`;

        detailedReading += `Additionally, I see a castle symbol – this signifies strength and protection; you might find a refuge in ${city} or your ${occupation} profession, but this protection may come at a cost. A rose symbol appears – the rose symbolizes love and beauty, perhaps a deepening in your ${relationshipStatus} status or a romantic encounter in ${city}. A star symbol shines – it offers hope and guidance, illuminating a progress in your ${occupation} profession or an opportunity in ${city}, but this path will require patience and courage.`;
    }

    return detailedReading;
}

function startExperience() {
    const introScreen = document.getElementById('introScreen');
    const mainContent = document.getElementById('mainContent');
    if (!introScreen || !mainContent) {
        console.error("introScreen veya mainContent elementi bulunamadı!");
        return;
    }
    introScreen.classList.add('fade-out');
    setTimeout(() => {
        introScreen.classList.add('hidden');
        mainContent.classList.remove('hidden');
        backgroundMusic.play();
        changeLanguage();
    }, 1000);
}

function changeLanguage() {
    currentLang = document.getElementById('languageSelect')?.value || 'tr'; // Null kontrolü
    const texts = {
        tr: {
            introTitle: "Tarot Dünyasına Hoş Geldiniz",
            startButton: "Keşfetmeye Başla",
            formTitle: "Tarot Falına Hoş Geldiniz",
            nameLabel: "İsim",
            surnameLabel: "Soyisim",
            cityLabel: "Şehir",
            relationshipStatusLabel: "İlişki Durumu",
            occupationLabel: "Meslek",
            birthDateLabel: "Doğum Tarihi",
            layoutLabel: "Fal Türünü Seç:",
            submitButton: "Falı Başlat",
            cardTitle: "Kartlarını Seç",
            resultTitle: "Falın Sonucu",
            copyButton: "Sonucu Kopyala",
            saveButton: "Sonucu Kaydet",
            savedButton: "Kaydedilen Falları Gör",
            restartButton: "Yeniden Başla",
            savedTitle: "Kaydedilen Fallar",
            backButton: "Geri Dön",
            muteButton: isMusicPlaying ? "🎵 Müziği Kapat" : "🎵 Müziği Aç",
            single: "Bekar",
            relationship: "İlişkide",
            married: "Evli",
            divorced: "Boşanmış",
            widowed: "Dul"
        },
        en: {
            introTitle: "Welcome to the World of Tarot",
            startButton: "Start Exploring",
            formTitle: "Welcome to Tarot Reading",
            nameLabel: "Name",
            surnameLabel: "Surname",
            cityLabel: "City",
            relationshipStatusLabel: "Relationship Status",
            occupationLabel: "Occupation",
            birthDateLabel: "Birth Date",
            layoutLabel: "Choose Reading Type:",
            submitButton: "Start Reading",
            cardTitle: "Choose Your Cards",
            resultTitle: "Your Reading Result",
            copyButton: "Copy Result",
            saveButton: "Save Result",
            savedButton: "View Saved Readings",
            restartButton: "Start Over",
            savedTitle: "Saved Readings",
            backButton: "Back",
            muteButton: isMusicPlaying ? "🎵 Mute Music" : "🎵 Play Music",
            single: "Single",
            relationship: "Relationship",
            married: "Married",
            divorced: "Divorced",
            widowed: "Widowed"
        }
    };
    const elements = {
        introTitle: document.getElementById('introTitle'),
        startButton: document.getElementById('startButton'),
        formTitle: document.getElementById('formTitle'),
        nameLabel: document.getElementById('nameLabel'),
        surnameLabel: document.getElementById('surnameLabel'),
        cityLabel: document.getElementById('cityLabel'),
        relationshipStatusLabel: document.getElementById('relationshipStatusLabel'),
        occupationLabel: document.getElementById('occupationLabel'),
        birthDateLabel: document.getElementById('birthDateLabel'),
        layoutLabel: document.getElementById('layoutLabel'),
        submitButton: document.getElementById('submitButton'),
        cardTitle: document.getElementById('cardTitle'),
        resultTitle: document.getElementById('resultTitle'),
        copyButton: document.getElementById('copyButton'),
        saveButton: document.getElementById('saveButton'),
        savedButton: document.getElementById('savedButton'),
        restartButton: document.getElementById('restartButton'),
        savedTitle: document.getElementById('savedTitle'),
        backButton: document.getElementById('backButton'),
        muteButton: document.getElementById('muteButton')
    };

    for (const [key, element] of Object.entries(elements)) {
        if (element) {
            element.textContent = texts[currentLang][key];
        } else {
            console.warn(`Element '${key}' bulunamadı. Bu, DOM’da eksik olabilir.`);
        }
    }

    // Input placeholder'larını güncelle
    document.getElementById('name')?.setAttribute('placeholder', texts[currentLang].nameLabel || '');
    document.getElementById('surname')?.setAttribute('placeholder', texts[currentLang].surnameLabel || '');
    document.getElementById('city')?.setAttribute('placeholder', texts[currentLang].cityLabel || '');
    document.getElementById('occupation')?.setAttribute('placeholder', texts[currentLang].occupationLabel || '');

    // İlişki durumu seçeneklerini güncelle
    const relationshipSelect = document.getElementById('relationshipStatus');
    if (relationshipSelect) {
        relationshipSelect.innerHTML = '<option value="" disabled selected>' + (texts[currentLang].relationshipStatusLabel || 'Seçiniz / Select') + '</option>';
        ['single', 'relationship', 'married', 'divorced', 'widowed'].forEach(status => {
            const option = document.createElement('option');
            option.value = status;
            option.textContent = texts[currentLang][status] || status;
            relationshipSelect.appendChild(option);
        });
    }

    // Kart Seçimini uygula
    const layoutSelect = document.getElementById('layout');
    if (layoutSelect) {
        layoutSelect.innerHTML = '';
        const layouts = [
            { value: 1, text: currentLang === 'tr' ? '1 Kart' : '1 Card' },
            { value: 3, text: currentLang === 'tr' ? '3 Kart' : '3 Cards' },
            { value: 5, text: currentLang === 'tr' ? '5 Kart' : '5 Cards' },
            { value: 10, text: currentLang === 'tr' ? '10 Kart' : '10 Cards' }
        ];
        layouts.forEach(layout => {
            const option = document.createElement('option');
            option.value = layout.value;
            option.textContent = layout.text;
            if (layout.value === selectedLayout) option.selected = true; // Mevcut seçimi koru
            layoutSelect.appendChild(option);
        });
    }
}

document.getElementById('infoForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const userForm = document.getElementById('userForm');
    const cardSelection = document.getElementById('cardSelection');
    if (!userForm || !cardSelection) {
        console.error("userForm veya cardSelection elementi bulunamadı!");
        return;
    }
    selectedLayout = parseInt(document.getElementById('layout')?.value || 3);
    maxCards = selectedLayout;
    userForm.classList.add('hidden');
    cardSelection.classList.remove('hidden');
    selectedCards = [];
    flippedCount = 0;
    updateCardDeck();
});

function updateCardDeck() {
    const cardDeck = document.getElementById('cardDeck');
    if (!cardDeck) {
        console.error("cardDeck elementi bulunamadı!");
        return;
    }
    cardDeck.innerHTML = '';

    tarotCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.name = card.name; // Kart adını sakla
        cardElement.dataset.cardName = card.name; // Kart adını parşömen için sakla
        cardElement.style.order = index; // Kart sıralaması için
        cardElement.onclick = () => selectCard(card, cardElement);
        cardDeck.appendChild(cardElement);

        let isDown = false;
        let startX;
        let scrollLeft;

        cardDeck.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - cardDeck.offsetLeft;
            scrollLeft = cardDeck.scrollLeft;
        });

        cardDeck.addEventListener('mouseleave', () => {
            isDown = false;
        });

        cardDeck.addEventListener('mouseup', () => {
            isDown = false;
        });

        cardDeck.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - cardDeck.offsetLeft;
            const walk = (x - startX) * 2;
            cardDeck.scrollLeft = scrollLeft - walk;
        });

        // Telefon için
        cardDeck.addEventListener('touchstart', (e) => {
            isDown = true;
            startX = e.touches[0].pageX - cardDeck.offsetLeft;
            scrollLeft = cardDeck.scrollLeft;
        });

        cardDeck.addEventListener('touchend', () => {
            isDown = false;
        });

        cardDeck.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.touches[0].pageX - cardDeck.offsetLeft;
            const walk = (x - startX) * 2;
            cardDeck.scrollLeft = scrollLeft - walk;
        });
    });
}

function selectCard(card, cardElement) {
    if (!cardElement || selectedCards.length >= maxCards) {
        console.error("cardElement null veya maksimum kart sayısına ulaşıldı:", cardElement, selectedCards.length, maxCards);
        return;
    }

    console.log("Seçilen kart:", card.name, "Element:", cardElement);

    const selectedCard = cardElement.cloneNode(true);
    selectedCard.classList.remove('card');
    selectedCard.classList.add('selected-card');
    selectedCard.dataset.name = card.name; 
    selectedCard.dataset.cardName = card.name; 
    selectedCard.onclick = () => flipSelectedCard(selectedCard);

    cardElement.classList.add('disappearing');
    flipSound.currentTime = 0; 
    flipSound.play();
    setTimeout(() => {
        if (cardElement.parentNode) {
            cardElement.parentNode.removeChild(cardElement);
        } else {
            console.error("cardElement'in parentNode'u bulunamadı!");
        }
        document.getElementById('selectedCards').appendChild(selectedCard);
        updateParchment();
    }, 500);

    selectedCards.push({ card: card, reversed: Math.random() < 0.5, lang: currentLang });


    if (selectedCards.length === maxCards) {
        setTimeout(() => {
            const cardDeck = document.getElementById('cardDeck');
            if (cardDeck) {
                cardDeck.innerHTML = '';
            } else {
                console.error("cardDeck elementi temizlenirken bulunamadı!");
            }
        }, 500);
    }
}

function flipSelectedCard(cardElement) {
    if (!cardElement || cardElement.classList.contains('flipped')) return;

    const cardData = selectedCards.find(c => c.card.name === cardElement.dataset.name);
    if (!cardData) {
        console.error("Kart verisi bulunamadı:", cardElement.dataset.name);
        return;
    }

    const imageName = cardData.card.name.split(' (')[1].slice(0, -1).toLowerCase().replace(/\s+/g, '-');
    cardElement.style.backgroundImage = `url('images/${imageName}.png')`;
    if (cardData.reversed) cardElement.style.transform = "rotateY(180deg) rotate(180deg)";

    flipSound.currentTime = 0;
    flipSound.play();

    cardElement.classList.add('flipped');
    flippedCount++;

    updateParchment();

    if (flippedCount === maxCards) {
        setTimeout(showResult, 1000);
    }
}

function updateParchment() {
    const parchment = document.getElementById('selectedCardsParchment');
    const selectedCardsParchment = document.getElementById('selectedCards');
    if (!parchment || !selectedCardsParchment) {
        console.error("selectedCardsParchment veya selectedCards elementi bulunamadı!");
        return;
    }


    parchment.classList.remove('hidden');


    const flippedCards = selectedCards.filter(card => document.querySelector(`.selected-card[data-name="${card.card.name}"]`)?.classList.contains('flipped'));
    if (flippedCards.length === 0) {
        parchment.innerHTML = '<p style="font-style: italic;">Seçilen kartlar henüz çevrilmedi.</p>';
        return;
    }


    parchment.innerHTML = '<h3 style="margin-bottom: 10px;">Seçilen Kartlar</h3>';
    flippedCards.forEach(card => {
        const cardName = card.card.name;
        const cardSpan = document.createElement('span');
        cardSpan.classList.add('card-name');
        cardSpan.textContent = cardName + (card.reversed ? ' (Ters)' : ' (Düz)');
        parchment.appendChild(cardSpan);
    });
}

function showResult() {
    const cardSelection = document.getElementById('cardSelection');
    const resultSection = document.getElementById('resultSection');
    const resultText = document.getElementById('resultText');
    if (!cardSelection || !resultSection || !resultText) {
        console.error("cardSelection, resultSection veya resultText elementi bulunamadı!");
        return;
    }
    cardSelection.classList.add('hidden');

    const name = document.getElementById('name')?.value || '';
    const surname = document.getElementById('surname')?.value || '';
    const city = document.getElementById('city')?.value || '';
    const relationshipStatus = document.getElementById('relationshipStatus')?.value || '';
    const occupation = document.getElementById('occupation')?.value || '';
    const birthDate = document.getElementById('birthDate')?.value || '';

    console.log("Kullanıcı verileri:", { name, surname, city, relationshipStatus, occupation, birthDate });
    console.log("Seçilen kartlar:", selectedCards);

    // Kullanıcı verilerinin ve kartların boş olup olmadığını kontrol et
    if (!name || !surname || !city || !relationshipStatus || !occupation || !birthDate || selectedCards.length === 0) {
        resultText.innerHTML = currentLang === 'tr' ? "Lütfen tüm bilgileri doldurun ve kartları seçin!" : "Please fill in all information and select cards!";
        return;
    }

    // Kullanıcı verilerini ve kartları manuel yorumla
    const userData = { name, surname, city, relationshipStatus, occupation, birthDate };
    const cardsData = selectedCards;
    const reading = generateTarotReading(userData, cardsData);

    console.log("Reading içeriği:", reading);
    resultText.innerHTML = reading;

    resultSection.classList.remove('hidden');
    resultSection.classList.remove('parchment-roll'); 
    resultSection.style.opacity = 1;
    resultText.style.display = 'block'; 
    resultText.style.opacity = 1; 
    resultText.style.visibility = 'visible'; 
}

function getNameComment(name) {
    const length = name.length;
    const comments = {
        tr: length <= 3 ? "Kısa ve güçlü bir ismin, kaderinin parlak bir işaretidir, cesaretle dolusun." : length <= 6 ? "İsmin, dengeli bir enerjiyle gizemli bir yol açar, sakin bir güç sunar." : "Uzun ismin, sabırlı bir bilgelikle seni yönlendirir ve derin bir anlam taşır.",
        en: length <= 3 ? "Your short, strong name is a bright sign of your destiny, filled with courage." : length <= 6 ? "Your name opens a mysterious path with balanced energy, offering calm power." : "Your long name guides you with patient wisdom and carries deep meaning."
    };
    return comments[currentLang];
}

function copyResult() {
    try {
        const resultText = document.getElementById('resultText')?.innerText || '';
        navigator.clipboard.writeText(resultText).then(() => {
            alert(currentLang === 'tr' ? "Fal sonucu kopyalandı!" : "Result copied!");
        }).catch(err => {
            console.error("Kopyalama hatası:", err);
            alert(currentLang === 'tr' ? "Kopyalama başarısız oldu!" : "Copy failed!");
        });
    } catch (err) {
        console.error("copyResult hatası:", err);
    }
}

function saveResult() {
    try {
        const resultText = document.getElementById('resultText')?.innerText || '';
        const savedResults = JSON.parse(localStorage.getItem('tarotResults') || '[]');
        savedResults.push({ date: new Date().toLocaleString(), result: resultText });
        localStorage.setItem('tarotResults', JSON.stringify(savedResults));
        alert(currentLang === 'tr' ? "Fal sonucu kaydedildi!" : "Result saved!");
    } catch (err) {
        console.error("saveResult hatası:", err);
        alert(currentLang === 'tr' ? "Kaydetme başarısız oldu!" : "Save failed!");
    }
}

function showSavedResults() {
    try {
        const resultSection = document.getElementById('resultSection');
        const savedSection = document.getElementById('savedResultsSection');
        const savedList = document.getElementById('savedResultsList');
        if (!resultSection || !savedSection || !savedList) {
            console.error("resultSection, savedSection veya savedResultsList elementi bulunamadı!");
            return;
        }
        resultSection.classList.add('hidden');
        const savedResults = JSON.parse(localStorage.getItem('tarotResults') || '[]');
        savedList.innerHTML = savedResults.length ? savedResults.map((r, i) => `<p><strong>${r.date}:</strong><br>${r.result.replace(/<br>/g, '<br>')}</p>`).join('') : currentLang === 'tr' ? "Henüz kaydedilmiş fal yok." : "No saved readings yet.";
        savedSection.classList.remove('hidden');
    } catch (err) {
        console.error("showSavedResults hatası:", err);
        alert(currentLang === 'tr' ? "Kaydedilen fallar yüklenemedi!" : "Saved readings could not be loaded!");
    }
}

function hideSavedResults() {
    try {
        const savedSection = document.getElementById('savedResultsSection');
        const resultSection = document.getElementById('resultSection');
        if (!savedSection || !resultSection) {
            console.error("savedResultsSection veya resultSection elementi bulunamadı!");
            return;
        }
        savedSection.classList.add('hidden');
        resultSection.classList.remove('hidden');
    } catch (err) {
        console.error("hideSavedResults hatası:", err);
    }
}

function restart() {
    try {
        const resultSection = document.getElementById('resultSection');
        const savedSection = document.getElementById('savedResultsSection');
        const userForm = document.getElementById('userForm');
        const cardSelection = document.getElementById('cardSelection');
        if (!resultSection || !savedSection || !userForm || !cardSelection) {
            console.error("resultSection, savedSection, userForm veya cardSelection elementi bulunamadı!");
            return;
        }
        resultSection.classList.add('hidden');
        savedSection.classList.add('hidden');
        userForm.classList.remove('hidden');
        document.getElementById('infoForm').reset();
        selectedCards = [];
        flippedCount = 0;
        maxCards = 0;
        cardSelection.classList.add('hidden');
        const cards = document.querySelectorAll('.card, .selected-card');
        cards.forEach(card => card.classList.remove('flipped'));
        document.getElementById('cardDeck').innerHTML = '';
        document.getElementById('selectedCards').innerHTML = '';
        document.getElementById('selectedCardsParchment').classList.add('hidden'); 
    } catch (err) {
        console.error("restart hatası:", err);
    }
}

let isMusicPlaying = true; 

document.getElementById('muteButton')?.addEventListener('click', toggleMusic);

function toggleMusic() {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
        document.getElementById('muteButton').textContent = currentLang === 'tr' ? '🎵 Müziği Aç' : '🎵 Play Music';
    } else {
        backgroundMusic.play();
        document.getElementById('muteButton').textContent = currentLang === 'tr' ? '🎵 Müziği Kapat' : '🎵 Mute Music';
    }
    isMusicPlaying = !isMusicPlaying;
}