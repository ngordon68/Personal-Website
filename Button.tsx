import Link from "next/link"


type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    variant: string;
    href: string;
}

export const Button = ({type, title, variant, href}: ButtonProps) => {
  return (
    <Link
    href={href}
    className={`flexCenter gap-3 rounded-full border ${variant}`}
    type={type}>

        <label className="bold-16 whitespace-nowrap">
            {title}
        </label>
    </Link>
  )
}

export default Button