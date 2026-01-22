/* ===========================================
   ADGEN AI - TRANSLATIONS (i18n)
   =========================================== */

const translations = {
    'ar': {
        // Meta & Site Info
        'site_title': 'AdGen AI - خبير إبداعي في جيبك',
        'site_desc': 'منصة ذكاء اصطناعي متقدمة لتوليد المحتوى الإعلاني المرئي بجودة سينمائية',

        // Navbar
        'nav_home': 'الرئيسية',
        'nav_features': 'المميزات',
        'nav_pricing': 'التسعير',
        'nav_how_it_works': 'كيف يعمل',
        'nav_tech': 'التقنيات',
        'nav_login': 'دخول',
        'nav_signup': 'تواصل معنا',
        'nav_faq': 'الأسئلة',

        // Hero
        'hero_badge': 'مدعوم بـ Google Gemini 3 & Kling AI',
        'hero_title': 'خبير إبداعي في جيبك',
        'hero_subtitle': 'حوّل أفكارك إلى محتوى مرئي <strong>مذهل</strong> بمساعدة ذكاء اصطناعي <br class="hide-mobile">لا يكتفي بالتنفيذ - بل <strong>يفكر، يحلل ويبدع</strong>',
        'hero_cta_primary': 'تواصل معنا الآن',
        'hero_cta_secondary': 'شاهد العرض التوضيحي',
        'hero_stat_creators': 'مستخدم نشط',
        'hero_stat_generated': 'محتوى مُولّد',
        'hero_stat_uptime': 'معدل التوفر',
        'hero_scroll_down': 'اسحب للأسفل',
        'hero_chat_user': 'أريد فيديو سينمائي لسيارة رياضية',
        'hero_chat_ai': 'رائع! لنخلق شيئاً مذهلاً.<br>- ما نوع السيارة؟ رياضية حديثة أم كلاسيكية؟<br>- الإضاءة: غروب ذهبي أم ليل نيون؟',

        // AI Showcase
        'ai_badge': '🧠 المساعد الذكي',
        'ai_title': 'شاهد Creative Director في العمل',
        'ai_subtitle': 'ليس مجرد AI - بل خبير إبداعي يفكر، يحلل، ويصنع الكمال',
        'ai_col1_title': 'ما تكتبه',
        'ai_col2_title': 'عملية التفكير',
        'ai_col3_title': 'التحول السحري',
        'ai_user_initial': 'أريد فيديو لسيارة رياضية',
        'ai_response_initial': 'رائع! لنخلق شيئاً سينمائياً 🎬',
        'ai_question_prompt': 'لجعله مثالياً، أخبرني:',
        'ai_q1': '✓ نوع السيارة؟ (Ferrari, Lamborghini...)',
        'ai_q2': '✓ الإضاءة؟ (غروب، ليل نيون، صباح...)',
        'ai_q3': '✓ الحركة؟ (سرعة، drift، ثابتة)',
        'ai_user_refined': 'Ferrari حمراء، غروب ذهبي، drift سريع',
        'ai_vision_complete': '✅ رؤية كاملة',
        'ai_success_msg': 'ممتاز! الآن لدي كل ما أحتاجه لصنع تحفة سينمائية 🎨',
        'ai_confidence_label': 'الثقة',
        'ai_confidence_val': '🟡 متوسط',
        'ai_prompt_original_label': '❌ البرومبت الأصلي',
        'ai_prompt_enhanced_label': '✅ بعد التحسين بالذكاء',
        'ai_char_count_low': '23 حرف',
        'ai_char_count_high': '+350 حرف',
        'ai_think_intent': 'فيديو سينمائي لسيارة',
        'ai_think_missing': '["نوع السيارة", "أسلوب الإضاءة", "نوع الحركة"]',
        'ai_think_reasoning': 'نحتاج تفاصيل للجودة السينمائية',

        // AI Mini Features
        'ai_feat_1_title': 'دقة سينمائية',
        'ai_feat_1_desc': 'معرفة عميقة بالإضاءة والكاميرات',
        'ai_feat_2_title': 'ذكاء استباقي',
        'ai_feat_2_desc': 'يطرح الأسئلة الصحيحة',
        'ai_feat_3_title': 'تحسين تدريجي',
        'ai_feat_3_desc': 'من 45% إلى 95% ثقة',
        'ai_feat_4_title': 'عربي/إنجليزي',
        'ai_feat_4_desc': 'يفهم كلا اللغتين بطلاقة',
        'ai_cta_smart': 'تواصل معنا للبدء',
        'ai_cta_note': 'مجاناً - بدون بطاقة ائتمان',

        // Challenges & Solutions
        'prob_badge': '❌ التحديات',
        'prob_title': 'المشكلة التي نحلها',
        'prob_1_title': 'وقت طويل ومُرهق',
        'prob_1_desc': 'توليد محتوى إعلاني احترافي يستغرق ساعات من العمل',
        'prob_2_title': 'برومبتات معقدة',
        'prob_2_desc': 'الحاجة لخبرة تقنية في كتابة برومبتات فعّالة',
        'prob_3_title': 'أدوات متعددة ومكلفة',
        'prob_3_desc': 'اشتراكات متعددة في منصات مختلفة بتكاليف عالية',
        'prob_4_title': 'نتائج غير متسقة',
        'prob_4_desc': 'جودة متذبذبة تفتقر للاحترافية السينمائية',

        'sol_badge': '✨ الحل',
        'sol_title': 'مع AdGen AI',
        'sol_1_title': 'مساعد ذكي يفهمك',
        'sol_1_desc': 'يوجهك خطوة بخطوة ويطرح أسئلة ذكية لتحسين النتيجة',
        'sol_2_title': 'لا حاجة لخبرة',
        'sol_2_desc': 'اكتب بلغتك الطبيعية - عربي أو إنجليزي',
        'sol_3_title': 'كل شيء في مكان واحد',
        'sol_3_desc': 'منصة موحدة مع نظام credits عادل وشفاف',
        'sol_4_title': 'جودة سينمائية مضمونة',
        'sol_4_desc': 'نتائج احترافية متسقة باستخدام أفضل المحركات',

        // Use Cases
        'use_case_badge': '🎯 لمن هذا؟',
        'use_case_title': 'AdGen لكل من يريد محتوى مذهل',
        'use_case_subtitle': 'مهما كان مجالك، AdGen يساعدك',
        'use_case_1_title': 'للمسوقين',
        'use_case_1_desc': 'إعلانات سوشيال ميديا احترافية في دقائق',
        'use_case_2_title': 'لصناع المحتوى',
        'use_case_2_desc': 'فيديوهات سينمائية بدون معدات',
        'use_case_3_title': 'للشركات الناشئة',
        'use_case_3_desc': 'محتوى تسويقي بدون فريق كامل',
        'use_case_4_title': 'للمصممين',
        'use_case_4_desc': 'حوّل تصاميمك إلى موشن',
        'use_case_b1': '✓ حملات سريعة',
        'use_case_b2': '✓ A/B Testing',
        'use_case_b3': '✓ تكلفة أقل 10x',
        'use_case_b4': '✓ قوالب جاهزة',
        'use_case_b5': '✓ محتوى يومي',
        'use_case_b6': '✓ جودة احترافية',
        'use_case_b7': '✓ توفير 80% ميزانية',
        'use_case_b8': '✓ إطلاق سريع',
        'use_case_b9': '✓ تجربة بلا حدود',
        'use_case_b10': '✓ تحريك البورتفوليو',
        'use_case_b11': '✓ توسيع الخدمات',
        'use_case_b12': '✓ تسليم أسرع',
        'use_case_pop': 'شائع',
        'use_case_create': 'مبدعين',
        'use_case_econ': 'اقتصادي',
        'use_case_prof': 'احترافي',

        // Features
        'feat_badge': '⚡ القوة الحقيقية',
        'feat_title': 'مميزات استثنائية تجعلنا الأفضل',
        'feat_subtitle': 'تقنيات متقدمة وذكاء حقيقي في خدمتك',
        'feat_1_title': 'المساعد الذكي',
        'feat_1_desc': 'Gemini 3 powered - يفكر، يحلل ويقترح بثقة 0-100',
        'feat_2_title': 'محركات متعددة',
        'feat_2_desc': 'Kling AI + Gemini Flash - كل شيء في منصة واحدة',
        'feat_3_title': 'رؤية ذكية',
        'feat_3_desc': 'تحليل جودة تلقائي واقتراحات إصلاح فورية',
        'feat_4_title': 'نظام مالي محكم',
        'feat_4_desc': 'معاملات ذرية واسترجاع تلقائي عند الأخطاء',
        'feat_5_title': 'عربي كامل',
        'feat_5_desc': 'دعم التشكيل للـ Voiceover - هوية عربية أصيلة',
        'feat_6_title': 'Real-Time',
        'feat_6_desc': 'WebSocket sync وFCM notifications فورية',

        // Timeline
        'how_badge': '🔧 بساطة مذهلة',
        'how_title': 'كيف يعمل AdGen AI؟',
        'how_subtitle': 'من الفكرة للنتيجة في 6 خطوات',
        'step_1_title': 'ابدأ المحادثة',
        'step_1_desc': 'اكتب فكرتك بلغتك الطبيعية',
        'step_2_title': 'المساعد يفهم',
        'step_2_desc': 'يطرح أسئلة ذكية لتحسين الرؤية',
        'step_3_title': 'اختيار الأداة',
        'step_3_desc': 'صور، فيديو، أو تمديد',
        'step_4_title': 'تخصيص دقيق',
        'step_4_desc': 'Console متقدم أو اتركها للذكاء',
        'step_5_title': 'توليد فوري',
        'step_5_desc': 'تتبع حي مع إشعارات',
        'step_6_title': 'نتيجة احترافية',
        'step_6_desc': 'جودة سينمائية جاهزة',

        // Tech Stack
        'tech_badge': '💻 القوة التقنية',
        'tech_title': 'مبني بأحدث التقنيات',
        'tech_subtitle': 'معمارية احترافية إنتاجية',
        'tech_back': '⚙️ Backend',
        'tech_front': '📱 Frontend',
        'tech_infra': '🏗️ Infrastructure',

        // Pricing
        'price_title': 'باقات تناسب الجميع',
        'price_subtitle': 'نظام credits عادل وشفاف',
        'pricing_badge': '💎 التسعير',
        'plan_starter': 'Starter Pack',
        'plan_pro': 'Pro Pack',
        'plan_agency': 'Agency Pack',
        'plan_select': 'تواصل للاشتراك',
        'price_trial': 'مثالي للتجربة',
        'price_pro': 'للمحترفين',
        'price_agency': 'للفرق',
        'price_pop': 'الأكثر شيوعاً',
        'price_note_1': '💡 نظام الإحالة: 20% عمولة!',
        'price_note_2': '🔄 استرجاع تلقائي عند فشل المهمة',

        // FAQ
        'faq_badge': '❓ الأسئلة الشائعة',
        'faq_title': 'هل لديك سؤال؟',
        'faq_q1': 'هل يدعم اللغة العربية بالكامل؟',
        'faq_a1': 'نعم! مصمم للعرب من الأساس مع دعم التشكيل الكامل.',
        'faq_q2': 'كيف يتم احتساب التكلفة؟',
        'faq_a2': 'نظام تسعير ديناميكي شفاف - التكلفة تظهر قبل التنفيذ.',
        'faq_q3': 'ماذا يحدث إذا فشلت المهمة؟',
        'faq_a3': 'استرجاع تلقائي فوري للرصيد - نستخدم معاملات ذرية لضمان عدم فقدان أي رصيد.',
        'faq_q4': 'ما هي المحركات (Engines) المدعومة؟',
        'faq_a4': 'حالياً ندعم: Kling AI لتوليد الفيديوهات، وGoogle Gemini Flash للصور الذكية. نعمل على إضافة Runway وPika Labs قريباً!',
        'faq_q5': 'هل البيانات والمحتوى آمن؟',
        'faq_a5': 'نعم! جميع الاتصالات مشفرة، المدفوعات عبر RevenueCat الآمن، وملفاتك على Cloudflare R2 الآمن. ملتزمون بـ GDPR.',
        'faq_q6': 'هل يعمل على iOS وAndroid؟',
        'faq_a6': 'نعم! مبني بـ Flutter - يعمل على iOS وAndroid بنفس الجودة. نُخطط لـ Web قريباً.',

        // Final CTA
        'reg_or': 'أو تواصل مباشرة عبر',
        'reg_chat_now': 'دردشة فورية',
        'reg_view_profile': 'الملف الشخصي',
        'cta_final_title': 'جاهز لتحويل أفكارك إلى واقع مذهل؟',
        'cta_final_subtitle': 'انضم لآلاف المبدعين الذين يستخدمون AdGen',
        'cta_final_btn': 'تواصل معنا الآن',
        'cta_final_chat': 'تواصل مباشر',
        'footer_user': 'مستخدم',
        'footer_content_count': 'محتوى',
        'footer_sat': 'رضا',

        // Footer
        'footer_desc': 'ذكاء اصطناعي لتوليد محتوى سينمائي',
        'footer_product': 'المنتج',
        'footer_support': 'الدعم',
        'footer_legal': 'القانوني',
        'footer_help': 'المساعدة',
        'footer_contact': 'تواصل معنا',
        'footer_privacy': 'الخصوصية',
        'footer_terms': 'الشروط',
        'footer_copyright': '© 2026 AdGen AI. جميع الحقوق محفوظة.',
        'footer_made': 'صُنع بـ ❤️ فراس عزالدين سويد',
        'back_to_top': 'للأعلى',

        // Common
        'lang_name': 'English',

        // Privacy Page
        'priv_title': 'سياسة الخصوصية',
        'priv_last_update': 'آخر تحديث: يناير 2026',
        'priv_intro_title': '1. مقدمة',
        'priv_intro_desc': 'نحن في AdGen AI نلتزم بحماية خصوصيتك وبياناتك الشخصية. توضح هذه السياسة كيفية جمع واستخدام وحماية معلوماتك عند استخدام منصتنا.',
        'priv_data_title': '2. البيانات التي نجمعها',
        'priv_data_desc': 'نجمع المعلومات التي تقدمها مباشرة عند إنشاء حساب، والبيانات التقنية المتعلقة باستخدامك للمنصة، والنصوص/الصور التي ترفعها لأغراض معالجة الذكاء الاصطناعي.',
        'priv_ai_title': '3. معالجة الذكاء الاصطناعي',
        'priv_ai_desc': 'نستخدم محركات مثل Kling AI وGoogle Gemini. تتم معالجة بياناتك لغرض توليد المحتوى فقط، ولا يتم بيع بياناتك لأطراف خارجية لأغراض إعلانية.',
        'priv_security_title': '4. أمن البيانات',
        'priv_security_desc': 'يتم تشفير جميع البيانات وتخزينها في بيئات آمنة باستخدام Cloudflare R2 وخدمات تشفير متطورة لضمان عدم الوصول غير المصرح به.',
        'priv_rights_title': '5. حقوقك (GDPR)',
        'priv_rights_desc': 'لديك الحق في الوصول إلى بياناتك، تصحيحها، أو طلب مسحها تماماً من خوادمنا في أي وقت من خلال إعدادات الحساب.',

        // Terms Page
        'terms_title': 'شروط الخدمة',
        'terms_last_update': 'آخر تحديث: يناير 2026',
        'terms_usage_title': '1. شروط الاستخدام',
        'terms_usage_desc': 'باستخدامك لـ AdGen AI، فإنك توافق على الالتزام بالقواعد السلوكية وعدم استخدام المنصة لتوليد محتوى غير قانوني أو ينتهك حقوق الآخرين.',
        'terms_credits_title': '2. نظام الائتمان (Credits)',
        'terms_credits_desc': 'تعتمد المنصة على نظام Credits. يتم استهلاك الرصيد عند نجاح عملية التوليد فقط. في حال فشل النظام، يتم استرجاع الرصيد تلقائياً وبشكل ذري.',
        'terms_refund_title': '3. سياسة الاسترداد',
        'terms_refund_desc': 'نظراً للطبيعة الرقمية والفورية لمعالجة الـ AI، لا يتم استرداد المبالغ المدفوعة للباقات إلا في حالات استثنائية يقررها فريق الدعم التقني.',
        'terms_ip_title': '4. الملكية الفكرية',
        'terms_ip_desc': 'أنت تملك حقوق المحتوى الذي تولده باستخدام المنصة، ولكن يمنحنا استخدامك حقاً محدوداً لاستضافة هذا المحتوى وعرضه لك ضمن حسابك.',
        'terms_limit_title': '5. تحديد المسؤولية',
        'terms_limit_desc': 'AdGen AI أداة إبداعية. نحن لا نضمن دقة النتائج بنسبة 100% ولا نتحمل مسؤولية القرارات التجارية المبنية على المحتوى المولد.',

        // Premium UX Components
        'cookie_text': 'نستخدم ملفات تعريف الارتباط لضمان حصولك على أفضل تجربة على منصتنا الذكية.',
        'cookie_accept': 'موافق',
        'demo_desc': 'شاهد كيف يحول AdGen AI الأفكار البسيطة إلى تحف سينمائية مذهلة باستخدام أقوى محركات الذكاء الاصطناعي في العالم.',

        // Registration Modal
        'reg_title': 'تواصل مباشر مع فراس سويد',
        'reg_subtitle': 'أرسل تفاصيلك الآن للانضمام المبكر للمنصة أو للاستفسار البرمجي',
        'reg_name_label': 'اسمك الكريم',
        'reg_name_placeholder': 'أدخل اسمك الكريم هنا...',
        'reg_email_label': 'بريدك الإلكتروني',
        'reg_email_placeholder': 'example@domain.com',
        'reg_message_label': 'ماذا تريد أن تخبرنا؟',
        'reg_message_placeholder': 'اكتب استفسارك أو رسالتك هنا...',
        'reg_submit': 'إرسال عبر البريد الآن',
        'reg_success': 'جاري توجيهك لتطبيق البريد...',
        'reg_error': 'عذراً، حدث خطأ ما. حاول مرة أخرى.'
    },
    'en': {
        // Meta & Site Info
        'site_title': 'AdGen AI - Creative Expert in Your Pocket',
        'site_desc': 'Advanced AI platform for generating cinematic visual advertising content',

        // Navbar
        'nav_home': 'Home',
        'nav_features': 'Features',
        'nav_pricing': 'Pricing',
        'nav_how_it_works': 'How it Works',
        'nav_tech': 'Technologies',
        'nav_login': 'Login',
        'nav_signup': 'Contact Us',
        'nav_faq': 'FAQ',

        // Hero
        'hero_badge': 'Powered by Google Gemini 3 & Kling AI',
        'hero_title': 'A Creative Expert in Your Pocket',
        'hero_subtitle': 'Transform your ideas into <strong>stunning</strong> visual content with incredible AI. <br class="hide-mobile">Not just executing - but <strong>thinking, analyzing and creating</strong>.',
        'hero_cta_primary': 'Start Creating for Free',
        'hero_cta_secondary': 'Watch Demo',
        'hero_stat_creators': 'Active Users',
        'hero_stat_generated': 'Generated Assets',
        'hero_stat_uptime': 'Uptime Rate',
        'hero_scroll_down': 'Scroll Down',
        'hero_chat_user': 'I want a cinematic video for a sports car',
        'hero_chat_ai': 'Great! Let\'s create something amazing.<br>- What car type? Modern sports or classic?<br>- Lighting: Golden hour or Neon night?',

        // AI Showcase
        'ai_badge': '🧠 AI Assistant',
        'ai_title': 'See the Creative Director in Action',
        'ai_subtitle': 'Not just AI - a creative expert that thinks, analyzes, and crafts perfection',
        'ai_col1_title': 'What You Write',
        'ai_col2_title': 'Thinking Process',
        'ai_col3_title': 'Magic Transformation',
        'ai_user_initial': 'I want a video of a sports car',
        'ai_response_initial': 'Great! Let\'s create something cinematic 🎬',
        'ai_question_prompt': 'To make it perfect, tell me:',
        'ai_q1': '✓ Car type? (Ferrari, Lamborghini...)',
        'ai_q2': '✓ Lighting? (Sunset, Neon night, Foggy morning...)',
        'ai_q3': '✓ Movement? (High speed, Drift, Static)',
        'ai_user_refined': 'Red Ferrari, golden hour sunset, fast drift',
        'ai_vision_complete': '✅ Vision Complete',
        'ai_success_msg': 'Excellent! Now I have everything I need to create a cinematic masterpiece 🎨',
        'ai_confidence_label': 'Confidence',
        'ai_confidence_val': '🟡 Medium',
        'ai_prompt_original_label': '❌ Original Prompt',
        'ai_prompt_enhanced_label': '✅ AI Enhanced Prompt',
        'ai_char_count_low': '23 chars',
        'ai_char_count_high': '+350 chars',
        'ai_think_intent': 'Cinematic car video',
        'ai_think_missing': '["Car type", "Lighting style", "Movement type"]',
        'ai_think_reasoning': 'Need details for cinematic quality',

        // AI Mini Features
        'ai_feat_1_title': 'Cinematic Precision',
        'ai_feat_1_desc': 'Deep knowledge of lighting & cameras',
        'ai_feat_2_title': 'Proactive Intel',
        'ai_feat_2_desc': 'Asks the right questions',
        'ai_feat_3_title': 'Iterative Improvement',
        'ai_feat_3_desc': 'From 45% to 95% confidence',
        'ai_feat_4_title': 'Arabic/English',
        'ai_feat_4_desc': 'Fluent in both languages',
        'ai_cta_smart': 'Try AI Assistant Now',
        'ai_cta_note': 'Free - No credit card required',

        // Challenges & Solutions
        'prob_badge': '❌ Challenges',
        'prob_title': 'The Problem We Solve',
        'prob_1_title': 'Time Consuming',
        'prob_1_desc': 'Creating professional ad content takes hours of work',
        'prob_2_title': 'Complex Prompts',
        'prob_2_desc': 'Need for technical expertise to write effective prompts',
        'prob_3_title': 'Multiple Costly Tools',
        'prob_3_desc': 'Multiple subscriptions in different platforms with high costs',
        'prob_4_title': 'Inconsistent Results',
        'prob_4_desc': 'Fluctuating quality that lacks cinematic professionalism',

        'sol_badge': '✨ Solution',
        'sol_title': 'With AdGen AI',
        'sol_1_title': 'Smart Assistant',
        'sol_1_desc': 'Guides you step by step and asks smart questions to improve results',
        'sol_2_title': 'No Experience Needed',
        'sol_2_desc': 'Write in your natural language - Arabic or English',
        'sol_3_title': 'All-in-One Platform',
        'sol_3_desc': 'Unified platform with a fair and transparent credit system',
        'sol_4_title': 'Cinematic Quality',
        'sol_4_desc': 'Consistent professional results using the best engines',

        // Use Cases
        'use_case_badge': '🎯 Who is it for?',
        'use_case_title': 'AdGen for everyone who wants stunning content',
        'use_case_subtitle': 'Whatever your field, AdGen helps you',
        'use_case_1_title': 'For Marketers',
        'use_case_1_desc': 'Professional social media ads in minutes',
        'use_case_2_title': 'For Creators',
        'use_case_2_desc': 'Cinematic videos without expensive gear',
        'use_case_3_title': 'For Startups',
        'use_case_3_desc': 'Marketing content without a full team',
        'use_case_4_title': 'For Designers',
        'use_case_4_desc': 'Transform your designs into motion',
        'use_case_b1': '✓ Rapid campaigns',
        'use_case_b2': '✓ A/B Testing',
        'use_case_b3': '✓ 10x lower cost',
        'use_case_b4': '✓ Ready templates',
        'use_case_b5': '✓ Daily content',
        'use_case_b6': '✓ Pro quality',
        'use_case_b7': '✓ Save 80% budget',
        'use_case_b8': '✓ Instant launch',
        'use_case_b9': '✓ Endless testing',
        'use_case_b10': '✓ Portfolio motion',
        'use_case_b11': '✓ Expand services',
        'use_case_b12': '✓ Faster delivery',
        'use_case_pop': 'Popular',
        'use_case_create': 'Creators',
        'use_case_econ': 'Econ',
        'use_case_prof': 'Prof',

        // Features
        'feat_badge': '⚡ Real Power',
        'feat_title': 'Exceptional features that make us the best',
        'feat_subtitle': 'Advanced technology and real intelligence at your service',
        'feat_1_title': 'Smart Assistant',
        'feat_1_desc': 'Gemini 3 powered - thinks, analyzes and suggests with confidence',
        'feat_2_title': 'Multi-Engine',
        'feat_2_desc': 'Kling AI + Gemini Flash - everything in one platform',
        'feat_3_title': 'Smart Vision',
        'feat_3_desc': 'Auto quality analysis and instant fix suggestions',
        'feat_4_title': 'Robust Finance',
        'feat_4_desc': 'Atomic transactions and auto-refund on errors',
        'feat_5_title': 'Full Arabic',
        'feat_5_desc': 'Voiceover vowel support - authentic Arabic identity',
        'feat_6_title': 'Real-Time',
        'feat_6_desc': 'WebSocket sync and instant FCM notifications',

        // Timeline
        'how_badge': '🔧 Amazing Simplicity',
        'how_title': 'How AdGen AI Works?',
        'how_subtitle': 'From idea to result in 6 steps',
        'step_1_title': 'Start Chatting',
        'step_1_desc': 'Write your idea in your natural language',
        'step_2_title': 'AI Understands',
        'step_2_desc': 'Asks smart questions to refine vision',
        'step_3_title': 'Choose Tool',
        'step_3_desc': 'Images, Video, or Extensions',
        'step_4_title': 'Precise Customization',
        'step_4_desc': 'Advanced Console or leave it to AI',
        'step_5_title': 'Instant Generation',
        'step_5_desc': 'Live tracking with notifications',
        'step_6_title': 'Professional Result',
        'step_6_desc': 'Ready-to-use cinematic quality',

        // Tech Stack
        'tech_badge': '💻 Tech Power',
        'tech_title': 'Built with Modern Tech',
        'tech_subtitle': 'Professional production architecture',
        'tech_back': '⚙️ Backend',
        'tech_front': '📱 Frontend',
        'tech_infra': '🏗️ Infrastructure',

        // Pricing
        'price_title': 'Plans for Everyone',
        'price_subtitle': 'Fair and transparent credit system',
        'pricing_badge': '💎 Pricing',
        'plan_starter': 'Starter Pack',
        'plan_pro': 'Pro Pack',
        'plan_agency': 'Agency Pack',
        'plan_select': 'Contact Us',
        'price_trial': 'Perfect for trying',
        'price_pro': 'For professionals',
        'price_agency': 'For teams',
        'price_pop': 'Most Popular',
        'price_note_1': '💡 Referral System: 20% commission!',
        'price_note_2': '🔄 Auto-refund on task failure',

        // FAQ
        'faq_badge': '❓ FAQ',
        'faq_title': 'Have a Question?',
        'faq_q1': 'Is Arabic fully supported?',
        'faq_a1': 'Yes! Designed for Arabic from the ground up with full vowel support.',
        'faq_q2': 'How is cost calculated?',
        'faq_a2': 'Dynamic transparent pricing - cost shown before execution.',
        'faq_q3': 'What happens if a task fails?',
        'faq_a3': 'Instant automatic credit refund - we use atomic transactions.',
        'faq_q4': 'Which Engines are supported?',
        'faq_a4': 'Currently: Kling AI for videos, and Google Gemini Flash for smart images. Adding Runway soon!',
        'faq_q5': 'Is my data and content secure?',
        'faq_a5': 'Yes! All connections encrypted, payments via secure RevenueCat, files on Cloudflare R2 Cloud. GDPR compliant.',
        'faq_q6': 'Works on iOS & Android?',
        'faq_a6': 'Yes! Built with Flutter - works on both with the same quality. Web planned soon.',

        // Final CTA
        'cta_final_title': 'Ready to turn your ideas into reality?',
        'cta_final_subtitle': 'Join thousands of creators using AdGen',
        'cta_final_btn': 'Start for Free Now',
        'cta_final_chat': 'Chat with Us',
        'footer_user': 'Users',
        'footer_content_count': 'Assets',
        'footer_sat': 'Satisfaction',

        // Footer
        'footer_desc': 'AI for generating cinematic content',
        'footer_product': 'Product',
        'footer_support': 'Support',
        'footer_legal': 'Legal',
        'footer_help': 'Help Center',
        'footer_contact': 'Contact Us',
        'footer_privacy': 'Privacy Policy',
        'footer_terms': 'Terms of Service',
        'footer_copyright': '© 2026 AdGen AI. All rights reserved.',
        'footer_made': 'Made with ❤️ by Feras Swed',
        'back_to_top': 'Up',

        // Common
        'lang_name': 'العربية',

        // Privacy Page
        'priv_title': 'Privacy Policy',
        'priv_last_update': 'Last Updated: January 2026',
        'priv_intro_title': '1. Introduction',
        'priv_intro_desc': 'At AdGen AI, we are committed to protecting your privacy and personal data. This policy outlines how we collect, use, and safeguard your information.',
        'priv_data_title': '2. Data We Collect',
        'priv_data_desc': 'We collect information you provide directly when creating an account, technical data related to your usage, and prompts/images you upload for AI processing.',
        'priv_ai_title': '3. AI Processing',
        'priv_ai_desc': 'We utilize engines like Kling AI and Google Gemini. Your data is processed solely for content generation and is never sold to third parties for advertising.',
        'priv_security_title': '4. Data Security',
        'priv_security_desc': 'All data is encrypted and stored in secure environments using Cloudflare R2 and advanced encryption services to prevent unauthorized access.',
        'priv_rights_title': '5. Your Rights (GDPR)',
        'priv_rights_desc': 'You have the right to access, correct, or request the deletion of your data from our servers at any time via your account settings.',

        // Terms Page
        'terms_title': 'Terms of Service',
        'terms_last_update': 'Last Updated: January 2026',
        'terms_usage_title': '1. Usage Terms',
        'terms_usage_desc': 'By using AdGen AI, you agree to comply with our code of conduct and not use the platform to generate illegal content or violate others\' rights.',
        'terms_credits_title': '2. Credit System',
        'terms_credits_desc': 'The platform operates on a credit system. Credits are consumed only on successful generation. In case of failure, credits are automatically refunded.',
        'terms_refund_title': '3. Refund Policy',
        'terms_refund_desc': 'Due to the digital and instant nature of AI processing, payments for plans are non-refundable except in exceptional cases decided by support.',
        'terms_ip_title': '4. Intellectual Property',
        'terms_ip_desc': 'You own the rights to the content you generate. Using our service grants us a limited right to host and display this content within your account.',
        'terms_limit_title': '5. Limitation of Liability',
        'terms_limit_desc': 'AdGen AI is a creative tool. We do not guarantee 100% accuracy of results and are not liable for business decisions based on generated content.',

        // Premium UX Components
        'cookie_text': 'We use cookies to ensure you get the best experience on our smart platform.',
        'cookie_accept': 'Accept',
        'demo_desc': 'Discover how AdGen AI transforms simple ideas into stunning cinematic masterpieces using the world\'s most powerful AI engines.',

        // Registration Modal
        'reg_title': 'Direct Contact with Feras Swed',
        'reg_subtitle': 'Send your details for early access or development inquiries',
        'reg_name_label': 'Full Name',
        'reg_name_placeholder': 'Enter your full name here...',
        'reg_email_label': 'Email Address',
        'reg_email_placeholder': 'example@domain.com',
        'reg_message_label': 'How can we help you?',
        'reg_message_placeholder': 'Write your message or inquiry here...',
        'reg_submit': 'Send via Email Now',
        'reg_success': 'Redirecting to your email client...',
        'reg_error': 'Sorry, something went wrong. Please try again.'
    }
};

