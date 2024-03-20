import type { Logo } from "../interfaces/Logo"

export default function Logo({ img, style, name }: Logo) {

    return (
        <>
            <a target="_blank">
                <img src={img} className={'logo ' + style} alt={name + ' logo'} />
            </a>
        </>)
}