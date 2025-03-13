import { cn } from '@/lib/utils'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <svg className={cn('size-7 w-10', className)} viewBox="0 0 35 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.1526 19.8056H31.1477L11.3422 0H3.34702L23.1526 19.8056Z" fill="#7476ED"/>
            <path d="M15.4497 1.01328e-06L34.5419 19.0922V0H29.3752V6.02776L23.3474 0L15.4497 1.01328e-06Z" fill="#E56F8C"/>
            <path d="M0 0.663025V19.8055H5.16667V13.7777L11.1944 19.8055H19.1425L0 0.663025Z" fill="#64C2DB"/>
        </svg>
    )
}

export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <svg className={cn('size-7 w-10', className)} viewBox="0 0 35 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.1526 19.8056H31.1477L11.3422 0H3.34702L23.1526 19.8056Z" fill="none" stroke="#7476ED" strokeWidth="0.5"/>
            <path d="M15.4497 1.01328e-06L34.5419 19.0922V0H29.3752V6.02776L23.3474 0L15.4497 1.01328e-06Z" fill="none" stroke="#E56F8C" strokeWidth="0.5"/>
            <path d="M0 0.663025V19.8055H5.16667V13.7777L11.1944 19.8055H19.1425L0 0.663025Z" fill="none" stroke="#64C2DB" strokeWidth="0.5"/>
        </svg>
    )
}
