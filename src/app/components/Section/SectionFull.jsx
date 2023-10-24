export default function SectionFull({ name, styles, children }) {
    return (
        <section name={name} className={`${styles} py-10 overflow-hidden lg:max-h-screen max-w-[1600px] mx-auto`}>
            {children}
        </section>
    )
}