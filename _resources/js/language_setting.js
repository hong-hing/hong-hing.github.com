
const i18n = new VueI18n({ 
    fallbackLng: 'ko',
    locale: this.currentLocale,
    messages: messages
});

const _MIXIN = {
    data() {
        return {

        }
    },
    methods: {
        changeLocale() {
            _html = document.querySelector('html');
            lang = _html.getAttribute('lang');

            this.$i18n.locale = this.currentLocale;
            this.currentLocale === 'ko' ? this.currentLocale = 'en' : this.currentLocale = 'ko';

            this.setLocale(this.currentLocale);

            _html.setAttribute('lang', this.currentLocale);
        },
        setLocale(locale) {
            localStorage.setItem("locale", locale);
            this.$i18n.locale = locale;
        },
    },
    created() {
        this.$i18n.locale = this.currentLocale;
        _html.setAttribute('lang', this.currentLocale);
    },
    mounted() {
        
    }
}