export default function SectionFull({ name, styles, children }) {
    return (
        <section name={name} className={`${styles} shadow-lg relative`}>
            {children}
        </section>
    )
}