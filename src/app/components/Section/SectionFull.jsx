export default function SectionFull({ name, styles, children }) {
    return (
        <section name={name} className={`${styles} py-10 max-w-[1600px] mx-auto`}>
            {children}
        </section>
    )
}