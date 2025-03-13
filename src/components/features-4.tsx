import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from 'lucide-react'

export default function Features() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">The Future of Payments</h2>
                    <p>Nexus revolutionizes global transfers with blockchain technology, offering the most secure and efficient solution for your international payments.</p>
                </div>

                <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">Instant Transfers</h3>
                        </div>
                        <p className="text-sm">Instant payments anywhere in the world, 24/7.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">Multi-Crypto</h3>
                        </div>
                        <p className="text-sm">Support for Bitcoin, Ethereum, USDT and more.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Fingerprint className="size-4" />
                            <h3 className="text-sm font-medium">Maximum Security</h3>
                        </div>
                        <p className="text-sm">Blockchain technology and military-grade encryption.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Pencil className="size-4" />
                            <h3 className="text-sm font-medium">Minimal Fees</h3>
                        </div>
                        <p className="text-sm">The lowest rates in the market, starting from 0.1%.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Settings2 className="size-4" />
                            <h3 className="text-sm font-medium">Integrable API</h3>
                        </div>
                        <p className="text-sm">Easy integration with your existing platform.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />
                            <h3 className="text-sm font-medium">Smart Contracts</h3>
                        </div>
                        <p className="text-sm">Payment automation and smart contracts.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
