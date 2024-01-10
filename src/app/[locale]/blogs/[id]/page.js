import BlogsPage from "@/components/page/blogs";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from '../../../i18n';


const i18nNamespaces = ['home'];
export default async function Blogs({ params: { locale,id } }) {
    
    const { t, resources } = await initTranslations(locale, i18nNamespaces);
    return (
        <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}>
            <BlogsPage lang={locale} id={id} />
      </TranslationsProvider>


    )
}
