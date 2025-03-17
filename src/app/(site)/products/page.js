'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import ProductsPage from '@/components/ProductPage'

export default function Page() {
    const path = usePathname()
    const page = path.split('/').pop()

    // Map paths to page titles
    const pageTitles = {
        about: "About Us - CapLock",
        contact: "Contact Us - CapLock",
        faq: "FAQ - CapLock",
        policy: "Privacy Policy - CapLock",
        products: "Our Products - CapLock"
    }

    useEffect(() => {
        if (pageTitles[page]) {
            document.title = pageTitles[page]
        } else {
            document.title = "CapLock - 3D Printing & IoT Solutions"
        }
    }, [page])

    return (
        <div>


            <ProductsPage />
        </div>
    )
}