class I18nManager {
    constructor() {
        this.currentLang = localStorage.getItem('adgen_lang') || 'ar';
        this.init();
    }

    init() {
        this.applyLanguage();
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('#langToggle');
            if (btn) {
                this.toggleLanguage();
            }
        });
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'ar' ? 'en' : 'ar';
        localStorage.setItem('adgen_lang', this.currentLang);
        this.applyLanguage();
        // Force AOS refresh
        if (window.AOS) {
            AOS.refresh();
        }
    }

    applyLanguage() {
        const html = document.documentElement;
        const langData = translations[this.currentLang];

        // Update HTML attributes
        html.setAttribute('lang', this.currentLang);
        html.setAttribute('dir', this.currentLang === 'ar' ? 'rtl' : 'ltr');

        // Update Text Elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (langData[key]) {
                el.innerHTML = langData[key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (langData[key]) {
                el.placeholder = langData[key];
            }
        });

        // Specific handling for complex elements
        this.updateSpecialElements(langData);

        // Update Title & Meta
        document.title = langData['site_title'];
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', langData['site_desc']);
    }

    updateSpecialElements(langData) {
        const langBtnSpan = document.querySelector('#langToggle span');
        if (langBtnSpan) {
            langBtnSpan.innerText = langData['lang_name'];
        }

        // Notify other scripts
        const event = new CustomEvent('languageChanged', { detail: this.currentLang });
        document.dispatchEvent(event);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    window.i18n = new I18nManager();
});
