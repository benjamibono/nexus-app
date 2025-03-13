export default function StatsSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-medium lg:text-5xl">Nexus by the Numbers</h2>
                    <p>The leading blockchain payment platform, transforming global transfers with cutting-edge technology.</p>
                </div>

                <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">$2.5B+</div>
                        <p>Transaction Volume</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">150+</div>
                        <p>Countries Covered</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">1M+</div>
                        <p>Active Users</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
