export default function FAQs() {
    return (
        <section className="scroll-py-16 py-16 md:scroll-py-32 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-y-12 px-2 lg:[grid-template-columns:1fr_auto]">
                    <div className="text-center lg:text-left">
                        <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
                            Frequently <br className="hidden lg:block" /> Asked <br className="hidden lg:block" />
                            Questions
                        </h2>
                        <p>Everything you need to know about Nexus payments</p>
                    </div>

                    <div className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0">
                        <div className="pb-6">
                            <h3 className="font-medium">How secure are transactions on Nexus?</h3>
                            <p className="text-muted-foreground mt-4">All transactions on Nexus are secured by advanced blockchain technology and military-grade encryption. Our platform uses smart contracts to ensure transaction integrity and prevent fraud.</p>

                            <ol className="list-outside list-decimal space-y-2 pl-4">
                                <li className="text-muted-foreground mt-4">Each transaction is verified by multiple nodes in our blockchain network</li>
                                <li className="text-muted-foreground mt-4">We use end-to-end encryption for all data transmission</li>
                                <li className="text-muted-foreground mt-4">Regular security audits are performed by independent third parties</li>
                            </ol>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">What cryptocurrencies do you support?</h3>
                            <p className="text-muted-foreground mt-4">We support all major cryptocurrencies including Bitcoin, Ethereum, USDT, and many others. Our platform is constantly expanding to support new cryptocurrencies based on market demand.</p>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">How do transaction fees work?</h3>
                            <p className="text-muted-foreground my-4">Our transaction fees are among the lowest in the industry, starting from 0.1% per transaction. Fees vary based on:</p>
                            <ul className="list-outside list-disc space-y-2 pl-4">
                                <li className="text-muted-foreground">Transaction volume and frequency</li>
                                <li className="text-muted-foreground">Type of cryptocurrency used</li>
                                <li className="text-muted-foreground">Your subscription plan</li>
                            </ul>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">How long do transactions take?</h3>
                            <p className="text-muted-foreground mt-4">Most transactions are completed within seconds to minutes, depending on the cryptocurrency used. This is significantly faster than traditional banking transfers which can take days.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
