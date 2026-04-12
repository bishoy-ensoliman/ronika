<script lang="ts">
    // State management using Svelte 5 Runes
    let currentLang = $state('ar');

    const translations = {
        ar: {
            "nav-collections": "إصداراتنا",
            "nav-origin": "حكايتنا",
            "hero-title": "جوهر الشوكولاتة",
            "hero-subtitle": "فن الشوكولاتة من أندر المصادر",
            "btn-explore": "اكتشف المجموعة",
            "section-title": "إصدارات خاصة",
            "section-subtitle": "قطع مشغولة يدوياً بدقة متناهية",
            "prod-1-title": "مجموعة أوبسيديان",
            "prod-2-title": "ترافل منتصف الليل",
            "prod-3-title": "مجموعة رقائق الذهب",
            "btn-purchase": "اقتنيها الآن",
            "quote-title": "إبداع",
            "quote-text": '"نحن لا نصنع مجرد شوكولاتة.. نحن نصيغ المشاعر في قوالب فنية."',
            "switch": "English"
        },
        en: {
            "nav-collections": "Collections",
            "nav-origin": "Our Story",
            "hero-title": "The Essence of Chocolate",
            "hero-subtitle": "Artisanal Mastery from Rare Origins",
            "btn-explore": "Explore Collection",
            "section-title": "Limited Editions",
            "section-subtitle": "Hand-crafted pieces with absolute precision",
            "prod-1-title": "Obsidian Collection",
            "prod-2-title": "Midnight Truffles",
            "prod-3-title": "Gold Leaf Set",
            "btn-purchase": "Purchase Now",
            "quote-title": "The Chef 's Touch",
            "quote-text": '"We do not make simple chocolate.. We mold emotions into artistic forms."',
            "switch": "العربية"
        }
    };

    // Derived translation object
    let t = $derived(translations[currentLang]);

    const toggleLanguage = () => {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
    };
</script>

<div class="site-wrapper" dir={currentLang === 'ar' ? 'rtl' : 'ltr'} lang={currentLang}>
    <nav>
        <div class="logo">RONIKA</div>
        <div class="nav-right">
            <div class="nav-links">
                <a href="#collections">{t["nav-collections"]}</a>
                <a href="/origin">{t["nav-origin"]}</a>
            </div>
            <button class="lang-switch" onclick={toggleLanguage}>{t.switch}</button>
        </div>
    </nav>

    <section class="hero">
        {#key currentLang}
            <h1 class="hero-title">{t["hero-title"]}</h1>
            <p class="hero-subtitle">{t["hero-subtitle"]}</p>
            <a href="#collections" class="btn-gold hero-btn">{t["btn-explore"]}</a>
        {/key}
    </section>

    <section class="section" id="collections">
        <div class="section-header">
            <h2>{t["section-title"]}</h2>
            <p class="section-desc">{t["section-subtitle"]}</p>
        </div>

        <div class="grid">
            {#each [1, 2, 3] as i}
                <div class="product-card">
                    <div class="product-image img-{i}"></div>
                    <h3>{t[`prod-${i}-title`]}</h3>
                    <p class="price">EGP 4,200</p>
                    <button class="btn-gold">{t["btn-purchase"]}</button>
                </div>
            {/each}
        </div>
    </section>

    <footer>
        &copy; 2026 RONIKA CHOCOLATIER | PARIS - LONDON - CAIRO
    </footer>
</div>