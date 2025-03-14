import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Pricing() {
    return (
        <div className="relative py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Choose Your Payment Plan</h2>
                </div>
                <div className="mt-8 md:mt-20">
                    <div className="bg-card relative rounded-3xl border shadow-2xl shadow-zinc-950/5">
                        <div className="grid items-center gap-12 divide-y p-12 md:grid-cols-2 md:divide-x md:divide-y-0">
                            <div className="pb-12 text-center md:pb-0 md:pr-12">
                                <h3 className="text-2xl font-semibold">Enterprise Suite</h3>
                                <p className="mt-2 text-lg">For businesses of any size</p>
                                <span className="mb-6 mt-12 inline-block text-6xl font-bold">
                                    <span className="text-4xl">$</span>499
                                </span>

                                <div className="flex justify-center">
                                    <Button asChild size="lg">
                                        <Link href="#">Get started</Link>
                                    </Button>
                                </div>

                                <p className="text-muted-foreground mt-12 text-sm">Includes: Unlimited Transactions, Priority Support, Custom Integration, Advanced Analytics, and all features</p>
                            </div>
                            <div className="relative">
                                <ul role="list" className="space-y-4">
                                    {['Unlimited Monthly Transactions', 'Priority 24/7 Support', 'Custom API Integration', 'Advanced Analytics Dashboard', 'Multi-Currency Support', 'Smart Contract Automation'].map((item, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <Check className="size-3" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-muted-foreground mt-6 text-sm">Trusted by leading companies worldwide. Our platform powers payments for:</p>
                                <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
                                    <Image className="h-5 w-auto dark:invert" src="https://html.tailus.io/blocks/customers/nvidia.svg" alt="Nvidia Logo" width={80} height={20} />
                                    <Image className="h-4 w-auto dark:invert" src="https://html.tailus.io/blocks/customers/column.svg" alt="Column Logo" width={64} height={16} />
                                    <Image className="h-4 w-auto dark:invert" src="https://html.tailus.io/blocks/customers/github.svg" alt="GitHub Logo" width={64} height={16} />
                                    <Image className="h-5 w-auto dark:invert" src="https://html.tailus.io/blocks/customers/nike.svg" alt="Nike Logo" width={80} height={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
