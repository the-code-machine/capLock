'use client'
import AboutPage from '@/components/AboutPage'
import ContactPage from '@/components/ContactPage'
import FaqPage from '@/components/FAQPage'
import PolicyPage from '@/components/Policy'
import ProductsPage from '@/components/ProductPage'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function page() {
    const path = usePathname()
    const page = path.split('/').pop()
    return (
        <div>
            {page === 'about' && <AboutPage />}
            {page === 'contact' && <ContactPage />}
            {page === 'faq' && <FaqPage />}
            {page === 'policy' && <PolicyPage />}
            {page === 'products' && <ProductsPage />}
        </div>
    )
}
