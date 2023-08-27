import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import FAQCard from '@/components/faq/FAQCard'
import FAQSection from '@/components/faq/FAQSection'
import faqsApi from '@/services/faqs/faqs.service'

export default async function FAQPage() {
    const faqPages = await faqsApi.getFAQPages();
    return (
        <>
            <main>
                <FAQSection sections={faqPages.data}/>
            </main>
        </>
    )
}
