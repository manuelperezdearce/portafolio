export default function Section({ name, styles, children }) {
    return (
        <section name={name} className={`${styles} min-h-screen py-36 px-[8%] md:px-[12%] lg:px-[15%] shadow-lg relative`}>
            {children}
        </section>
    )
}